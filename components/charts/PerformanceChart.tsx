"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartTeamPerformance } from "@/lib/mock-data";

export function PerformanceChart() {
  return (
    <div className="h-[320px] rounded-3xl bg-zinc-900 p-5">
      <h3 className="text-lg font-semibold text-white">Team efficiency</h3>
      <p className="mt-2 text-sm text-slate-400">Average completion score by department.</p>
      <div className="mt-6 h-[260px]">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartTeamPerformance} margin={{ top: 10, right: 10, left: -12, bottom: 0 }}>
            <CartesianGrid stroke="#1f2937" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
            <Bar dataKey="score" fill="#38bdf8" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
