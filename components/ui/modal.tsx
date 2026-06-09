import * as React from "react";

export function Modal({
  open,
  title,
  children,
  actions,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/70">
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Modal</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
          </div>
          <button onClick={onClose} className="rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-600">
            Close
          </button>
        </div>
        <div className="p-6 text-sm text-slate-300">{children}</div>
        {actions ? <div className="flex flex-wrap gap-3 border-t border-zinc-800 bg-zinc-900 px-6 py-4">{actions}</div> : null}
      </div>
    </div>
  );
}
