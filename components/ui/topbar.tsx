"use client";

import { Bell, Search, Settings, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Topbar() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-xl shadow-black/10 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-center gap-3 rounded-3xl bg-zinc-950 p-3">
        <Search className="h-4 w-4 text-slate-400" />
        <Input className="border-0 bg-transparent px-0 py-0 text-sm text-slate-200 placeholder:text-slate-500 focus:ring-0" placeholder="Search jobs, teams, or regions" />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-slate-200 transition hover:border-slate-600">
          <Settings className="h-4 w-4 text-slate-400" />
          Settings
        </button>
        <div className="inline-flex items-center gap-3 rounded-3xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-slate-200">
          <Bell className="h-4 w-4 text-slate-400" />
          Notifications
        </div>
        <div className="inline-flex items-center gap-3 rounded-3xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-slate-200">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-300">AB</span>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">Arielle Banks</p>
            <p className="text-xs text-slate-500">Operations Lead</p>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>
      </div>
    </div>
  );
}
