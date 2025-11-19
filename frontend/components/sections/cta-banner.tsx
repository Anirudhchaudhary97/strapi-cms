import Link from "next/link";

export function CtaBannerSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-600 via-blue-500 to-slate-900 text-white shadow-xl">
          <div className="flex flex-col gap-8 p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-100">Ready When You Are</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Schedule a comprehensive security audit in under 48 hours</h2>
              <p className="mt-4 text-base text-blue-100">
                Our experts will evaluate your current protocols, identify blind spots, and deliver a layered security roadmap tailored to your facilities.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:-translate-y-1 hover:text-blue-700"
              >
                Book Consultation
              </Link>
              <Link
                href="tel:+977015551234"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white"
              >
                Call Operations Desk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
