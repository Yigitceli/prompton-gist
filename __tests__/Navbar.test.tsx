import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NavBar from "../src/app/Components/NavBar/NavBar";
import { useRouter } from "next/navigation";
import CategoryButton from "../src/app/Components/CategoryButton/CategoryButton";

// useRouter mock'u
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("NavBar Component", () => {
  test("renders NavBar correctly", () => {
    // useRouter mock'unu kullanarak bir mock fonksiyon oluşturun
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { getByText, getByPlaceholderText } = render(<NavBar />);
    
    // NavBar içindeki öğeleri kontrol et
    const promptonGistElement = getByText("Prompton Gist");
    const searchInputElement = getByPlaceholderText("Search...");

    expect(promptonGistElement).toBeInTheDocument();
    expect(searchInputElement).toBeInTheDocument();
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
