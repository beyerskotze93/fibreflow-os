"use client";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm rounded-lg border border-white/10 bg-zinc-900 p-6">
        <h1 className="text-2xl font-semibold text-white">Sign In</h1>
        <p className="text-xs text-white/50 mt-2">Enter your credentials</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-xs text-white/70 mb-2">Email</label>
            <input type="email" placeholder="admin@example.com" className="w-full px-3 py-2 rounded-lg border border-white/10 bg-zinc-950 text-white text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-xs text-white/70 mb-2">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-3 py-2 rounded-lg border border-white/10 bg-zinc-950 text-white text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <button type="button" className="w-full mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
