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
      <body className="min-h-screen bg-[#020814] text-white antialiased">
        <div className="flex min-h-screen overflow-hidden bg-zinc-950">
          <Sidebar />
          <main className="flex min-h-screen flex-1 flex-col bg-gradient-to-br from-[#050816] via-[#070917] to-[#060911]">
            <Topbar />
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

