import React, { useState } from "react";
import Context from "./Context";
import Chat from "./Chat";
import { IModelAssistant } from "@/types";
import Loading from "../Loading/Loading";

interface IProps {
  prompt: IModelAssistant;
  inputValue: string;
  setInputValue: (value: string) => void;
  setIsLoading: (value: boolean) => void;
  isLoading: boolean
}

function PromptChat({ prompt, inputValue, setInputValue, isLoading, setIsLoading }: IProps) {

  return (
    <div className="flex-1 justify-center flex flex-col items-center h-full pb-2">
      <Context prompt={prompt} />
      <Chat
        setIsLoading={setIsLoading}
        prompt={prompt}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isLoading={isLoading}
      />
    </div>
  );
}

export default PromptChat;
