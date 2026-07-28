import Link from "next/link";

function DotGrid({ className }: { className: string }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          "radial-gradient(circle, #c9b8a8 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
    />
  );
}

export function ExpertsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-4 lg:py-8">
      <DotGrid className="pointer-events-none absolute left-6 top-6 hidden h-24 w-24 opacity-60 lg:block" />
      <DotGrid className="pointer-events-none absolute right-6 top-6 hidden h-24 w-24 opacity-60 lg:block" />

      <div className="relative z-10 mx-auto max-w-[1280px] lg:py-8 ">
        {/* Not part of an institution CTA */}
        <div className="mx-auto max-w-2xl rounded-3xl bg-text-accent/15 px-5 py-12 text-center sm:px-10">
          <p className="font-mono text-xs font-bold uppercase tracking-[3px] text-text-accent">
            —Not Part of an Institution?
          </p>
          <h3 className="mt-4 font-serif text-2xl font-bold capitalize text-text-heading sm:text-3xl">
            You can reach Mind A Lot directly, anytime.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            The Mind A Lot app connects individuals to counsellors privately
            and anonymously — no institution required.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Open the App
            <svg viewBox="0 0 16 16" fill="none" strokeWidth={1.5} className="h-4 w-4 stroke-current">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
