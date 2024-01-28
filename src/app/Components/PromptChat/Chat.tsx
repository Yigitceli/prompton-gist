"use client";

import { promptRoles } from "@/app/constants";
import { AppDispatch, useAppSelector } from "@/lib/store";
import { IMessage, IModelAssistant } from "@/types";
import React from "react";
import axios from "axios";
import {
  addPromptMessage,
  recieveMessage,
  setPrompt,
} from "@/lib/features/promptSlice";
import { useDispatch } from "react-redux";

interface IProps {
  prompt: IModelAssistant;
  inputValue: string;
  setInputValue: (value: string) => void;
  setIsLoading: (value: boolean) => void;
  isLoading: boolean;
}

function Chat({
  prompt,
  setInputValue,
  inputValue,
  setIsLoading,
  isLoading,
}: IProps) {
  const promptState = useAppSelector((state) => state.promptReducer.value);
  const dispath = useDispatch<AppDispatch>();

  const sendMessage = async (message: string, model: string) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };

    const filteredMessages = prompt.messages.reduce((acc, msg) => {
      if (msg.id) {
        return [...acc, { role: msg.role, content: msg.content }];
      } else {
        return [...acc, msg];
      }
    }, [] as IMessage[]);

    const data = {
      model: model,
      stream: false,
      messages: [
        ...filteredMessages,
        {
          role: promptRoles.USER,
          content: `Context is ${promptState.projectName}, so only answer questions related with ${promptState.projectName}. Do not answer unrelated questions.`,
        },
        { role: promptRoles.USER, content: message },
      ],
    };

    const response = (await axios.post(url, data, { headers: headers })) as any;
    return response.data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispath(addPromptMessage({ role: promptRoles.USER, content: inputValue }));
    setInputValue("");

    setIsLoading(true);
    const values = await Promise.all([
      sendMessage(inputValue, promptState.ModelAssistant1.name.toLowerCase()),
      sendMessage(inputValue, promptState.ModelAssistant2.name.toLowerCase()),
    ]);
    dispath(recieveMessage([values[0], values[1]]));
    setIsLoading(false);
  };

  return (
    <div className="flex-1 bg-secondBg w-full p-2 md:p-[20px] flex flex-col max-h-[70vh] md:max-h-[80vh]">
      <p className="hidden tablet:inline text-buttonBG text-center md:text-left font-bold border-b-[0.5px] mb-2 pb-1 border-secondaryText">
        {prompt.name}
      </p>
      <div className="h-full flex-col flex text-xs overflow-auto">
        {prompt.messages.map((message) => {
          if (message.role === promptRoles.USER) {
            return (
              <div
                className="flex text-right items-end flex-col gap-1 my-2.5"
                key={message.id}
              >
                <p className="text-white font-bold">You: </p>
                <p className="text-white pr-4 md:pr-6">{message.content}</p>
              </div>
            );
          } else {
            return (
              <div
                className="flex text-left flex-col gap-1 my-2.5"
                key={message.id}
              >
                <p className="text-white font-bold">{prompt.name}:</p>
                <p className="text-white pl-4 md:pl-6">{message.content}</p>
              </div>
            );
          }
        })}
        {isLoading && (
          <div className="flex text-left flex-col gap-1 mt-1">
            <p className="text-white">{prompt.name}:</p>
            <div className="flex gap-2 pl-4 md:pl-6">
              <div className="w-2 h-2 rounded-full animate-pulse bg-buttonBG"></div>
              <div className="w-2 h-2 rounded-full animate-pulse bg-buttonBG"></div>
              <div className="w-2 h-2 rounded-full animate-pulse bg-buttonBG"></div>
            </div>
          </div>
        )}
        <div className="flex flex-col text-sm"></div>
      </div>
      <form onSubmit={handleSubmit} className="flex-1 w-full py-2">
        <input
          className="bg-secondaryText w-full rounded-sm px-2 text-white"
          type="text"
          name="question"
          id="question"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}

export default Chat;
