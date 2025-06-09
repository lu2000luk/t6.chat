"use client";

import { Dispatch, JSX, SetStateAction, useEffect, useState, useMemo } from "react";
import Groq from "./logos/groq";
import OpenAI from "./logos/openai";
import Google from "./logos/google";
import Anthropic from "./logos/anthropic";
import DeepSeek from "./logos/deepseek";
import { Brain, X } from "lucide-react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	doesModelExist,
	getModelById,
	getModelName,
	getModelProviderName,
	Model,
	models,
} from "@/lib/models";
import {
	Check,
	Key,
	Lock,
	Image,
	Mic,
	Search,
	Wrench as Tool,
	Video,
	Volume2,
} from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "./ui/input";

export function ModelPicker({
	setModel,
	model,
	authenticated,
}: {
	setModel: (model: Model) => void;
	model: null | Model;
	authenticated: boolean;
}) {
	type IconMapKey =
		| "groq"
		| "openai"
		| "google"
		| "claude"
		| "deepseek"
		| "unknown";
	const iconMap: Record<IconMapKey, JSX.Element> = {
		groq: <Groq />,
		openai: <OpenAI />,
		google: <Google />,
		claude: <Anthropic />,
		deepseek: <DeepSeek />,
		unknown: <X className="w-4 h-4" />,
	};

	const [search, setSearch] = useState("");

	// Calcolo diretto dei provider filtrati senza useMemo e senza animazioni
	const filteredProviders =
		search.trim() === ""
			? Object.entries(models).map(([provider, providerModels]) => ({
					provider,
					filteredModels: Object.entries(providerModels),
			  }))
			: Object.entries(models)
					.map(([provider, providerModels]) => {
						const searchLower = search.toLowerCase();
						const filteredModels = Object.entries(providerModels).filter(
							([name, m]) =>
								m.shortName.toLowerCase().includes(searchLower) ||
								m.id.toLowerCase().includes(searchLower) ||
								(name && name.toLowerCase().includes(searchLower)) ||
								(provider && provider.toLowerCase().includes(searchLower))
						);
						return filteredModels.length > 0
							? { provider, filteredModels }
							: null;
					})
					.filter(Boolean) as { provider: string; filteredModels: [string, Model][] }[];

	useEffect(() => {
		if (!model) {
			const storedModel = localStorage.getItem("selectedModel");
			if (storedModel) {
				setModel(getModelById(storedModel));
			} else {
				setModel(getModelById("gemini-2.0-flash"));
			}
		}
	}, []);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="rounded select-none py-2 px-3 cursor-pointer flex gap-2 text-xs items-center border-1 bg-black/10 h-full">
					{!model && (
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
								>
									<animateTransform
										attributeName="transform"
										dur="0.75s"
										repeatCount="indefinite"
										type="rotate"
										values="0 12 12;360 12 12"
									></animateTransform>
								</path>
							</svg>
							Loading model...
						</>
					)}

					{model && (
						<>
							{iconMap[getModelProviderName(model) as IconMapKey] ||
								iconMap.unknown}
							{getModelName(model)}
						</>
					)}
				</div>
			</PopoverTrigger>
			<PopoverContent asChild side="bottom">
				<div className="h-64 w-md overflow-y-auto no-scrollbar">
					<Input
						placeholder="Search models..."
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>

					{filteredProviders.map(({ provider, filteredModels }) => (
						<div key={provider} className="mb-2">
							<div className="font-semibold text-lg uppercase text-muted-foreground py-1">
								{provider}
							</div>
							<div className="grid grid-cols-3 gap-1">
								{filteredModels.map(([name, m]) => (
									<div
										key={m.id}
										className={
											"p-1 cursor-pointer transition-all min-h-25 rounded flex flex-col items-center justify-center border-1 " +
											(model?.id === m.id
												? "bg-secondary border-primary"
												: "bg-black/20 hover:bg-black/40")
										}
										onClick={() => {
											setModel(m);
										}}
									>
										<div className="scale-120">
											{iconMap[getModelProviderName(m) as IconMapKey] ||
												iconMap.unknown}
										</div>
										<span className="text-xs mt-2">{m.shortName}</span>

										<div className="features flex items-center gap-1 mt-2">
											{m.thinking && (
												<TooltipItem content="Thinking">
													<Brain className="w-4 h-4" />
												</TooltipItem>
											)}

											{m.features.attachmentsAudio && (
												<TooltipItem content="Accept audio input">
													<Mic className="w-4 h-4" />
												</TooltipItem>
											)}

											{m.features.attachmentsImage && (
												<TooltipItem content="Accept image input">
													<Image className="w-4 h-4" />
												</TooltipItem>
											)}

											{m.features.attachmentsVideo && (
												<TooltipItem content="Accept video input">
													<Video className="w-4 h-4" />
												</TooltipItem>
											)}

											{m.features.tools && (
												<TooltipItem content="Tools">
													<Tool className="w-4 h-4" />
												</TooltipItem>
											)}

											{m.features.search && (
												<TooltipItem content="Search">
													<Search className="w-4 h-4" />
												</TooltipItem>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
}

function TooltipItem({
	content,
	children,
}: {
	content: string;
	children: JSX.Element;
}) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent className="text-xs">{content}</TooltipContent>
		</Tooltip>
	);
}
