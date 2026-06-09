"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartRegionProgress } from "@/lib/mock-data";

export function RegionProgressChart() {
  return (
    <div className="h-[300px] rounded-3xl bg-zinc-900 p-5">
      <h3 className="text-lg font-semibold text-white">Region progress</h3>
      <p className="mt-2 text-sm text-slate-400">How each rollout region is performing.</p>
      <div className="mt-6 h-[230px]">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartRegionProgress} layout="vertical" margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#1f2937" vertical={false} horizontal={false} />
            <XAxis type="number" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis dataKey="region" type="category" stroke="#94a3b8" tickLine={false} axisLine={false} width={110} />
            <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
            <Bar dataKey="progress" fill="#38bdf8" radius={[8, 8, 8, 8]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
