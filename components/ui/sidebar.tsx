"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  LayoutDashboard,
  MapPin,
  HardDrive,
  Users,
  FileText,
  Map,
  Building,
  Home,
  File,
  TrendingUp,
  Settings,
  MessageCircle,
} from "lucide-react";
import { navItems } from "@/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  MapPin,
  HardDrive,
  Users,
  FileText,
  Map,
  Building,
  Home,
  File,
  TrendingUp,
  Settings,
  MessageCircle,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="
      w-64 md:w-72
      shrink-0
      flex flex-col
      border-r border-zinc-800
      bg-zinc-900
      px-3 md:px-5
      py-4 md:py-6
      h-screen
      overflow-y-auto
    ">
      {/* HEADER */}
      <div className="mb-6 md:mb-10 flex items-center justify-between">
        <div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-slate-400">
            FibreFlow OS
          </p>
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            Network Ops
          </h1>
        </div>

        <div className="rounded-2xl bg-zinc-800 p-2 md:p-3 text-sky-400">
          <Bell className="h-4 w-4 md:h-5 md:w-5" />
        </div>
      </div>

      {/* NAV */}
      <nav className="space-y-1 md:space-y-2">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon] || LayoutDashboard;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 md:gap-3 rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm transition ${
                active
                  ? "bg-zinc-800 text-white"
                  : "text-slate-300 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="truncate">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="mt-6 md:mt-auto rounded-2xl bg-slate-900 p-3 md:p-5 text-xs md:text-sm text-slate-300">
        <p className="text-zinc-400">Live rollout status</p>

        <div className="mt-3">
          <div className="flex justify-between text-xs">
            <span>Network health</span>
            <span className="text-white font-semibold">92%</span>
          </div>

          <div className="h-2 mt-2 bg-zinc-800 rounded-full">
            <div className="h-full w-[92%] bg-sky-500 rounded-full" />
          </div>
        </div>
      </div>
    </aside>
  );
}
