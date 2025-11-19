import Link from "next/link";

type CaseStudyCard = {
  industry: string;
  title: string;
  description: string;
  slug: string;
};

const caseStudies: readonly CaseStudyCard[] = [
  {
    industry: "Banking",
    title: "Transforming Security Ops Across 120 Branches",
    description:
      "Deployed centralized monitoring, command center, and rapid-response fleet enabling a 62% reduction in security incidents across nationwide branches.",
    slug: "banking-network"
  },
  {
    industry: "Manufacturing",
    title: "Zero-Downtime Protection for Industrial Plants",
    description:
      "Integrated guards with IoT sensors and predictive patrol schedules to secure high-risk production floors and supply yards.",
    slug: "industrial-protection"
  }
];

export function CaseStudyHighlightSection() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Evidence of Impact</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Case studies showcasing measurable risk reduction</h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:-translate-y-1 hover:border-white"
          >
            View All Case Studies
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-blue-500/60"
            >
              <div className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
                {study.industry}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{study.title}</h3>
              <p className="mt-4 text-base text-slate-200">{study.description}</p>
              <Link
                href={{ pathname: "/case-studies/[slug]", query: { slug: study.slug } }}
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-300 transition group-hover:translate-x-1"
              >
                Read full story
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
