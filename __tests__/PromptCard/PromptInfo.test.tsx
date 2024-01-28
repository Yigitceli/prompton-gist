import { render, screen } from "@testing-library/react";
import PromptInfo from "../../src/app/Components/PromptCard/PromptInfo";

const mockMessages = [
  { id: "1", role: "user", content: "User message" },
  { id: "2", role: "assistant", content: "Assistant message" },
];

const mockModelAssistant1 = "Model1";
const mockModelAssistant2 = "Model2";
const mockRating = 4;

describe("PromptInfo component", () => {
  it("should render PromptInfo correctly", () => {
    render(
      <PromptInfo
        messages={mockMessages}
        ModelAssistant1={mockModelAssistant1}
        ModelAssistant2={mockModelAssistant2}
        rating={mockRating}
      />
    );

    expect(
      screen.getByText(
        `Uses ${mockModelAssistant1.toUpperCase()} and ${mockModelAssistant2.toUpperCase()}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockMessages.length} comments`)
    ).toBeInTheDocument();
    expect(screen.getByText(`${mockRating} stars`)).toBeInTheDocument();
  });

  it("should render with default values when messages prop is empty", () => {
    render(
      <PromptInfo
        messages={[]}
        ModelAssistant1={mockModelAssistant1}
        ModelAssistant2={mockModelAssistant2}
        rating={mockRating}
      />
    );

    expect(
      screen.getByText(
        `Uses ${mockModelAssistant1.toUpperCase()} and ${mockModelAssistant2.toUpperCase()}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText("0 comments")).toBeInTheDocument();
    expect(screen.getByText(`${mockRating} stars`)).toBeInTheDocument();
  });
});
