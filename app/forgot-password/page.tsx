"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020305] px-4 py-10 text-white">
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="w-full max-w-md rounded-[32px] border border-zinc-800 bg-zinc-950/95 p-8 shadow-2xl shadow-black/40">
        <div className="mb-8 space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Password recovery</p>
          <h1 className="text-4xl font-semibold">Reset your access</h1>
          <p className="text-sm text-slate-400">Enter your email to receive a secure reset link for your FibreFlow OS account.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <Input type="email" placeholder="ops.manager@fibreflow.io" />
          </div>
          <Button type="button" className="w-full py-3 text-base font-semibold">
            Send reset link
          </Button>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
          <Link href="/login" className="text-sky-400 hover:text-sky-300">
            Back to login
          </Link>
          <span>Mock mode only</span>
        </div>
      </motion.div>
    </div>
  );
}
