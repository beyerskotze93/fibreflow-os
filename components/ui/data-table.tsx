import * as React from "react";

export type Column<T> = {
  header: string;
  accessor: string;
  className?: string;
};

export function DataTable<T>({
  columns,
  data,
  emptyMessage = "No records found.",
  renderRow,
}: {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
  renderRow: (item: T, index: number) => React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-xl shadow-black/10">
      <table className="min-w-full divide-y divide-zinc-800 text-left text-sm text-slate-300">
        <thead className="bg-zinc-900 text-slate-500">
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className={`px-6 py-4 font-normal ${column.className ?? ""}`}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800 bg-zinc-950">
          {data.length > 0 ? (
            data.map(renderRow)
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center text-sm text-slate-500">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
