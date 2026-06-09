import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";

const sections = [
  { title: "Users", description: "Manage team members and roles", href: "/settings/users" },
  { title: "Roles", description: "Define role templates and permissions", href: "/settings/roles" },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Manage users, roles and team assignments" />

      <div className="grid gap-4 lg:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition hover:border-slate-700 hover:bg-zinc-800"
          >
            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
