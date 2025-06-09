"use client";

import {
	Brain,
	Code,
	LucideImage,
	Paperclip,
	Search,
	Send,
} from "lucide-react";
import { Button } from "./ui/button";
import OpenAI from "./logos/openai";
import { motion } from "motion/react";
import { ModelPicker } from "./modelPicker";
import { useState } from "react";
import { getModelById, Model } from "@/lib/models";

export function NewChatBar() {
	const [model, setModel] = useState<Model | null>(null);

	return (
		<>
			<div className="flex flex-col p-2 gap-2 rounded-md bg-secondary border-1 shadow-md">
				<div className="flex items-center gap-1">
					<input
						type="text"
						autoFocus
						className="ring-none border-none outline-0 bg-transparent text-sm w-md pl-1"
						placeholder="Ask anything..."
					></input>

					<Button className="items-center" variant={"outline"}>
						<Paperclip />
					</Button>

					<Button className="items-center" variant={"outline"}>
						<Send />
					</Button>
				</div>
				<div className="flex gap-2 items-center justify-between">
					<div className="model flex items-center gap-2">
						<ModelPicker authenticated={false} setModel={(model: Model) => {
							localStorage.setItem("selectedModel", model?.id || "gemini-2.0-flash");
							console.log("Selected model:", model);
							if (model === null) {
								setModel(getModelById("gemini-2.0-flash"));
							} else {
								setModel(model);
							}
						}} model={model} />
					</div>

					<div className="features flex items-center gap-1">
						<FeatureButton>
							<LucideImage className="w-4 h-4" />
							<span className="text-xs">Image Creator</span>
						</FeatureButton>

						<FeatureButton>
							<Search className="w-4 h-4" />
							<span className="text-xs">Deep Search</span>
						</FeatureButton>
					</div>
				</div>
			</div>
		</>
	);
}

function FeatureButton({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			whileTap={{
				scale: 0.95,
			}}
			className="flex text-muted-foreground items-center gap-1 hover:bg-black/30 rounded p-2 cursor-pointer"
		>
			{children}
		</motion.div>
	);
}
