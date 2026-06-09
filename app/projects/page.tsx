import { PageHeader } from "@/components/ui/page-header";
import { ProgressBar } from "@/components/ui/progress-bar";

const projects = [
  { name: "North Shore", status: "Building", progress: 72 },
  { name: "East Bay", status: "Approved", progress: 55 },
  { name: "West Valley", status: "Planning", progress: 28 },
  { name: "Central Hub", status: "Building", progress: 88 },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Projects" description="Fibre rollout regions and budgets" />

      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{project.status}</p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
                {project.status}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <ProgressBar value={project.progress} label={`${project.progress}% complete`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
