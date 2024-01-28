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
    <div className="flex justify-end gap-5 flex-1 text-secondaryText text-sm">
      <p>
        Uses {ModelAssistant1} and {ModelAssistant2}
      </p>
      <p>{messages?.length || 0} comments</p>
      <p>{rating} stars</p>
    </div>
  );
}

export default PromptInfo;
