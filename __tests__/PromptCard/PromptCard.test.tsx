// PromptCard.test.tsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios'; // Bu satırı kaldırın

// Axios'u mocklamak için eklenen satır
jest.mock('axios');

import PromptCard from '../../src/app/Components/PromptCard/PromptCard';

describe('PromptCard component', () => {
  it('renders PromptCard correctly', async () => {
    // Axios mock fonksiyonunu tanımlayın
    (axios.post as jest.Mock).mockResolvedValueOnce({
      data: {
        choices: [{ message: 'Assistant 1 response' }],
        usage: { total_tokens: 42 },
      },
    });

    (axios.post as jest.Mock).mockResolvedValueOnce({
      data: {
        choices: [{ message: 'Assistant 2 response' }],
        usage: { total_tokens: 24 },
      },
    });

    render(<PromptCard {...yourPropsHere} />);

    // Ekran üzerinde görünen içerikleri kontrol edin
    expect(screen.getByText('Name / Project Name')).toBeInTheDocument();
    expect(screen.getByText('Created Date')).toBeInTheDocument();

    // Kullanıcı etkileşimini taklit etmek için fireEvent veya userEvent kullanın
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'User input' } });
    userEvent.click(screen.getByRole('button', { name: /View Project Name/i }));

    // Axios'un beklenen şekilde çağrılıp çağrılmadığını kontrol edin
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'https://api.openai.com/v1/chat/completions',
        expect.objectContaining({
          model: 'Model1', // ModelAssistant1'un ismini buraya ekleyin
          messages: expect.arrayContaining([
            expect.objectContaining({
              role: 'user',
              content: expect.stringContaining('Context is Project Name'),
            }),
          ]),
        }),
        expect.any(Object)
      );

      expect(axios.post).toHaveBeenCalledWith(
        'https://api.openai.com/v1/chat/completions',
        expect.objectContaining({
          model: 'Model2', // ModelAssistant2'nin ismini buraya ekleyin
          messages: expect.arrayContaining([
            expect.objectContaining({
              role: 'user',
              content: expect.stringContaining('Context is Project Name'),
            }),
          ]),
        }),
        expect.any(Object)
      );
    });

    // İstediğiniz diğer kontrolleri ekleyin
  });
});
