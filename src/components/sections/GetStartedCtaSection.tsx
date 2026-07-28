import Link from "next/link";

export function GetStartedCtaSection() {
  return (
    <section className="w-full  bg-white">
      <div className="mx-auto max-w-[1280px] lg:mb-20">
        <div className="rounded-3xl bg-icon-bg/40 px-6 py-14 text-center sm:px-10">
          <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold capitalize text-text-heading">
            Which part of the ecosystem are you here for?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
            Tell us about your school, college, company, or institute —
            we&rsquo;ll route you to the right program.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Get in Touch
              <svg viewBox="0 0 16 16" fill="none" strokeWidth={1.5} className="h-4 w-4 stroke-current">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-brand/30 px-6 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-white/40"
            >
              Become a Channel Partner
              <svg viewBox="0 0 16 16" fill="none" strokeWidth={1.5} className="h-4 w-4 stroke-current">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
