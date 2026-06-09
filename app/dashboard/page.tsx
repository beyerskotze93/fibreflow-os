import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { ChatMessage } from "@/components/ui/chat-message";
import { activityFeed, kpis, channels } from "@/lib/mock-data";

const allMessages = channels.flatMap((ch) => ch.messages).slice(0, 8);

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Executive operations control center"
      />

      {/* KPI CARDS - MOBILE FIX */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.slice(0, 4).map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      {/* MAIN GRID - MOBILE STACK FIX */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
        {/* LEFT FEED */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 md:p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Operations feed
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Live updates
              </h2>
            </div>

            <Link
              href="/communications"
              className="text-xs uppercase tracking-[0.18em] text-sky-400 hover:text-sky-300 transition"
            >
              All messages
            </Link>
          </div>

          <div className="space-y-3">
            {allMessages.map((msg) => (
              <ChatMessage
                key={msg.id}
                author={msg.author}
                avatar={msg.avatar}
                timestamp={msg.timestamp}
                message={msg.message}
                type={msg.type}
              />
            ))}
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-4">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 md:p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              System status
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
                <p className="text-xs text-slate-500">Network Health</p>
                <p className="mt-2 text-2xl font-semibold text-white">92%</p>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
                <p className="text-xs text-slate-500">Team Status</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-400">
                  Active
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
                <p className="text-xs text-slate-500">Alerts</p>
                <p className="mt-2 text-2xl font-semibold text-rose-400">8</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 md:p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Quick access
            </p>

            <div className="mt-4 space-y-2">
              <Link
                href="/jobs"
                className="block rounded-2xl border border-slate-700 px-3 py-2 text-sm text-slate-200 text-center hover:bg-slate-900 transition"
              >
                Open Jobs
              </Link>

              <Link
                href="/communications"
                className="block rounded-2xl border border-slate-700 px-3 py-2 text-sm text-slate-200 text-center hover:bg-slate-900 transition"
              >
                Messages
              </Link>

              <Link
                href="/wayleaves"
                className="block rounded-2xl border border-slate-700 px-3 py-2 text-sm text-slate-200 text-center hover:bg-slate-900 transition"
              >
                Approvals
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* BOTTOM GRID - MOBILE FIX */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 md:p-6 shadow-xl shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Snapshot
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            Team capacity
          </h2>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-zinc-950 px-4 py-3">
              <p className="text-sm text-slate-400">Civil teams active</p>
              <span className="text-sm font-semibold text-white">6/7</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-zinc-950 px-4 py-3">
              <p className="text-sm text-slate-400">Splicing teams active</p>
              <span className="text-sm font-semibold text-emerald-400">
                4/4
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-zinc-950 px-4 py-3">
              <p className="text-sm text-slate-400">MDU teams deployed</p>
              <span className="text-sm font-semibold text-sky-400">3/5</span>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 md:p-6 shadow-xl shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            In-flight
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            Priority actions
          </h2>

          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border-l-4 border-rose-500 bg-rose-950/20 px-4 py-3">
              <p className="text-sm font-semibold text-rose-300">
                🔴 8 jobs blocked
              </p>
              <p className="mt-1 text-xs text-rose-200">
                Require immediate attention
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-950/20 px-4 py-3">
              <p className="text-sm font-semibold text-amber-300">
                ⚠️ 2 wayleaves expiring
              </p>
              <p className="mt-1 text-xs text-amber-200">
                Follow-up needed this week
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-sky-500 bg-sky-950/20 px-4 py-3">
              <p className="text-sm font-semibold text-sky-300">
                ✓ 18 jobs completed
              </p>
              <p className="mt-1 text-xs text-sky-200">
                This rolling week
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
