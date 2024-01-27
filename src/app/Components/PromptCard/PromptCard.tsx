import Image from "next/image";
import React from "react";
import ProfileSection from "./ProfileSection";
import PromptInfo from "./PromptInfo";
import PromptField from "./PromptField";

export interface IMessage {
  role: string;
  content: string;
}

export interface IPromptProps {
  name: string;
  description: string;
  projectName: string;
  isPublic: boolean;
  messages: IMessage[];
  MaxContextWindowAssistant1: number;
  MaxContextWindowAssistant2: number;
  ModelAssistant1: string;
  ModelAsssistant2: string;
  CurrentContextWindowAssistant1: number;
  CurrentContextWindowAssistant2: number;
  rating: number;
  defaultPrompt: string;
  createdTime: string;
}

function Prompt({
  name,
  description,
  projectName,
  isPublic,
  messages,
  ModelAssistant1,
  ModelAsssistant2,
  rating,
  defaultPrompt,
  createdTime
}: IPromptProps) {
  return (
    <div className="bg-secondBg p-5 flex flex-col justify-between min-h-36 gap-3">
      <div className="flex justify-between items-center">
        <ProfileSection name={name} projectName={projectName} createdTime={createdTime}/>
        <PromptInfo
          messages={messages}
          ModelAssistant1={ModelAssistant1}
          ModelAssistant2={ModelAsssistant2}
          rating={rating}
        />
      </div>
      <PromptField defaultPrompt={defaultPrompt} />
      <div className="text-buttonBG font-bold text-md flex justify-end">
        <button>View {projectName}</button>
      </div>
    </div>
  );
}

export default Prompt;
