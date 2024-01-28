"use client";

import { promptRoles } from "@/app/constants";
import { AppDispatch, useAppSelector } from "@/lib/store";
import { IMessage, IModelAssistant } from "@/types";
import React from "react";
import axios from "axios";
import { addPromptMessage, recieveMessage, setPrompt } from "@/lib/features/promptSlice";
import { useDispatch } from "react-redux";

interface IProps {
  prompt: IModelAssistant;
  inputValue: string;
  setInputValue: (value: string) => void;
  setIsLoading: (value: boolean) => void;
}

function Chat({ prompt, setInputValue, inputValue, setIsLoading }: IProps) {
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
        { role: promptRoles.USER, content: message },
      ],
    };

    const response = (await axios.post(url, data, { headers: headers })) as any;
    return response.data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispath(addPromptMessage({role: promptRoles.USER, content: inputValue}))
    setInputValue('')

    setIsLoading(true);
    const modelAssistantResponse1= await sendMessage(
      inputValue,
      promptState.ModelAssistant1.name.toLowerCase()
    );
    const modelAssistantResponse2 = await sendMessage(
      inputValue,
      promptState.ModelAssistant2.name.toLowerCase()
    );
    dispath(recieveMessage([modelAssistantResponse1, modelAssistantResponse2]))
    setIsLoading(false);
  };

  return (
    <div className="flex-1 bg-secondBg w-full p-[20px] flex flex-col">
      <p className="text-buttonBG font-bold border-b-[0.5px] mb-2 pb-1 border-secondaryText">
        {prompt.name}
      </p>
      <div className="h-full flex flex-col text-sm">
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
                  <p className="text-white">{prompt.name}:</p>
                  <p className="text-white pl-6">{message.content}</p>
                </div>
              );
            }
          })}
          <div className="flex flex-col text-sm"></div>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full">
          <input
            className="bg-secondaryText w-full rounded-sm px-2 text-white"
            type="text"
            name="question"
            id="question"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Chat;
