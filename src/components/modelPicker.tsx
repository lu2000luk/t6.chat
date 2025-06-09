"use client";

import { Dispatch, JSX, SetStateAction, useEffect } from "react";
import Groq from "./logos/groq";
import OpenAI from "./logos/openai";
import Google from "./logos/google";
import Anthropic from "./logos/anthropic";
import DeepSeek from "./logos/deepseek";
import { X } from "lucide-react";
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
import { get } from "http";

export function ModelPicker({
	setModel,
	model,
	authenticated,
}: {
	setModel: Dispatch<SetStateAction<null | Model>>;
	model: null | Model;
	authenticated: boolean;
}) {
	type IconMapKey =
		| "groq"
		| "openai"
		| "google"
		| "anthropic"
		| "deepseek"
		| "unknown";
	const iconMap: Record<IconMapKey, JSX.Element> = {
		groq: <Groq />,
		openai: <OpenAI />,
		google: <Google />,
		anthropic: <Anthropic />,
		deepseek: <DeepSeek />,
		unknown: <X className="w-4 h-4" />,
	};

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
							{iconMap[
                                getModelProviderName(model) as IconMapKey
                            ] || iconMap.unknown}
                            {getModelName(model)}
						</>
					)}
				</div>
			</PopoverTrigger>
			<PopoverContent></PopoverContent>
		</Popover>
	);
}
