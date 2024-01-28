import { IPrompt } from "@/types";

export const placeholderPrompts: IPrompt[] = [
  {
    name: "choco-bot",
    projectName: "Milk Chocolate Brand Finder",
    description: "Find Popular Chocolate Milk Brands",
    isPublic: true,
    rating: 0,
    messages: [],
    defaultPrompt: "Find 10 most popular milk chocolate brands in california",
    ModelAssistant1: "gpt-4",
    ModelAssistant2: "gpt-3.5-turbo",
    CurrentContextWindowAssistant1: 30,
    CurrentContextWindowAssistant2: 34,
    MaxContextWindowAssistant1: 128000,
    MaxContextWindowAssistant2: 32000,
    createdTime: "34 minutes ago",
  },
  {
    name: "keymate-coffee-bot",
    projectName: "Real time coffee price checker",
    description: "Find Popular Chocolate Milk Brands",
    isPublic: true,
    rating: 0,
    messages: [],
    defaultPrompt:
      "Find The Price of a Cup of Coffee in California January 2024",
    ModelAssistant1: "gpt-4",
    ModelAssistant2: "gpt-3.5-turbo",
    CurrentContextWindowAssistant1: 30,
    CurrentContextWindowAssistant2: 34,
    MaxContextWindowAssistant1: 128000,
    MaxContextWindowAssistant2: 32000,
    createdTime: "1 hour ago",
  },
];

export const promptRoles = {
  USER: "user",
  ASSISTANT: "assistant",
};

export const modelsMaxContextWindows = {
  'gpt-4': 128000,
  'gpt-3.5-turbo': 32000,
}
