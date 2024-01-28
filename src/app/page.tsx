import React from "react";
import RootLayout from "./layout";
import CategoryButton from "./Components/CategoryButton/CategoryButton";
import PromptCard from "./Components/PromptCard/PromptCard";
import { placeholderPrompts } from "./constants";

function AllGists() {
  return (
    <div className="py-3 gap-3 px-3 md:px-20">
      <CategoryButton text="All Gists" />
      <div className="my-5 flex gap-3 flex-col">
        {placeholderPrompts.map((prompt) => (
          <PromptCard {...prompt} key={prompt.name} />
        ))}
      </div>
    </div>
  );
}

export default AllGists;
