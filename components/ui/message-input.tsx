import * as React from "react";
import { Send } from "lucide-react";

export function MessageInput({ channelName }: { channelName: string }) {
  return (
    <div className="border-t border-zinc-800 bg-zinc-950 p-4">
      <div className="flex gap-3 rounded-2xl bg-zinc-900 p-3 ring-1 ring-zinc-800 focus-within:ring-slate-600">
        <input
          type="text"
          placeholder={`Message #${channelName}...`}
          className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
        />
        <button title="Send message" className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-3 py-2 text-sm text-white transition duration-200 hover:bg-sky-700 active:scale-95">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
