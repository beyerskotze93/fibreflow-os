import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { KpiStat } from "@/lib/mock-data";

export function StatCard({ stat }: { stat: KpiStat }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-400">{stat.label}</p>
        <Badge label={stat.trend === "up" ? `+${stat.delta}` : stat.delta} />
      </div>
      <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
      <p className="mt-2 text-sm text-slate-500">{stat.caption}</p>
    </div>
  );
}
