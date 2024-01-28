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
      messages: [{ role: "user", content: message }],
    };

    const response = (await axios.post(url, data, { headers: headers })) as any;
    return response.data.choices[0]?.message;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const messagesModelAssistant1 = await sendMessage(value, ModelAssistant1);
    const messagesModelAssistant2 = await sendMessage(value, ModelAssistant2);
    dispath(
      setPrompt({
        ModelAssistant1: {
          name: ModelAssistant1.toUpperCase(),
          CurrentContextWindowAssistant: CurrentContextWindowAssistant1,
          MaxContextWindowAssistant: MaxContextWindowAssistant1,
          messages: [
            {
              id: new Date().toISOString(),
              role: promptRoles.USER,
              content: value,
            },
            messagesModelAssistant1,
          ],
        },
        ModelAssistant2: {
          name: ModelAssistant2.toUpperCase(),
          CurrentContextWindowAssistant: CurrentContextWindowAssistant2,
          MaxContextWindowAssistant: MaxContextWindowAssistant2,
          messages: [
            {
              id: new Date().toISOString(),
              role: promptRoles.USER,
              content: value,
            },
            messagesModelAssistant2,
          ],
        },
        name,
        projectName,
      })
    );
    setIsLoading(false);
    router.push("/prompt");
  };

  return (
    <div className="bg-secondBg p-5 flex flex-col justify-between min-h-36 gap-3">
      <div className="flex justify-between items-center">
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
        <div className="text-buttonBG font-bold text-md flex justify-end">
          <button type="submit">View {projectName}</button>
        </div>
      </form>
    </div>
  );
}

export default PromptCard;
