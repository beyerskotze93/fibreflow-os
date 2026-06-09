import { PageHeader } from "@/components/ui/page-header";

const metrics = [
  { label: "Rollout Speed", value: "18 km/week", trend: "up" },
  { label: "Installation Rate", value: "450 homes/week", trend: "up" },
  { label: "Team Efficiency", value: "87%", trend: "steady" },
  { label: "Project Completion", value: "68%", trend: "up" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Analytics" description="Performance dashboards and region analytics" />

      <div className="grid gap-4 lg:grid-cols-2">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{metric.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
            <p className="mt-3 text-sm text-slate-400">Trend: {metric.trend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
