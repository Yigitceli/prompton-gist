import React from "react";
import { render } from "@testing-library/react";
import Loading from "../src/app/Components/Loading/Loading";

describe("Loading Component", () => {
  test("renders loading spinner", () => {
    const { getByRole } = render(<Loading />);
    const loadingElement = getByRole("status");

    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass("absolute");
    expect(loadingElement).toHaveClass("-translate-x-1/2");
    expect(loadingElement).toHaveClass("-translate-y-1/2");
    expect(loadingElement).toHaveClass("top-2/4");
    expect(loadingElement).toHaveClass("left-1/2");
    expect(loadingElement).toHaveClass("bg-secondaryText");
    expect(loadingElement).toHaveClass("w-full");
    expect(loadingElement).toHaveClass("h-full");
    expect(loadingElement).toHaveClass("bg-opacity-20");
    expect(loadingElement).toHaveClass("flex");
    expect(loadingElement).toHaveClass("justify-center");
    expect(loadingElement).toHaveClass("items-center");

    const spinnerElement = loadingElement.querySelector(".w-16.h-16.border-8.border-dashed.rounded-full.animate-spin.border-buttonBG");
    expect(spinnerElement).toBeInTheDocument();
  });
});
