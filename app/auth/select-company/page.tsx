"use client";

export default function SelectCompanyPage() {
  const companies = [
    { name: "BlueLine Networks", status: "Demo" },
    { name: "Civic Infrastructure", status: "Demo" },
    { name: "Digital Fiber Co", status: "Demo" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-white mb-2">Select Company</h1>
        <p className="text-sm text-white/50 mb-6">Choose a workspace to access</p>

        <div className="grid gap-4 md:grid-cols-2">
          {companies.map((company) => (
            <div key={company.name} className="rounded-lg border border-white/10 bg-zinc-900 p-4 cursor-pointer hover:bg-zinc-800 transition">
              <h2 className="font-medium text-white">{company.name}</h2>
              <p className="text-xs text-white/50 mt-2">{company.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
