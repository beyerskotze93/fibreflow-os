import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";

const users = [
  { name: "John Smith", role: "Admin", department: "Operations", status: "Active" },
  { name: "Sarah Johnson", role: "Manager", department: "Field Teams", status: "Active" },
  { name: "Mike Chen", role: "Technician", department: "Installation", status: "Active" },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Users" description="Team members and role assignments" />

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.name} className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-white">{user.name}</p>
                <p className="text-sm text-slate-400 mt-1">{user.department}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-300">{user.role}</p>
                <StatusBadge status={user.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
