import { PageHeader } from "@/components/ui/page-header";

const nodeStatusColor: Record<string, string> = {
  Planned: "#6b7280",
  Approved: "#38bdf8",
  Building: "#f97316",
  Complete: "#22c55e",
  Blocked: "#ef4444",
};

const nodes = [
  { id: "P1", label: "Pole 1", type: "Pole", status: "Approved", x: 16, y: 18 },
  { id: "C1", label: "Cabinet A", type: "Cabinet", status: "Building", x: 42, y: 24 },
  { id: "S1", label: "Splitter 01", type: "Splitter", status: "Planned", x: 68, y: 16 },
  { id: "P2", label: "Pole 2", type: "Pole", status: "Complete", x: 30, y: 56 },
  { id: "C2", label: "Cabinet B", type: "Cabinet", status: "Complete", x: 58, y: 58 },
  { id: "S2", label: "Splitter 02", type: "Splitter", status: "Blocked", x: 84, y: 42 },
];

const connections = [
  { from: "P1", to: "C1", status: "Approved" },
  { from: "C1", to: "S1", status: "Building" },
  { from: "P1", to: "P2", status: "Complete" },
  { from: "P2", to: "C2", status: "Complete" },
  { from: "C2", to: "S2", status: "Blocked" },
];

const statusLabels = [
  { label: "Planned", bgClass: "bg-gray-500" },
  { label: "Approved", bgClass: "bg-sky-400" },
  { label: "Building", bgClass: "bg-orange-400" },
  { label: "Complete", bgClass: "bg-emerald-400" },
  { label: "Blocked", bgClass: "bg-red-500" },
];

export default function MapPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Map" description="Network visualization and infrastructure view" />

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.85fr]">
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Project</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Auckland Fibre Grid</h2>
              <p className="mt-2 text-sm text-slate-500">Mock network topology with poles, cabinets, and splitter nodes.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-slate-200 shadow-sm">
              <p className="font-semibold text-white">Selected region</p>
              <p className="mt-2 text-slate-400">Central Operations Zone</p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950/70 p-4 shadow-inner shadow-black/30">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] map-canvas">
              <div className="absolute inset-0 bg-grid-overlay" />
              <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full">
                {connections.map((connection) => {
                  const source = nodes.find((node) => node.id === connection.from);
                  const target = nodes.find((node) => node.id === connection.to);
                  if (!source || !target) return null;
                  return (
                    <line
                      key={`${connection.from}-${connection.to}`}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke={nodeStatusColor[connection.status]}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity="0.95"
                    />
                  );
                })}

                {nodes.map((node) => {
                  const nodeColor = nodeStatusColor[node.status] || "#6b7280";
                  return (
                    <g key={node.id}>
                      <circle cx={node.x} cy={node.y} r="3.8" fill={nodeColor} stroke="#0f172a" strokeWidth="0.8" />
                      <circle cx={node.x} cy={node.y} r="2.2" fill="#02040a" />
                      <text x={node.x} y={node.y - 6} textAnchor="middle" className="text-[3.2px] font-semibold fill-white">
                        {node.type === "Pole" ? "P" : node.type === "Cabinet" ? "C" : "S"}
                      </text>
                      <text x={node.x} y={node.y + 7.5} textAnchor="middle" className="text-[3px] font-medium fill-slate-300">
                        {node.id}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Legend</p>
            <div className="mt-4 space-y-3">
              {statusLabels.map((status) => (
                <div key={status.label} className="flex items-center gap-3 rounded-3xl bg-zinc-950 px-4 py-3">
                  <span className={`inline-flex h-3.5 w-3.5 rounded-full ${status.bgClass}`} />
                  <span className="text-sm text-slate-200">{status.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Node inventory</p>
            <div className="mt-4 space-y-3">
              {nodes.map((node) => {
                const statusBg = node.status === "Planned" ? "bg-gray-700" : node.status === "Approved" ? "bg-sky-600" : node.status === "Building" ? "bg-orange-500" : node.status === "Complete" ? "bg-emerald-500" : "bg-rose-500";
                return (
                  <div key={node.id} className="flex items-center justify-between rounded-3xl bg-zinc-950 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{node.label}</p>
                      <p className="text-xs text-slate-500">{node.type}</p>
                    </div>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white ${statusBg}`}>
                      {node.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10 transition duration-200 hover:border-slate-700 hover:bg-zinc-800">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Selector</p>
            <div className="mt-4 flex flex-col gap-3">
              <button className="rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-left text-sm text-white transition duration-200 hover:border-slate-500 hover:bg-slate-900">
                Central Operations Zone
              </button>
              <button className="rounded-3xl border border-slate-700 bg-transparent px-4 py-3 text-left text-sm text-slate-200 transition duration-200 hover:border-slate-500 hover:bg-slate-900">
                Northern Corridor
              </button>
              <button className="rounded-3xl border border-slate-700 bg-transparent px-4 py-3 text-left text-sm text-slate-200 transition duration-200 hover:border-slate-500 hover:bg-slate-900">
                Westfield Distribution
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
