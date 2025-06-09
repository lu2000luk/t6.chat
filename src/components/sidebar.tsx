"use client";

import { PlusIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Sidebar({
	chats = [],
	selectedChat = null,
	setSelectedChat = (chat: string | null) => {},
}: {
	chats?: {
		id: string;
		label: string;
		icon: React.ReactNode | string;
	}[];
	selectedChat?: string | null;
	setSelectedChat?: (chat: string | null) => void;
}) {
	const chatContainerRef = useRef<HTMLDivElement>(null);
	const [showFade, setShowFade] = useState(false);

	function calculateFade() {
		const chatContainer = chatContainerRef.current;
		if (!chatContainer) return;

		const clientRect = chatContainer.getBoundingClientRect();
		const scrollHeight = chatContainer.scrollHeight;
		const clientHeight = clientRect.height;
		const scrollTop = chatContainer.scrollTop;
		let shouldShowFade = false;

		if (scrollHeight > clientHeight) {
			shouldShowFade = true;
		}

		if (shouldShowFade && scrollTop + clientHeight >= scrollHeight - 10) {
			shouldShowFade = false;
		}

		setShowFade(shouldShowFade);
	}

	useEffect(calculateFade, [chats]);

	return (
		<>
			<div className="flex flex-col fixed-height shadow-md w-full rounded bg-card/40 backdrop-blur-md">
				<SidebarItem
					icon={<PlusIcon className="w-4 h-4" />}
					label="New chat"
					active={selectedChat === null}
					onClick={() => setSelectedChat(null)}
				/>

				<hr></hr>

				<div
					className="flex-1 overflow-y-auto no-scrollbar min-h-0"
					ref={chatContainerRef}
					onScroll={calculateFade}
				>
                    {chats.map((chat) => (
                        <SidebarItem
                            key={chat.id}
                            icon={chat.icon}
                            label={chat.label}
                            active={selectedChat === chat.id}
                            onClick={() => setSelectedChat(chat.id)}
                        />
                    ))}
				</div>

				<AnimatePresence>
					{showFade && (
						<motion.div
							className="fade absolute bg-gradient-to-b from-transparent pointer-events-none rounded to-secondary/60 w-full h-40 bottom-0 left-0"
							exit={{
								opacity: 0,
								transition: { duration: 0.2 },
							}}
							initial={{
								opacity: 0,
								transition: { duration: 0.2 },
							}}
							animate={{
								opacity: 1,
								transition: { duration: 0.2 },
							}}
						></motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}

function SidebarItem({
	icon,
	label,
	active = false,
	onClick = () => {},
}: {
	icon: React.ReactNode | string;
	label: string;
	active?: boolean;
	onClick?: () => void;
}) {
	return (
		<motion.div
            whileTap={{
                scale: 0.95,
            }}
			className={`flex items-center gap-2 cursor-pointer p-2 m-2 rounded-sm ${
				active
					? "text-primary bg-black/30 hover:bg-black/50 border-1 shadow"
					: "text-muted-foreground hover:bg-black/20 hover:shadow"
			}`}
			onClick={onClick}
		>
			{icon}
			<span className="truncate text-sm select-none">{label}</span>
		</motion.div>
	);
}
