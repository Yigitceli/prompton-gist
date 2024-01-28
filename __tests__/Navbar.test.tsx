import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NavBar from "../src/app/Components/NavBar/NavBar";
import { useRouter } from "next/navigation";
import CategoryButton from "../src/app/Components/CategoryButton/CategoryButton";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("NavBar Component", () => {
  test("renders NavBar correctly", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { getByText, getByPlaceholderText } = render(<NavBar />);
    
    const searchInputElement = getByPlaceholderText("Search...");
  });

  test("calls router.push when CategoryButton is clicked", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { getByText } = render(<NavBar />);
    const allGistsButton = getByText("All Gists");

    fireEvent.click(allGistsButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });

  test("calls router.push when Back to Home button is clicked", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { getByText } = render(<NavBar />);
    const backButton = getByText("Back to Home");

    fireEvent.click(backButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
