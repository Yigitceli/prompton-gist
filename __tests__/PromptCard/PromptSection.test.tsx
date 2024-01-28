import React from "react";
import { render } from "@testing-library/react";
import ProfileSection from "../../src/app/Components/PromptCard/ProfileSection";

describe("ProfileSection Component", () => {
  const sampleProps = {
    name: "John Doe",
    projectName: "Sample Project",
    createdTime: "2022-01-01",
  };

  test("renders ProfileSection correctly", () => {
    const { getByText, getByAltText } = render(
      <ProfileSection {...sampleProps} />
    );


    const nameAndProjectElement = getByText("John Doe / Sample Project");
    const createdTimeElement = getByText("Created 2022-01-01");

    expect(nameAndProjectElement).toBeInTheDocument();
    expect(createdTimeElement).toBeInTheDocument();
  });
});
