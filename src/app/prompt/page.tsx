"use client";

import React, { useEffect, useMemo, useState } from "react";
import PromptChat from "../Components/PromptChat/PromptChat";
import { useAppSelector } from "@/lib/store";
import ModelSwitch from "./ModelSwitch";
import { IModelAssistant } from "@/types";
import { useRouter } from "next/navigation";

function Prompt() {
  const prompState = useAppSelector((state) => state.promptReducer.value);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeModel, setActiveModel] = useState<IModelAssistant>(
    prompState.ModelAssistant1
  );
  
  const router = useRouter()
  if(!prompState.name) router.push('/')

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="h-full flex flex-col px-3 lg:px-20">
      <ModelSwitch
        models={[prompState.ModelAssistant1, prompState.ModelAssistant2]}
        activeModel={activeModel}
        setActiveModel={setActiveModel}
      />
      <div className="tablet:flex gap-2 h-full flex-1 hidden">
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
      <div className="tablet:hidden h-full">
        <PromptChat
          inputValue={inputValue}
          setInputValue={setInputValue}
          prompt={activeModel.name === prompState.ModelAssistant1.name ? prompState.ModelAssistant1 : prompState.ModelAssistant2}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Prompt;
