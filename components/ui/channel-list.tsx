import * as React from "react";
import Link from "next/link";

export function ChannelList({
  channels,
  activeChannel,
}: {
  channels: Array<{
    id: string;
    name: string;
    unread: number;
  }>;
  activeChannel: string;
}) {
  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-zinc-800 bg-zinc-900 lg:flex">
      <div className="border-b border-zinc-800 p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Channels</p>
        <h2 className="mt-3 text-xl font-semibold text-white">Communications</h2>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {channels.map((channel) => {
          const isActive = activeChannel === channel.id;
          return (
            <Link
              key={channel.id}
              href={`/communications?channel=${channel.id}`}
              className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition duration-200 ${
                isActive ? "bg-slate-800 text-white shadow shadow-slate-900" : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-slate-400">#</span>
                {channel.name}
              </span>
              {channel.unread > 0 && (
                <span className="inline-flex items-center justify-center rounded-full bg-rose-500 h-5 w-5 text-xs font-semibold text-white">
                  {channel.unread}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-zinc-800 p-4 text-xs text-slate-400">
        <p>Connected teams: 5</p>
      </div>
    </aside>
  );
}
