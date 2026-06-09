"use client";

import type { ReactNode } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Topbar } from "@/components/ui/topbar";
import { PageHeader } from "@/components/ui/page-header";

export function AppShell({
  title,
  description,
  actions,
  children,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 px-4 py-5 lg:px-8">
          <div className="flex flex-col gap-6">
            <Topbar />
            <PageHeader title={title} description={description} actions={actions} />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
