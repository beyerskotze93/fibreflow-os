import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";

const jobs = [
  { id: "1", name: "Fiber Install - District A", status: "In Progress", team: "Team 1", location: "Downtown" },
  { id: "2", name: "MDU Installation", status: "Pending", team: "Team 2", location: "Midtown" },
  { id: "3", name: "Splice Work - Route 12", status: "Completed", team: "Team 3", location: "North" },
  { id: "4", name: "Cabinet Inspection", status: "In Progress", team: "Team 1", location: "South" },
  { id: "5", name: "Drop Line Deployment", status: "Scheduled", team: "Team 4", location: "East" },
];

const columns = [
  { header: "Job", accessor: "name" },
  { header: "Status", accessor: "status" },
  { header: "Team", accessor: "team" },
  { header: "Location", accessor: "location" },
];

const cardStyles = "rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800";
const summaryCard = "rounded-3xl border border-zinc-800 bg-zinc-950 p-4 transition duration-200 hover:border-slate-700 hover:bg-zinc-900";

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Jobs" description="Active work orders and field operations" />

      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className={cardStyles}>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Jobs snapshot</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className={summaryCard}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Open jobs</p>
              <p className="mt-3 text-3xl font-semibold text-white">64</p>
            </div>
            <div className={summaryCard}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Blocked jobs</p>
              <p className="mt-3 text-3xl font-semibold text-white">8</p>
            </div>
            <div className={summaryCard}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Completed</p>
              <p className="mt-3 text-3xl font-semibold text-white">18</p>
            </div>
          </div>
        </div>

        <div className={cardStyles}>
          <h2 className="text-lg font-semibold text-white">Team cadence</h2>
          <p className="mt-2 text-sm text-slate-400">Delivery velocity across active crews</p>
          <div className="mt-6 space-y-4">
            <div className={summaryCard}>
              <p className="text-sm text-slate-400">Average field completion</p>
              <p className="mt-3 text-3xl font-semibold text-white">78%</p>
            </div>
            <div className={summaryCard}>
              <p className="text-sm text-slate-400">Pending approvals</p>
              <p className="mt-3 text-3xl font-semibold text-white">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className={cardStyles}>
        <DataTable
          columns={columns}
          data={jobs}
          renderRow={(job) => (
            <tr key={job.id} className="border-b border-zinc-800 transition duration-200 hover:bg-white/5">
              <td className="px-6 py-4 text-white">{job.name}</td>
              <td className="px-6 py-4"><StatusBadge status={job.status} /></td>
              <td className="px-6 py-4 text-slate-300">{job.team}</td>
              <td className="px-6 py-4 text-slate-300">{job.location}</td>
            </tr>
          )}
        />
      </div>
    </div>
  );
}

