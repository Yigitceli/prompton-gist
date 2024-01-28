import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CategoryButton from "../src/app/Components/CategoryButton/CategoryButton";

describe("CategoryButton Component", () => {
  test("renders with the correct text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<CategoryButton text={buttonText} />);
    const buttonElement = getByText(buttonText);
    
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick callback when clicked", () => {
    const onClickMock = jest.fn();
    const buttonText = "Click me";
    const { getByText } = render(<CategoryButton text={buttonText} onClick={onClickMock} />);
    const buttonElement = getByText(buttonText);

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  test("renders without onClick when not provided", () => {
    const buttonText = "Click me";
    const { getByText } = render(<CategoryButton text={buttonText} />);
    const buttonElement = getByText(buttonText);

    fireEvent.click(buttonElement); // Should not throw an error
  });
});
