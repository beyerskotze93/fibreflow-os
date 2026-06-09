import { PageHeader } from "@/components/ui/page-header";

const teams = [
  { name: "Civil Construction", members: 12, activeJobs: 4 },
  { name: "Fibre Splicing", members: 8, activeJobs: 6 },
  { name: "MDU Installations", members: 10, activeJobs: 3 },
  { name: "Home Drops", members: 15, activeJobs: 7 },
  { name: "QA Team", members: 5, activeJobs: 2 },
];

const progressWidths: Record<number, string> = {
  2: "w-[20%]",
  3: "w-[32%]",
  4: "w-[44%]",
  6: "w-[68%]",
  7: "w-[84%]",
};

const cardStyles = "rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-0.5 hover:border-slate-700 hover:bg-zinc-800";
const progressBase = "mt-5 h-2 rounded-full bg-white/10 overflow-hidden";

export default function Teams() {
  return (
    <div className="space-y-6">
      <PageHeader title="Teams" description="Field crews and delivery capacity" />

      <div className="grid gap-4 lg:grid-cols-3">
        {teams.map((team) => (
          <div key={team.name} className={cardStyles}>
            <h2 className="text-lg font-semibold text-white">{team.name}</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>Members: {team.members}</p>
              <p>Active jobs: {team.activeJobs}</p>
            </div>
            <div className={progressBase}>
              <div className={`h-full rounded-full bg-sky-500 ${progressWidths[team.activeJobs] ?? "w-[40%]"}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
