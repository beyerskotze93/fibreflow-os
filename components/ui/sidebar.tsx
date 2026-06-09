"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Building,
  File,
  FileText,
  HardDrive,
  Home,
  LayoutDashboard,
  Map,
  MapPin,
  MessageCircle,
  Settings,
  TrendingUp,
  Users,
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
    <aside className="hidden md:flex w-72 shrink-0 flex-col border-r border-zinc-800 bg-zinc-900 px-5 py-6">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            FibreFlow OS
          </p>
          <h1 className="text-2xl font-semibold text-white">
            Network Operations
          </h1>
        </div>

        <div className="rounded-2xl bg-zinc-800 p-3 text-sky-400">
          <Bell className="h-5 w-5" />
        </div>
      </div>

      <nav className="space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon] || LayoutDashboard;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                active
                  ? "bg-slate-800 text-white shadow shadow-slate-900"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl bg-slate-900 p-5 text-sm text-slate-300 shadow shadow-black/20">
        <p className="text-zinc-400">Live rollout status</p>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>Network health</span>
            <span className="font-semibold text-white">92%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[92%] rounded-full bg-sky-500" />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Blocked jobs</span>
            <span>9</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
