import * as React from "react";

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`rounded-3xl border border-zinc-800 bg-zinc-900/90 p-5 shadow-xl shadow-black/10 ${className}`} />;
}
