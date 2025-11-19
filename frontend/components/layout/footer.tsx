import Link from "next/link";
import type { Route } from "next";

type QuickLink = {
  name: string;
  href: Route;
};

type ServiceLink = {
  name: string;
  slug: string;
};

type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

const quickLinks: readonly QuickLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Clients", href: "/clients" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

const serviceLinks: readonly ServiceLink[] = [
  { name: "Manned Guarding", slug: "manned-guarding" },
  { name: "Event Security", slug: "event-security" },
  { name: "Mobile Patrols", slug: "mobile-patrols" },
  { name: "Alarm Monitoring", slug: "alarm-monitoring" }
];

const contactDetails: readonly ContactDetail[] = [
  { label: "Call", value: "+977-01-555-1234", href: "tel:+977015551234" },
  { label: "Email", value: "hello@sgms.com.np", href: "mailto:hello@sgms.com.np" },
  { label: "Visit", value: "SGMS HQ, Kathmandu" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-semibold">
                SG
              </span>
              <div className="leading-tight">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Security</p>
                <p className="text-lg font-semibold">Guard Management</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              We deliver proactive guarding, technology-enabled monitoring, and risk consulting services that keep your people, assets, and reputation secure.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-500"
              >
                <svg className="h-4 w-4" viewBox="0 0 8 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.125 5.25H4.875V3.875C4.875 3.19738 5.47238 3.25 6.125 3.25H6.875V1.09375C6.3325 1.03313 5.7875 1 5.25 1C3.55012 1 2.375 2.07938 2.375 3.8125V5.25H0.5V7.75H2.375V15.5H4.875V7.75H6.5L7.125 5.25Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-500"
              >
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.534 2.828C3.534 3.701 2.811 4.4 1.909 4.4C1.007 4.4 0.284 3.701 0.284 2.828C0.284 1.954 1.007 1.256 1.909 1.256C2.811 1.256 3.534 1.954 3.534 2.828ZM0.557 5.542H3.262V14H0.557V5.542ZM5.332 5.542H7.94V6.703H7.978C8.342 6.012 9.259 5.285 10.619 5.285C13.42 5.285 13.957 7.023 13.957 9.435V14H11.252V9.956C11.252 8.91 11.232 7.568 9.82 7.568C8.387 7.568 8.169 8.794 8.169 9.881V14H5.332V5.542Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link className="transition hover:text-white" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className="transition hover:text-white"
                    href={{ pathname: "/services/[slug]", query: { slug: link.slug } }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  {detail.href ? (
                    <a className="transition hover:text-white" href={detail.href}>
                      <span className="font-semibold text-slate-200">{detail.label}:</span> {detail.value}
                    </a>
                  ) : (
                    <span>
                      <span className="font-semibold text-slate-200">{detail.label}:</span> {detail.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {currentYear} Security Guard Management Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="transition hover:text-white" href="/privacy">Privacy Policy</Link>
            <Link className="transition hover:text-white" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
