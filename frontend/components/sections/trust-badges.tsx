const clients = [
  "Nepal National Bank",
  "Everest Airlines",
  "Metro Hospitals",
  "Himalayan Telecom",
  "City Logistics",
  "Summit Hydropower"
];

export function TrustBadgesSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Trusted Nationwide</p>
          <p className="max-w-2xl text-base text-slate-600">
            Government agencies, critical infrastructure, and Fortune 500-backed ventures rely on SGMS for integrated security coverage.
          </p>
          <div className="grid w-full grid-cols-2 gap-6 text-sm font-semibold text-slate-500 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-center shadow-sm"
              >
                <span className="leading-tight">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
