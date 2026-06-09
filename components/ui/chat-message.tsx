import * as React from "react";

export function ChatMessage({
  author,
  avatar,
  timestamp,
  message,
  type = "message",
}: {
  author: string;
  avatar: string;
  timestamp: string;
  message: string;
  type?: "message" | "alert" | "update";
}) {
  const isAlert = type === "alert";
  const isUpdate = type === "update";

  return (
    <div className={`flex gap-3 rounded-2xl px-4 py-3 transition duration-200 ${isAlert ? "border-l-4 border-rose-500 bg-rose-950/20" : isUpdate ? "border-l-4 border-sky-500 bg-sky-950/20" : "hover:bg-white/5"}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-600 to-slate-800 text-xs font-semibold text-white flex-shrink-0">
        {avatar}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-white">{author}</p>
          <span className="text-xs text-slate-500">{timestamp}</span>
        </div>
        <p className="mt-1 break-words text-sm text-slate-300">{message}</p>
      </div>
    </div>
  );
}
