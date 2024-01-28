'use client'

import { IModelAssistant } from "@/types";
import React, { useMemo } from "react";

interface IProps {
  prompt: IModelAssistant
}

function Context({prompt}: IProps) {

  const percentageFilled = useMemo(() => Math.floor((prompt.CurrentContextWindowAssistant / prompt.MaxContextWindowAssistant) * 100) ,[prompt])

  return (
    <div className="text-white flex flex-col gap-1 items-center text-sm py-4">
      <p>Filled Context Window</p>
      <div className="flex gap-2 items-center">
        <span>{prompt.CurrentContextWindowAssistant}</span>

        <div className="w-72 bg-secondaryText rounded-full h-1">
          <div style={{
            width: `${percentageFilled || 0}%`
          }} className={`bg-white h-1 rounded-full`}></div>
        </div>

        <span>{prompt.MaxContextWindowAssistant}</span>
      </div>
    </div>
  );
}

export default Context;
