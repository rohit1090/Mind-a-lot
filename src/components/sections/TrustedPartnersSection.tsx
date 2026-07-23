const PARTNERS = [
  "TATA",
  "Infosys",
  "Wipro",
  "Deloitte",
  "Microsoft",
  "Airtel",
  "HDFC Life",
];

export function TrustedPartnersSection() {
  return (
    <section className="w-full border-t border-brand/10 bg-cream py-8">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-6 px-8 lg:flex-row lg:justify-between lg:px-16">
        <div className="flex items-center gap-3 text-center lg:text-left">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.5}
            className="h-8 w-8 shrink-0 stroke-brand"
          >
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <path d="M3 9h18M9 21V9" />
          </svg>
          <div>
            <p className="text-sm text-text-dark">
              Trusted by forward-thinking organizations worldwide
            </p>
            <p className="mt-1 text-xs text-text-muted">
              We partner with enterprises, institutions, and insurers to
              build mentally resilient communities.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-sans text-lg font-semibold text-text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
