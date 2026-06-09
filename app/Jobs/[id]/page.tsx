import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <PageHeader
        title={`Job ${params.id}`}
        description="Fiber installation work order"
        actions={
          <Link href="/jobs" className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-900">
            Back to jobs
          </Link>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Status</p>
              <p className="mt-2 text-lg font-semibold text-white"><StatusBadge status="In Progress" /></p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Team</p>
              <p className="mt-2 text-lg font-semibold text-white">Team 1</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Location</p>
              <p className="mt-2 text-lg font-semibold text-white">Downtown</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Progress</p>
              <p className="mt-2 text-lg font-semibold text-white">68%</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-zinc-950 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Current progress</p>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-sky-500" />
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick facts</p>
          <div className="mt-5 space-y-4">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-xs text-slate-500">Priority</p>
              <p className="mt-2 text-base font-semibold text-white">High</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-xs text-slate-500">Due</p>
              <p className="mt-2 text-base font-semibold text-white">Today 17:00</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
