import { NewChatBar } from "@/components/newChatBar";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5 h-full w-full p-2.5 gap-2 scribble-bg">
        <Sidebar />
        <div className="col-span-4 shadow-md flex items-center justify-center w-full h-full bg-card/40 backdrop-blur-md rounded">
          <NewChatBar />
        </div>
      </div>
    </>
  );
}
