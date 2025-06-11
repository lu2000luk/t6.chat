import { get } from "http";

export const models: ModelList = {
	google: {
		"Gemini 1.5 Flash 8B": {
			id: "gemini-1.5-flash-8b",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				search: true,
			},
			contextLength: 1000000,
			thinking: false,
			shortName: "1.5 Flash 8B",
		},
		"Gemini 1.5 Flash": {
			id: "gemini-1.5-flash",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				search: true,
				attachmentsImage: true,
				attachmentsVideo: true,
				attachmentsAudio: true,
			},
			contextLength: 1000000,
			thinking: false,
			shortName: "1.5 Flash",
		},
		"Gemini 1.5 Pro": {
			id: "gemini-1.5-pro",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				search: true,
				attachmentsImage: true,
				attachmentsVideo: true,
				attachmentsAudio: true,
			},
			contextLength: 2000000,
			thinking: false,
			shortName: "1.5 Pro",
		},
		"Gemini 2.0 Flash": {
			id: "gemini-2.0-flash",
			requiresApiKey: false,
			requiresAuth: false,
			features: {
				search: true,
				attachmentsImage: true,
				attachmentsVideo: true,
				attachmentsAudio: true,
				tools: true,
			},
			contextLength: 1048576,
			thinking: false,
			shortName: "2.0 Flash",
		},
		"Gemini 2.0 Flash Lite": {
			id: "gemini-2.0-flash-lite",
			requiresApiKey: false,
			requiresAuth: false,
			features: {
				search: true,
				attachmentsImage: true,
				attachmentsVideo: true,
				attachmentsAudio: true,
			},
			contextLength: 1048576,
			thinking: false,
			shortName: "2.0 Flash Lite",
		},
		"Gemini 2.5 Pro Preview": {
			id: "gemini-2.5-pro-preview-06-05",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				search: true,
				attachmentsImage: true,
				attachmentsVideo: true,
				attachmentsAudio: true,
				tools: true,
			},
			contextLength: 1000000,
			thinking: true,
			thinkingLevels: ["low", "medium", "high"],
			exposesThinking: true,
			shortName: "2.5 Pro",
		},
		"Gemini 2.5 Flash Preview 05-20": {
			id: "gemini-2.5-flash-preview-05-20",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				search: true,
				attachmentsImage: true,
				attachmentsVideo: true,
				attachmentsAudio: true,
			},
			contextLength: 1000000,
			thinking: true,
			thinkingLevels: ["none", "low", "medium", "high"],
			exposesThinking: true,
			shortName: "2.5 Flash",
		},
	},
	groq: {
		"Gemma 2 9b": {
			id: "gemma2-9b-it",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 8192,
			thinking: false,
			shortName: "Gemma 2 9B",
		},
		"DeepSeek R1 Distill Llama 70B": {
			id: "deepseek-r1-distill-llama-70b",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 128000,
			thinking: true,
			shortName: "Llama 70B Distill R1",
		},
		"Llama 3.1 8B Instant": {
			id: "llama-3.1-8b-instant",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 128000,
			thinking: false,
			shortName: "Llama 3.1 8B",
		},
		"Llama 3.3 70B Versatile": {
			id: "llama-3.3-70b-versatile",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 128000,
			thinking: false,
			shortName: "Llama 3.3 70B",
		},
		"Llama 3 70B 8192": {
			id: "llama3-70b-8192",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 8192,
			thinking: false,
			shortName: "Llama 3 70B",
		},
		"Llama 3 8B 8192": {
			id: "llama3-8b-8192",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 8192,
			thinking: false,
			shortName: "Llama 3 8B",
		},
		"Llama 4 Maverick 17B Instruct": {
			id: "meta-llama/llama-4-maverick-17b-128e-instruct",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 131072,
			thinking: false,
			shortName: "Llama 4 Maverick",
		},
		"Llama 4 Scout 17B Instruct": {
			id: "meta-llama/llama-4-scout-17b-16e-instruct",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 131072,
			thinking: false,
			shortName: "Llama 4 Scout",
		},
		"Qwen QwQ 32B": {
			id: "qwen-qwq-32b",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 128000,
			thinking: true,
			shortName: "QwQ 32B",
		},
	},
	claude: {
		"Claude Haiku 3": {
			id: "claude-3-haiku-20240307",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				attachmentsImage: true,
				tools: true,
			},
			contextLength: 200000,
			thinking: false,
			shortName: "Haiku 3",
		},
		"Claude Opus 3": {
			id: "claude-3-opus-20240229",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				attachmentsImage: true,
				tools: true,
			},
			contextLength: 200000,
			thinking: false,
			shortName: "Opus 3",
		},
		"Claude Haiku 3.5": {
			id: "claude-3-5-haiku-20241022",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				attachmentsImage: true,
				tools: true,
			},
			contextLength: 200000,
			thinking: false,
			shortName: "Haiku 3.5",
		},
		"Claude Sonnet 3.5": {
			id: "claude-3-5-sonnet-20241022",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				attachmentsImage: true,
				tools: true,
			},
			contextLength: 200000,
			thinking: false,
			shortName: "Sonnet 3.5",
		},
		"Claude Sonnet 3.7": {
			id: "claude-3-7-sonnet-20250219",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				attachmentsImage: true,
				tools: true,
			},
			contextLength: 200000,
			thinking: true,
			thinkingLevels: ["low", "medium", "high"],
			exposesThinking: true,
			shortName: "Sonnet 3.7",
		},
		"Claude Sonnet 4": {
			id: "claude-sonnet-4-20250514",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				attachmentsImage: true,
				tools: true,
			},
			contextLength: 200000,
			thinking: true,
			thinkingLevels: ["low", "medium", "high"],
			exposesThinking: true,
			shortName: "Sonnet 4",
		},
		"Claude Opus 4": {
			id: "claude-opus-4-20250514",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				attachmentsImage: true,
				tools: true,
			},
			contextLength: 200000,
			thinking: true,
			thinkingLevels: ["low", "medium", "high"],
			exposesThinking: true,
			shortName: "Opus 4",
		},
	},
	openai: {
		"4o mini": {
			id: "o4-mini",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 200000,
			thinking: true,
			thinkingLevels: ["low", "medium", "high"],
			exposesThinking: false,
			shortName: "4o mini",
		},
		o3: {
			id: "o3",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 200000,
			thinking: true,
			thinkingLevels: ["low", "medium", "high"],
			exposesThinking: false,
			shortName: "o3",
		},
		"o3 mini": {
			id: "o3-mini",
			features: {
				tools: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 200000,
			thinking: true,
			thinkingLevels: ["low", "medium", "high"],
			exposesThinking: false,
			shortName: "o3 mini",
		},
		o1: {
			id: "o1",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 200000,
			thinking: true,
			thinkingLevels: ["low", "medium", "high"],
			exposesThinking: false,
			shortName: "o1",
		},
		"o1 Pro": {
			id: "o1-pro",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 200000,
			thinking: true,
			thinkingLevels: ["low", "medium", "high"],
			exposesThinking: false,
			shortName: "o1 Pro",
		},
		"GPT-4.1": {
			id: "gpt-4.1",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 1000000,
			thinking: false,
			shortName: "GPT-4.1",
		},
		"GPT-4o": {
			id: "gpt-4o",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 128000,
			thinking: false,
			shortName: "GPT-4o",
		},
		"GPT-4o Audio": {
			id: "gpt-4o-audio-preview",
			features: {
				tools: true,
				attachmentsAudio: true,
				outputAudio: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 128000,
			thinking: false,
			shortName: "GPT-4o Audio",
		},
		"ChatGPT-4o": {
			id: "chatgpt-4o-latest",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 128000,
			thinking: false,
			shortName: "ChatGPT-4o",
		},
		"GPT-4.1 Nano": {
			id: "gpt-4.1-nano",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: false,
			requiresAuth: true,
			contextLength: 1000000,
			thinking: false,
			shortName: "GPT-4.1 Nano",
		},
		"GPT-4o Mini": {
			id: "gpt-4o-mini",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 128000,
			thinking: false,
			shortName: "GPT-4o Mini",
		},
		"GPT-4o Mini Audio": {
			id: "gpt-4o-mini-audio-preview",
			features: {
				tools: true,
				attachmentsAudio: true,
				outputAudio: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 128000,
			thinking: false,
			shortName: "GPT-4o Mini Audio",
		},
		"GPT-4.1 Mini": {
			id: "gpt-4.1-mini",
			features: {
				tools: true,
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 1000000,
			thinking: false,
			shortName: "GPT-4.1 Mini",
		},
		"GPT-4": {
			id: "gpt-4",
			features: {},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 8192,
			thinking: false,
			shortName: "GPT-4",
		},
		"GPT-4 Turbo": {
			id: "gpt-4-turbo",
			features: {
				attachmentsImage: true,
			},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 128000,
			thinking: false,
			shortName: "GPT-4 Turbo",
		},
		"GPT-3.5 Turbo": {
			id: "gpt-3.5-turbo",
			features: {},
			requiresApiKey: true,
			requiresAuth: true,
			contextLength: 16000,
			thinking: false,
			shortName: "GPT-3.5 Turbo",
		},
	},
	deepseek: {
		"Deepseek Chat": {
			id: "deepseek-chat",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				tools: true,
			},
			contextLength: 64000,
			thinking: false,
			shortName: "Deepseek V3",
		},
		"Deepseek Reasoner": {
			id: "deepseek-reasoner",
			requiresApiKey: true,
			requiresAuth: true,
			features: {
				tools: true,
			},
			contextLength: 64000,
			thinking: true,
			exposesThinking: true,
			shortName: "Deepseek R1"
		},
	},
};

export interface Model {
	id: string;
	requiresApiKey: boolean;
	requiresAuth: boolean;
	features: {
		imageGeneration?: boolean;
		search?: boolean;
		attachmentsImage?: boolean;
		attachmentsVideo?: boolean;
		attachmentsAudio?: boolean;
		outputAudio?: boolean;
		tools?: boolean;
	};
	contextLength: number;
	thinking: boolean;
	thinkingLevels?: string[];
	exposesThinking?: boolean;
	freeUnlimited?: boolean;
	shortName: string;
}

interface ModelList {
	[key: string]: { [key: string]: Model };
}

export function getModelById(modelId: string): Model | null {
	for (const provider in models) {
		const providerModels = models[provider];
		for (const model of Object.values(providerModels)) {
			if (model.id === modelId) {
				return model;
			}
		}
	}
	return null;
}

export function doesModelExist(model: Model): boolean {
	for (const provider in models) {
		const providerModels = models[provider];
		if (providerModels[model.id]) {
			return true;
		}
	}
	return false;
}

export function getModelProviderName(model: Model | null): string | null {
	if (!model) return null;
	for (const provider in models) {
		const providerModels = models[provider];
		for (const modelEntry of Object.values(providerModels)) {
			if (modelEntry.id === model.id) {
				return provider;
			}
		}
	}
	return null;
}

export function getModelName(model: Model): string | null {
	for (const provider in models) {
		const providerModels = models[provider];
		const name = Object.keys(providerModels).find(
			(name) => providerModels[name].id === model.id
		);
		if (name) {
			return name;
		}
	}
	return null;
}

export function canModelBeUsed(model: Model, authenticated: false | string | null, keys: { [key: string]: string }): boolean {
	if (model.requiresAuth && !authenticated) {
		return false;
	}

	const providerName = getModelProviderName(model);
	if (model.requiresApiKey && (!providerName || !keys[providerName])) {
		return false;
	}
	
	return true;
}