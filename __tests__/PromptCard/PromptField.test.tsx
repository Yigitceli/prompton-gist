import { render, screen, fireEvent } from '@testing-library/react';
import PromptField from '../../src/app/Components/PromptCard/PromptField';

describe('PromptField component', () => {
  it('should update value correctly', () => {

    const initialValue = 'Initial Value';
    

    const setValueMock = jest.fn();


    render(<PromptField value={initialValue} setValue={setValueMock} />);


    const inputElement = screen.getByRole('textbox');


    expect(inputElement).toHaveValue(initialValue);


    const newValue = 'New Value';
    fireEvent.change(inputElement, { target: { value: newValue } });


    expect(setValueMock).toHaveBeenCalledWith(newValue);


    expect(inputElement).toHaveValue(newValue);
  });
});
