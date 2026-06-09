"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { ChannelList } from "@/components/ui/channel-list";
import { ChatMessage } from "@/components/ui/chat-message";
import { MessageInput } from "@/components/ui/message-input";
import { channels } from "@/lib/mock-data";
import { Search } from "lucide-react";

export default function CommunicationsPage() {
  const [activeChannelId, setActiveChannelId] = useState("general");

  const activeChannel = useMemo(() => {
    return channels.find((ch) => ch.id === activeChannelId) || channels[0];
  }, [activeChannelId]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-xl shadow-black/10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Operations</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Team Communications</h1>
        </div>
        <div className="flex flex-1 items-center gap-3 rounded-3xl bg-zinc-950 p-3 sm:flex-none sm:flex-1">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search messages..."
            className="border-0 bg-transparent px-0 py-0 text-sm text-slate-200 placeholder:text-slate-500 focus:ring-0 flex-1"
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Channel List */}
        <div className="hidden lg:block rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl shadow-black/10 overflow-hidden">
          <div className="border-b border-zinc-800 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Channels</p>
            <h2 className="mt-3 text-lg font-semibold text-white">Teams</h2>
          </div>

          <nav className="flex-1 space-y-1 p-4 max-h-96 overflow-y-auto">
            {channels.map((channel) => {
              const isActive = activeChannelId === channel.id;
              return (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannelId(channel.id)}
                  className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition duration-200 ${
                    isActive ? "bg-slate-800 text-white shadow shadow-slate-900" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2 text-left">
                    <span className="text-slate-400">#</span>
                    {channel.name}
                  </span>
                  {channel.unread > 0 && (
                    <span className="inline-flex items-center justify-center rounded-full bg-rose-500 h-5 w-5 text-xs font-semibold text-white flex-shrink-0">
                      {channel.unread}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="border-t border-zinc-800 p-4 text-xs text-slate-400">
            <p>Connected teams: {channels.length}</p>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl shadow-black/10 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="border-b border-zinc-800 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">#{activeChannel.name}</p>
                <h2 className="mt-2 text-lg font-semibold text-white capitalize">
                  {activeChannel.name.replace("-", " ")}
                </h2>
              </div>
              {activeChannel.department && (
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {activeChannel.department}
                </span>
              )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-6">
            {activeChannel.messages.length === 0 ? (
              <div className="flex h-full items-center justify-center text-center text-slate-500">
                <p>No messages yet. Start the conversation!</p>
              </div>
            ) : (
              activeChannel.messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  author={msg.author}
                  avatar={msg.avatar}
                  timestamp={msg.timestamp}
                  message={msg.message}
                  type={msg.type}
                />
              ))
            )}
          </div>

          {/* Message Input */}
          <MessageInput channelName={activeChannel.name} />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Active channels</p>
          <p className="mt-4 text-3xl font-semibold text-white">{channels.length}</p>
          <p className="mt-2 text-sm text-slate-500">Team communication hubs</p>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Unread</p>
          <p className="mt-4 text-3xl font-semibold text-white">{channels.reduce((acc, ch) => acc + ch.unread, 0)}</p>
          <p className="mt-2 text-sm text-slate-500">Messages requiring attention</p>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Team members</p>
          <p className="mt-4 text-3xl font-semibold text-white">18</p>
          <p className="mt-2 text-sm text-slate-500">Across all departments</p>
        </div>
      </div>
    </div>
  );
}
