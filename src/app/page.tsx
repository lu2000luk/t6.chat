"use client";

import { NewChatBar } from "@/components/newChatBar";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";

export default function Home() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-5 h-full w-full p-2.5 gap-2 scribble-bg">
        <Sidebar chats={chats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
        <div className="col-span-4 shadow-md flex items-center justify-center w-full h-full bg-card/40 backdrop-blur-md rounded">
          <NewChatBar />
        </div>
      </div>
    </>
  );
}
