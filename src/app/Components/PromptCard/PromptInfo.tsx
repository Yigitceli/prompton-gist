import { IMessage } from "@/types";
import React from "react";

interface IProps {
  messages: IMessage[];
  ModelAssistant1: string;
  ModelAssistant2: string;
  rating: number;
}

function PromptInfo({
  messages,
  ModelAssistant1,
  ModelAssistant2,
  rating,
}: IProps) {
  return (
    <div className="flex md:flex-row flex-col justify-end md:gap-3 flex-1 text-secondaryText text-sm">
      <p>
        Uses {ModelAssistant1.toUpperCase()} and {ModelAssistant2.toUpperCase()}
      </p>
      <div className="flex gap-3 justify-center">
        <p>{messages?.length || 0} comments</p>
        <p>{rating} stars</p>
      </div>
    </div>
  );
}

export default PromptInfo;
