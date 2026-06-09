import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";

const installs = [
  { address: "123 Main St", status: "Connected", ont: "ON-1234" },
  { address: "456 Oak Ave", status: "Installed", ont: "ON-5678" },
  { address: "789 Pine Rd", status: "Scheduled", ont: "Pending" },
];

export default function HomeInstallsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Home Installs" description="Customer installations and activation" />

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
        <div className="space-y-4">
          {installs.map((item) => (
            <div
              key={item.address}
              className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-base font-medium text-white">{item.address}</p>
                <p className="text-xs text-slate-400 mt-1">ONT: {item.ont}</p>
              </div>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
