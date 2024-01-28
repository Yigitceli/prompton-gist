"use client";

import { promptRoles } from "@/app/constants";
import { useAppSelector } from "@/lib/store";
import { IModelAssistant } from "@/types";
import React from "react";

interface IProps {
  prompt: IModelAssistant;
  inputValue: string;
  setInputValue: (value: string) => void;
}

function Chat({ prompt, setInputValue, inputValue }: IProps) {
  return (
    <div className="flex-1 bg-secondBg w-full p-[20px] flex flex-col">
      <p className="text-buttonBG font-bold border-b-[0.5px] mb-2 pb-1 border-secondaryText">
        {prompt.name}
      </p>
      <div className="h-full flex flex-col">
        <div className="h-full">
          {prompt.messages.map((message) => {
            if (message.role === promptRoles.USER) {
              return (
                <div className="flex items-end flex-col" key={message.id}>
                  <p className="text-white">You: </p>
                  <p className="text-white pr-6">{message.content}</p>
                </div>
              );
            } else {
              return (
                <div className="flex flex-col" key={message.id}>
                  <p className="text-white">LLM:</p>
                  <p className="text-white pl-6">
                    {message.content}
                  </p>
                </div>
              );
            }
          })}
          <div className="flex flex-col text-sm"></div>
        </div>
        <div className="flex w-full">
          <input
            className="bg-secondaryText w-full rounded-sm px-2 text-white"
            type="text"
            name="question"
            id="question"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
