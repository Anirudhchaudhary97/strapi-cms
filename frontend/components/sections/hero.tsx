import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:px-8 lg:py-28">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-300">Security Partners Since 2008</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Vigilance That Protects Your People, Assets, and Reputation
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            SGMS combines trained guarding teams, smart monitoring technology, and tailored risk programs to deliver 24/7 protection across Nepal.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:-translate-y-1 hover:bg-blue-400"
            >
              Book a Security Audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white"
            >
              View Protection Stories
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            {[
              { label: "Guards Deployed", value: "2,500+" },
              { label: "Satisfied Clients", value: "180+" },
              { label: "Cities Covered", value: "30" }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <dt className="text-sm uppercase tracking-wide text-slate-300">{item.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex w-full max-w-lg items-center justify-center lg:max-w-md">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-blue-500/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)]" />
            <div className="absolute inset-0 bg-[url('/images/security-team.jpg')] bg-cover bg-center" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900/30" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-blue-300">Live Operations Desk</p>
              <p className="mt-2 text-sm text-slate-200">
                Command center with 24/7 monitoring, rapid response, and AI-assisted incident reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
