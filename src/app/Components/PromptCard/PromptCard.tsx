"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import PromptInfo from "./PromptInfo";
import PromptField from "./PromptField";
import { useRouter } from "next/navigation";
import { IPrompt } from "@/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { setPrompt } from "@/lib/features/promptSlice";
import { promptRoles } from "@/app/constants";
import { randomUUID } from "crypto";

function PromptCard({
  name,
  description,
  projectName,
  isPublic,
  messages,
  ModelAssistant1,
  ModelAsssistant2,
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
  const [value, setValue] = useState<string>(defaultPrompt)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(
      setPrompt({
        ModelAssistant1: {
          name: ModelAssistant1,
          CurrentContextWindowAssistant: CurrentContextWindowAssistant1,
          MaxContextWindowAssistant: MaxContextWindowAssistant1,
          messages: [{
            id: new Date().toISOString(),
            role: promptRoles.USER,
            content: value
          }],
        },
        ModelAsssistant2: {
          name: ModelAsssistant2,
          CurrentContextWindowAssistant: CurrentContextWindowAssistant2,
          MaxContextWindowAssistant: MaxContextWindowAssistant2,
          messages: [{
            id: new Date().toISOString(),
            role: promptRoles.USER,
            content: value
          }],
        },
        name,
        projectName,
      })
    );
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
          ModelAssistant2={ModelAsssistant2}
          rating={rating}
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <PromptField value={value} setValue={setValue}/>
        <div className="text-buttonBG font-bold text-md flex justify-end">
          <button type="submit">View {projectName}</button>
        </div>
      </form>
    </div>
  );
}

export default PromptCard;
