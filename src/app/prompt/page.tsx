"use client";

import React, { useState } from "react";
import PromptChat from "../Components/PromptChat/PromptChat";
import { useAppSelector } from "@/lib/store";

function Prompt() {
  const prompState = useAppSelector((state) => state.promptReducer.value);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="h-full flex flex-col px-20">
      <div className="flex gap-2 h-full flex-1">
        <PromptChat
          inputValue={inputValue}
          setInputValue={setInputValue}
          prompt={prompState.ModelAssistant1}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
        <PromptChat
          inputValue={inputValue}
          setInputValue={setInputValue}
          prompt={prompState.ModelAssistant2}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Prompt;
