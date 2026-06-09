import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";

const documents = [
  { name: "Wayleave Form 2024", type: "PDF", size: "2.4 MB", status: "Approved" },
  { name: "As-Built Diagram - Route 12", type: "PDF", size: "8.1 MB", status: "Draft" },
  { name: "Proof of Installation", type: "PDF", size: "5.2 MB", status: "Verified" },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Documents" description="Wayleaves, compliance filings and diagrams" />

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10">
        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.name} className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-white">{doc.name}</p>
                <p className="text-sm text-slate-400 mt-1">{doc.size}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{doc.type}</span>
                <StatusBadge status={doc.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
