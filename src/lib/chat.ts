import { Model } from "./models";

export interface Chat {
    temp: boolean;
    id: string | null;
    name: string;
    icon: string;
    enabledTools: ToolId[];
    messages: ChatMessage[];
    firstMessageId: string;
    branchCount: number;
}

export interface ToolUse {
    toolId: ToolId;
    input: any;
    output?: any;
    error?: string;
    timeTaken?: number;
}

export interface MessageBranch {
    id: string;
    startMessageId: string;
    parentBranch?: MessageBranch;
}

export interface ChatMessage {
    inBranches: MessageBranch[];
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
    createdAt: string;
    model: Model;
    thinkingData?: {
        thinkingLevel?: string;
        thinkingContent?: string;
        thinkingTime?: number;
    },
    attachments?: {
        image?: string[];
        video?: string[];
        audio?: string[];
        clipboard?: string[];
        file?: string[];
    };
    usedTools?: ToolUse[];
}

export function getMainBranch(firstMessageId: string): MessageBranch {
    return {
        id: "main",
        startMessageId: firstMessageId,
        parentBranch: undefined,
    } as MessageBranch;
}

export type ToolId = "search" | "math" | "codeArtifact" | "codeInterpreter"