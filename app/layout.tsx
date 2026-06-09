import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/sidebar";
import { Topbar } from "@/components/ui/topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FibreFlow OS",
  description: "Enterprise fibre rollout operations platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#020814] text-white antialiased overflow-x-hidden">

        {/* MAIN APP WRAPPER */}
        <div className="min-h-screen flex bg-zinc-950">

          {/* SIDEBAR (handles its own mobile + desktop behavior) */}
          <Sidebar />

          {/* MAIN CONTENT AREA */}
          <div className="flex flex-col flex-1 min-w-0">

            {/* TOP BAR */}
            <Topbar />

            {/* PAGE CONTENT */}
            <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8">
              {children}
            </main>

          </div>
        </div>
      </body>
    </html>
  );
}