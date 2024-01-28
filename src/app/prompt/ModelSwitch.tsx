import { IModelAssistant } from "@/types";
import React from "react";

interface IProps {
  models: IModelAssistant[];
  activeModel: IModelAssistant;
  setActiveModel: (model: IModelAssistant) => void;
}

function ModelSwitch({ models, activeModel, setActiveModel }: IProps) {
  return (
    <div className="flex md:hidden text-[#409AFF] font-bold py-2">
      {models.map((model) => {
        return (
          <button
            onClick={() => setActiveModel(model)}
            className="flex-1 flex items-center justify-center p-[9px]"
            style={{
                backgroundColor: model.name === activeModel.name ? '#39495E' : '#1f2937'
            }}
          >
            {model.name}
          </button>
        );
      })}
    </div>
  );
}

export default ModelSwitch;
