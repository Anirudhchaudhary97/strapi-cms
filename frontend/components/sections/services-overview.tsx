import Link from "next/link";

type ServiceCard = {
  title: string;
  description: string;
  slug: string;
  metrics: string[];
};

const services: readonly ServiceCard[] = [
  {
    title: "Corporate Guarding",
    description: "Screened, continuously trained officers delivering reception, patrols, and emergency response for corporate campuses.",
    slug: "corporate-guarding",
    metrics: ["24/7 Coverage", "Visitor Management", "Executive Protection"]
  },
  {
    title: "Industrial Protection",
    description: "Integrated guarding, access control, and surveillance for plants, warehouses, and critical infrastructure.",
    slug: "industrial-protection",
    metrics: ["Hazard Awareness", "Incident Reporting", "HSE Alignment"]
  },
  {
    title: "Event Security",
    description: "Crowd management, VIP escort, and rapid response units keeping public events and activations incident-free.",
    slug: "event-security",
    metrics: ["Certified Marshals", "Medical First Response", "Command Van"]
  }
];

export function ServicesOverviewSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 text-center sm:text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Service Tiers</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">Security Programs Engineered for Your Risk Profile</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600">
              Each engagement starts with an on-site risk audit, then we tailor guarding, technology, and rapid-response protocols that adapt with your operations.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
          >
            Explore All Services
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-blue-500/10 transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div>
                <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {service.title}
                </div>
                <p className="mt-4 text-base text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-500">
                  {service.metrics.map((metric) => (
                    <li key={metric} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-600">✓</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={{ pathname: "/services/[slug]", query: { slug: service.slug } }}
                className="mt-8 inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:translate-x-1"
              >
                Learn more
                <svg className="ml-2 h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 4L12 8L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
