import React from "react";
import RootLayout from "../layout";
import CategoryButton from "./CategoryButton/CategoryButton";
import Prompt from "./PromptCard/PromptCard";
import { placeholderPrompts } from "../constants";

function AllGists() {
  return (
    <div className="p-3 gap-3">
      <CategoryButton text="All Gists" />
      <div className="my-5 flex gap-3 flex-col">
        {placeholderPrompts.map((prompt) => (
          <Prompt {...prompt} key={prompt.name} />
        ))}
      </div>
    </div>
  );
}

export default AllGists;
