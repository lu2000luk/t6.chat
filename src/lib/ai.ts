import { Chat, ChatMessage } from "./chat";
import { streamText } from "ai";
import { createOpenAI as openai } from "@ai-sdk/openai";
import { createGoogleGenerativeAI as google } from "@ai-sdk/google";
import { createGroq as groq } from "@ai-sdk/groq";
import { createDeepSeek as deepseek } from "@ai-sdk/deepseek";
import { createAnthropic as claude } from "@ai-sdk/anthropic";
import { getModelById, getModelProviderName, Model } from "./models";
import { tools } from "./tools";

const google_api_key = process.env.GEMINI_API_KEY;
const groq_api_key = process.env.GROQ_API_KEY;

export function getProviderFunctionByModel(model: Model, apiKey: string) {
  const functions = {
    groq,
    deepseek,
    openai,
    google,
    claude
  };
  type ProviderName = keyof typeof functions;
  const providerName = getModelProviderName(model) as ProviderName | undefined;
  if (!providerName) {
    throw new Error(`No provider function found for model: ${model.id}`);
  }

  if (!functions[providerName]) {
    throw new Error(`No provider function found for model: ${model.id}`);
  }

  return functions[providerName]({
    apiKey: apiKey,
  });
}

export function getApiKeyByModel(model: Model, keys: { [key: string]: string }) {
    if (model.requiresApiKey) {
        const apiKey = keys[model.id];
        if (!apiKey) {
        throw new Error(`API key for model ${model.id} is required`);
        }
        return apiKey;
    } else {
        const providerName = getModelProviderName(model);
        if (providerName === "google" && !google_api_key) {
            throw new Error("Google API key is required for Google models");
        }
        if (providerName === "groq" && !groq_api_key) {
            throw new Error("Groq API key is required for Groq models");
        }

        if (providerName === "google") {
            if (!google_api_key) {
                throw new Error("Google API key is required for Google models");
            }
            return google_api_key;
        }
        if (providerName === "groq") {
            if (!groq_api_key) {
                throw new Error("Groq API key is required for Groq models");
            }
            return groq_api_key;
        }

        throw new Error(
            `No API key found for model: ${model.id}. Please provide a valid API key.`
        );
    }
}

export function ask(
  chat: Chat,
  message: ChatMessage,
  keys: { [key: string]: string }
) {
  const model = getModelById(message.model.id);
  if (!model) {
    throw new Error("Model is required for asking a question");
  }

  if (model.requiresApiKey && !keys[model.id]) {
    throw new Error(`API key for model ${model.id} is required`);
  }

  const providerFn = getProviderFunctionByModel(model, getApiKeyByModel(model, keys));
  const languageModel = providerFn(model.id);
  const currentBranch = message.inBranches[message.inBranches.length - 1];

  const relevantMessages = chat.messages
    .filter((msg) => {
      let isInBranchOrParent = false;
      let branchToCheck: import("./chat").MessageBranch | undefined = currentBranch;
      while (branchToCheck) {
        if (
          msg.inBranches.some((b) => b.id === branchToCheck!.id) &&
          new Date(msg.createdAt) <= new Date(message.createdAt)
        ) {
          isInBranchOrParent = true;
          break;
        }
        branchToCheck = branchToCheck.parentBranch;
      }
      return isInBranchOrParent;
    })
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

  const formattedMessages = relevantMessages.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  formattedMessages.push({
    role: message.role,
    content: message.content,
  });

  const textStream = streamText({
    model: languageModel,
    messages: formattedMessages as any,
  });
  
  console.log(formattedMessages);

  return textStream;
}
