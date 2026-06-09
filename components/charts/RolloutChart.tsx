"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { chartRollout } from "@/lib/mock-data";

export function RolloutChart() {
  return (
    <div className="h-[320px] rounded-3xl bg-zinc-900 p-5">
      <h3 className="text-lg font-semibold text-white">Rollout velocity</h3>
      <p className="mt-2 text-sm text-slate-400">Kilometers of fibre completed per month.</p>
      <div className="mt-6 h-[260px]">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={chartRollout} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.12} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#1f2937" vertical={false} />
            <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
            <Area type="monotone" dataKey="value" stroke="#38bdf8" fill="url(#gradient)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
