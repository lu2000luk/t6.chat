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
		},
		"DeepSeek R1 Distill Llama 70B": {
			id: "deepseek-r1-distill-llama-70b",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 128000,
			thinking: true,
		},
		"Llama 3.1 8B Instant": {
			id: "llama-3.1-8b-instant",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 128000,
			thinking: false,
		},
		"Llama 3.3 70B Versatile": {
			id: "llama-3.3-70b-versatile",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 128000,
			thinking: false,
		},
		"Llama3 70B 8192": {
			id: "llama3-70b-8192",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 8192,
			thinking: false,
		},
		"Llama3 8B 8192": {
			id: "llama3-8b-8192",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 8192,
			thinking: false,
		},
		"Llama-4 Maverick 17B 128E Instruct": {
			id: "meta-llama/llama-4-maverick-17b-128e-instruct",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 131072,
			thinking: false,
		},
		"Llama-4 Scout 17B 16E Instruct": {
			id: "meta-llama/llama-4-scout-17b-16e-instruct",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 131072,
			thinking: false,
		},
		"Qwen QWQ 32B": {
			id: "qwen-qwq-32b",
			requiresApiKey: false,
			requiresAuth: true,
			features: {},
			contextLength: 128000,
			thinking: true,
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
		},
		"o3-mini": {
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
		},
		"o1-pro": {
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
		},
		"o4-mini": {
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
		},
		"GPT-4o mini Audio": {
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
		},
		"GPT-4.1 mini": {
            id: "gpt-4.1-mini",
            features: {
                tools: true,
                attachmentsImage: true,
            },
            requiresApiKey: true,
            requiresAuth: true,
            contextLength: 1000000,
            thinking: false,
        },
        "GPT-4": {
            id: "gpt-4",
            features: {},
            requiresApiKey: true,
            requiresAuth: true,
            contextLength: 8192,
            thinking: false,
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
        },
        "GPT-3.5 Turbo": {
            id: "gpt-3.5-turbo",
            features: {},
            requiresApiKey: true,
            requiresAuth: true,
            contextLength: 16000,
            thinking: false,
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
        }
    }
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
}

interface ModelList {
	[key: string]: { [key: string]: Model };
}
