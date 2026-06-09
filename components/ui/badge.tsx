import * as React from "react";

const colorMap: Record<string, string> = {
  Active: "bg-emerald-500 text-zinc-950",
  Blocked: "bg-rose-500 text-white",
  Pending: "bg-amber-500 text-zinc-950",
  Completed: "bg-slate-700 text-slate-200",
  Approved: "bg-sky-600 text-white",
  Requested: "bg-zinc-700 text-slate-200",
  Rejected: "bg-rose-600 text-white",
  Building: "bg-orange-500 text-white",
  Planned: "bg-zinc-700 text-slate-200",
};

export function Badge({ label, status, className = "" }: { label: string; status?: string; className?: string }) {
  const styles = status ? colorMap[status] ?? "bg-slate-600 text-white" : "bg-slate-700 text-slate-200";
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${styles} ${className}`}>{label}</span>;
}
