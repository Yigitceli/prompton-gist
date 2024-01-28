import { IMessage, IModelAssistant } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPromptState {
    ModelAssistant1: IModelAssistant,
    ModelAsssistant2: IModelAssistant,
    name: string,
    projectName: string,
}

interface IInitialState {
    value: IPromptState
}

const initialState = {
    value: {
        ModelAssistant1: {
            name: '',
            CurrentContextWindowAssistant: 0,
            messages: [],
            MaxContextWindowAssistant: 0
        },
        ModelAsssistant2: {
            name: '',
            CurrentContextWindowAssistant: 0,
            messages: [],
            MaxContextWindowAssistant: 0
        },
        name: '',
        projectName: '',
    }
} as IInitialState

export const prompt = createSlice({
    name: 'prompt',
    initialState,
    reducers: {
        setPrompt: (state, action: PayloadAction<IPromptState>) => {
             return {
                value: {
                    ...action.payload
                }
             }
        }
    }
})

export const {setPrompt} = prompt.actions
export default prompt.reducer