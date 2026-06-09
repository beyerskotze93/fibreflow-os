import { PageHeader } from "@/components/ui/page-header";

const roles = [
  { name: "Admin", description: "Full system access" },
  { name: "Manager", description: "Team and project management" },
  { name: "Technician", description: "Field operations" },
];

export default function RolesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Roles" description="Role templates and permissions" />

      <div className="grid gap-4 lg:grid-cols-2">
        {roles.map((role) => (
          <div key={role.name} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
            <h3 className="text-lg font-semibold text-white">{role.name}</h3>
            <p className="mt-3 text-sm text-slate-400">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
