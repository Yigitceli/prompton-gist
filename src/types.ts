export interface IMessage {
  id: string;
  role: string;
  content: string;
}

export interface IPrompt {
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

export interface IModelAssistant {
  name: string;
  MaxContextWindowAssistant: number;
  CurrentContextWindowAssistant: number;
  messages: IMessage[];
}

export interface IChoice {
  message: IMessage;
  index: number;
  finish_reason: string;
}

export interface IAPIResponse {
  choices: IChoice[];
  created: number;
  id: string;
  model: string;
  object: string;
  usage: {
    total_tokens: number;
    prompt_tokens: number;
    completion_tokens: number;
  }
}
