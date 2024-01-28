import { IAPIResponse, IMessage, IModelAssistant } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPromptState {
  ModelAssistant1: IModelAssistant;
  ModelAssistant2: IModelAssistant;
  name: string;
  projectName: string;
}

interface IAddMessagePayload {
  model: string;
  message: IMessage;
}

interface IInitialState {
  value: IPromptState;
}

const initialState = {
  value: {
    ModelAssistant1: {
      name: "",
      CurrentContextWindowAssistant: 0,
      messages: [],
      MaxContextWindowAssistant: 0,
    },
    ModelAssistant2: {
      name: "",
      CurrentContextWindowAssistant: 0,
      messages: [],
      MaxContextWindowAssistant: 0,
    },
    name: "",
    projectName: "",
  },
} as IInitialState;

export const prompt = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPrompt: (state, action: PayloadAction<IPromptState>) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
    addPromptMessage: (state, action: PayloadAction<IMessage>) => {
      return {
        value: {
          ModelAssistant1: {
            ...state.value.ModelAssistant1,
            messages: [...state.value.ModelAssistant1.messages, action.payload],
          },
          ModelAssistant2: {
            ...state.value.ModelAssistant2,
            messages: [...state.value.ModelAssistant2.messages, action.payload],
          },
          name: state.value.name,
          projectName: state.value.projectName,
        },
      };
    },
    recieveMessage: (state, action: PayloadAction<IAPIResponse[]>) => {
      const ModelAssistant1Response = action.payload.find((res) =>
        res.model.includes(state.value.ModelAssistant1.name.toLowerCase())
      );
      const ModelAssistant2Response = action.payload.find((res) =>
        res.model.includes(state.value.ModelAssistant2.name.toLowerCase())
      )
      return {
        value: {
          name: state.value.name,
          projectName: state.value.projectName,
          ModelAssistant1: {
            ...state.value.ModelAssistant1,
            messages: [
              ...state.value.ModelAssistant1.messages,
              ModelAssistant1Response!.choices[0].message,
            ],
            CurrentContextWindowAssistant: ModelAssistant1Response?.usage.total_tokens!
          },
          ModelAssistant2: {
            ...state.value.ModelAssistant2,
            messages: [
              ...state.value.ModelAssistant2.messages,
              ModelAssistant2Response!.choices[0].message,
            ],
            CurrentContextWindowAssistant: ModelAssistant2Response?.usage.total_tokens!
          },
        },
      };
    },
  },
});

export const { setPrompt, addPromptMessage, recieveMessage } = prompt.actions;
export default prompt.reducer;
