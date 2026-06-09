import { PageHeader } from "@/components/ui/page-header";
import { ProgressBar } from "@/components/ui/progress-bar";

const buildings = [
  { name: "Parkside Apartments", floors: 8, units: 64, connected: 52 },
  { name: "Riverside Tower", floors: 12, units: 120, connected: 120 },
  { name: "Downtown Plaza", floors: 6, units: 48, connected: 30 },
];

export default function MduPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="MDU" description="Multi-dwelling unit installations" />

      <div className="grid gap-4 lg:grid-cols-2">
        {buildings.map((building) => (
          <div key={building.name} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{building.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{building.floors} floors · {building.units} units</p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
                {Math.round((building.connected / building.units) * 100)}%
              </span>
            </div>
            <div className="mt-6">
              <ProgressBar value={building.connected} max={building.units} label={`${building.connected} of ${building.units} units connected`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
