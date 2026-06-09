import * as React from "react";

export function ProgressBar({
  value,
  max = 100,
  label,
  className = "",
}: {
  value: number;
  max?: number;
  label?: string;
  className?: string;
}) {
  const percent = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={className}>
      {label ? <p className="mb-2 text-sm text-slate-400">{label}</p> : null}
      <progress
        className="h-3 w-full overflow-hidden rounded-full bg-zinc-800 accent-sky-500"
        value={value}
        max={max}
      />
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{percent}% complete</p>
    </div>
  );
}
