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
    ModelAssistant1: "GPT-4-turbo",
    ModelAsssistant2: "GPT-3.5-16k-turbo",
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
    ModelAssistant1: "GPT-4-turbo",
    ModelAsssistant2: "GPT-3.5-16k-turbo",
    CurrentContextWindowAssistant1: 30,
    CurrentContextWindowAssistant2: 34,
    MaxContextWindowAssistant1: 128000,
    MaxContextWindowAssistant2: 32000,
    createdTime: "1 hour ago",
  },
];
