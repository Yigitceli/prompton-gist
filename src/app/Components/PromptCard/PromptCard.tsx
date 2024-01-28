"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import PromptInfo from "./PromptInfo";
import PromptField from "./PromptField";
import { useRouter } from "next/navigation";
import { IAPIResponse, IPrompt } from "@/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { setPrompt } from "@/lib/features/promptSlice";
import { promptRoles } from "@/app/constants";
import axios from "axios";
import Loading from "../Loading/Loading";

function PromptCard({
  name,
  description,
  projectName,
  isPublic,
  messages,
  ModelAssistant1,
  ModelAssistant2,
  rating,
  defaultPrompt,
  createdTime,
  CurrentContextWindowAssistant1,
  CurrentContextWindowAssistant2,
  MaxContextWindowAssistant1,
  MaxContextWindowAssistant2,
}: IPrompt) {
  const router = useRouter();
  const dispath = useDispatch<AppDispatch>();
  const [value, setValue] = useState<string>(defaultPrompt);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = async (message: string, model: string) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };

    const data = {
      model: model,
      stream: false,
      messages: [
        {
          role: "user",
          content: `Context is ${projectName}, so only answer questions related with ${projectName}. Do not answer unrelated questions. Here is the message: ${message}`,
        },
      ],
    };

    const response = (await axios.post(url, data, { headers: headers })) as any;
    return response.data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const values = await Promise.all([
      sendMessage(value, ModelAssistant1),
      sendMessage(value, ModelAssistant2),
    ]) as IAPIResponse[];
    dispath(
      setPrompt({
        ModelAssistant1: {
          name: ModelAssistant1.toUpperCase(),
          CurrentContextWindowAssistant: values[0].usage.total_tokens,
          MaxContextWindowAssistant: MaxContextWindowAssistant1,
          messages: [
            {
              id: new Date().toISOString(),
              role: promptRoles.USER,
              content: value,
            },
            values[0].choices[0]?.message,
          ],
        },
        ModelAssistant2: {
          name: ModelAssistant2.toUpperCase(),
          CurrentContextWindowAssistant: values[1].usage.total_tokens,
          MaxContextWindowAssistant: MaxContextWindowAssistant2,
          messages: [
            {
              id: new Date().toISOString(),
              role: promptRoles.USER,
              content: value,
            },
            values[1].choices[0]?.message,
          ],
        },
        name,
        projectName,
      })
    );
    router.push('/prompt')
    setIsLoading(false);
  };

  return (
    <div className="bg-secondBg md:p-5 p-2 flex flex-col justify-between min-h-36 gap-3">
      {isLoading && <Loading />}
      <div className="flex justify-between items-center md:flex-row flex-col gap-3 md:gap-0">
        <ProfileSection
          name={name}
          projectName={projectName}
          createdTime={createdTime}
        />
        <PromptInfo
          messages={messages}
          ModelAssistant1={ModelAssistant1}
          ModelAssistant2={ModelAssistant2}
          rating={rating}
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <PromptField value={value} setValue={setValue} />
        <div className="text-buttonBG font-bold text-md flex justify-center md:justify-end">
          <button type="submit">View {projectName}</button>
        </div>
      </form>
    </div>
  );
}

export default PromptCard;
