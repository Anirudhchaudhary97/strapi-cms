const differentiators = [
  {
    title: "Certified Personnel",
    description: "Every guard passes ISO 18788-aligned training with quarterly refreshers and on-site drills."
  },
  {
    title: "Tech-Driven Oversight",
    description: "Field teams equipped with incident reporting app, geo-fencing, and live dashboards for clients."
  },
  {
    title: "Rapid Response Fleet",
    description: "Dedicated patrol vehicles on 15-minute standby windows across major cities."
  },
  {
    title: "Compliance First",
    description: "Alignment with industry regulations, insurance requirements, and global security frameworks."
  }
];

export function WhySgmsSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Why SGMS</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">Security maturity delivered as a partnership</h2>
          <p className="mt-4 text-base text-slate-600">
            We blend disciplined personnel, advanced monitoring, and operational intelligence that elevates your security posture from day one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wide text-blue-600">{item.title}</div>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
