import * as React from "react";

const statusColor: Record<string, string> = {
  Planned: "bg-zinc-700 text-slate-200",
  Approved: "bg-sky-600 text-white",
  Building: "bg-orange-500 text-white",
  Complete: "bg-emerald-500 text-zinc-950",
  Blocked: "bg-rose-500 text-white",
  "In Progress": "bg-sky-500 text-white",
  Pending: "bg-amber-500 text-zinc-950",
  Requested: "bg-slate-600 text-white",
  Rejected: "bg-rose-600 text-white",
  Activated: "bg-emerald-500 text-zinc-950",
  Installed: "bg-violet-500 text-white",
  Verified: "bg-emerald-500 text-zinc-950",
  Draft: "bg-slate-700 text-slate-200",
};

export function StatusPill({ status }: { status: string }) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${statusColor[status] ?? "bg-slate-700 text-slate-200"}`}>{status}</span>;
}
