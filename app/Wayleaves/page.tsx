import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";

const wayleaves = [
  { address: "23 Tavistock Ave", status: "Approved", daysRemaining: 45 },
  { address: "48 Elm Street", status: "Pending", daysRemaining: 12 },
  { address: "102 Oak Drive", status: "Approved", daysRemaining: 30 },
];

export default function WayleavesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Wayleaves" description="Property access approvals" />

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
        <div className="grid gap-4">
          {wayleaves.map((item) => (
            <div
              key={item.address}
              className="flex flex-col gap-3 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-base font-medium text-white">{item.address}</p>
                <p className="text-sm text-slate-500 mt-1">{item.daysRemaining} days remaining</p>
              </div>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
