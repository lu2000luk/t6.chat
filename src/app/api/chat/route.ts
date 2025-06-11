import { ask } from "@/lib/ai";
import { Chat, ChatMessage } from "@/lib/chat";
import { canModelBeUsed, doesModelExist, getModelById, Model, models } from "@/lib/models";
import { getRatelimitKey, isRatelimited } from "@/lib/utils";

export async function POST(request: Request) {
    const body = await request.json();  
    const { authenticated, keys, chat, message }: {
        authenticated: boolean | string | null;
        keys: {
            [key: string]: string;
        };
        chat: Chat;
        message: ChatMessage;
    } = body;

    if (!chat) {
        return new Response("Chat is required", { status: 400 });
    }

    if (!message) {
        return new Response("Message is required", { status: 400 });
    }

    if (typeof authenticated !== "boolean" && typeof authenticated !== "string") {
        return new Response("Authenticated must be a boolean or string", { status: 400 });
    }

    if (authenticated === true && typeof authenticated !== "string") {
        return new Response("Authenticated must be a string when true", { status: 400 });
    }

    const model = getModelById(message.model.id);

    if (!model) {
        return new Response("Model not found", { status: 400 });
    }

    if (!canModelBeUsed(model, authenticated, keys)) {
        return new Response("Model cannot be used with the provided authentication and keys", { status: 403 });
    }

    const rateLimitKey = await getRatelimitKey(authenticated, request);

    if (!rateLimitKey) {
        return new Response("IP Address / Ratelimit key could not be determined", { status: 500 });
    }

    if (await isRatelimited(rateLimitKey)) {
        return new Response("Rate limit exceeded", { status: 429 });
    }

    const textStream = ask(chat, message, keys);

    if (!authenticated) {
        console.log("Streaming response for unauthenticated user...");
        return textStream.toDataStreamResponse();
    }
}