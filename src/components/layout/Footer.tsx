import Image from "next/image";
import Link from "next/link";

const SOCIALS = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M13.6 8.6h-2V7.2c0-.6.4-1 1-1h1V3.6h-1.6c-2 0-3.1 1.3-3.1 3.1v1.9H7.2V11h1.7v6h2.7v-6h1.9l.3-2.4z" />
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <>
        <rect x="5" y="9.2" width="2.2" height="7.8" />
        <circle cx="6.1" cy="6.2" r="1.3" />
        <path d="M10 9.2h2.1v1.3c.6-1 1.7-1.6 3-1.6 2.3 0 3.4 1.5 3.4 4.2V17h-2.2v-3.5c0-1.3-.5-2.2-1.7-2.2-.9 0-1.6.6-1.9 1.2-.1.2-.1.5-.1.9V17H10V9.2z" />
      </>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <>
        <rect x="4" y="6.5" width="16" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10.3 9.7l5 2.8-5 2.8V9.7z" />
      </>
    ),
  },
  {
    key: "twitter",
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <path d="M20 7.6a7 7 0 01-2 .55A3.5 3.5 0 0019.4 6a7 7 0 01-2.2.85A3.5 3.5 0 0011.3 10c0 .27.03.53.09.79A9.9 9.9 0 014 7.1a3.5 3.5 0 001.08 4.66 3.5 3.5 0 01-1.58-.43v.04a3.5 3.5 0 002.8 3.43 3.5 3.5 0 01-1.58.06 3.5 3.5 0 003.27 2.43A7 7 0 014 18.7a9.9 9.9 0 005.36 1.57c6.44 0 9.96-5.34 9.96-9.96l-.01-.45A7.1 7.1 0 0020 7.6z" />
    ),
  },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our team", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const FEATURES_LINKS = [
  { label: "How it Works", href: "/about" },
  { label: "For Individuals", href: "/about" },
  { label: "For Corporates", href: "/about" },
  { label: "Pricing", href: "/about" },
];

const RESOURCES_LINKS = [
  { label: "Blog", href: "/blog", emphasis: true },
  { label: "Mental Health Guide", href: "/blog" },
  { label: "Help Center", href: "/contact" },
  { label: "FAQ", href: "/contact", emphasis: true },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; emphasis?: boolean }[];
}) {
  return (
    <div>
      <h3 className="font-sans text-base font-semibold text-text-dark">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`text-sm transition-colors hover:text-brand ${
                link.emphasis ? "text-text-dark" : "text-text-muted"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[36px] bg-cream px-5 pt-14 pb-6 lg:px-16">
      <Image
        src="/images/Footer-stone-icon.svg"
        alt=""
        width={92}
        height={92}
        className="pointer-events-none absolute bottom-6 right-10 hidden h-auto w-24 opacity-90 lg:block"
      />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[280px_1fr]">
        {/* Brand column */}
        <div>
          <Image
            src="/images/Mind_a_lot_Logo-new.png"
            alt="Mind A Lot"
            width={266}
            height={153}
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
            Anonymous support that listens, nudges, and grows with you. When
            your mind feels too much, we&apos;re just a tap away.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.key}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Features" links={FEATURES_LINKS} />
          <FooterColumn title="Resources" links={RESOURCES_LINKS} />

          <div>
            <h3 className="font-sans text-base font-semibold text-text-dark">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} className="h-4 w-4 shrink-0 stroke-brand">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 6.5l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                info@mindalot.care
              </li>
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} className="h-4 w-4 shrink-0 stroke-brand">
                  <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2C10.5 20 4 13.5 4 6a2 2 0 011-2z" strokeLinejoin="round" />
                </svg>
                +91-96062-58596
              </li>
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 stroke-brand">
                  <path d="M12 21s-7-7.5-7-12a7 7 0 0114 0c0 4.5-7 12-7 12z" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>
                  G3X-WPG, 1st N Block,
                  <br />
                  Rajaji nagar, Bengaluru.
                  <br />
                  Karnataka S60010
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-[1400px] flex-col items-center justify-between gap-3 border-t border-brand/10 pt-5 text-xs text-text-muted sm:flex-row">
        <p>© 2025 Mind A Lot. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <Link href="/terms" className="hover:text-brand">
            Terms &amp; Condition&apos;s
          </Link>
          <span className="h-3 w-px bg-brand/20" />
          <Link href="/privacy" className="hover:text-brand">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
