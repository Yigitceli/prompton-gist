import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Context from '../../src/app/Components/PromptChat/Context';

const mockPrompt = {
  name: 'MockPrompt',
  ModelAssistant1: {
    name: 'Model1',
    MaxContextWindowAssistant: 1000,
    CurrentContextWindowAssistant: 500,
    messages: [
      {
        id: '1',
        role: 'assistant',
        content: 'Assistant message content',
      },
    ],
  },
  ModelAssistant2: {
    name: 'Model2',
    MaxContextWindowAssistant: 1000,
    CurrentContextWindowAssistant: 750,
    messages: [
      {
        id: '1',
        role: 'assistant',
        content: 'Assistant message content',
      },
    ],
  },
  messages: [],
};

describe('Context component', () => {
  it('renders Context correctly', () => {
    render(<Context prompt={mockPrompt.ModelAssistant1} />);


    expect(screen.getByText('Filled Context Window')).toBeInTheDocument();
    expect(screen.getByText(`Filled Context Window`)).toHaveTextContent('Filled Context Window');

  });
});
