import Image from "next/image";
import Link from "next/link";

const PATHS = [
  {
    key: "schools",
    title: "Schools",
    description:
      "Diagnostic learning assessment, classroom emotional wellbeing, and career guidance for Grades 1–12.",
    accent: "terracotta",
    icon: "schools-icon.svg",
  },
  {
    key: "campus",
    title: "Campus",
    description:
      "Counselling, peer support, and career-transition mentoring for colleges and universities.",
    accent: "sage",
    icon: "campus-icon.svg",
  },
  {
    key: "workforce",
    title: "Workforce",
    description:
      "Employee counselling, manager resilience training, and usage analytics for HR teams.",
    accent: "brand",
    icon: "workforce-icon.svg",
  },
  {
    key: "early-years",
    title: "Early Years",
    description:
      "Parent workshops and positive-parenting coaching for preschools and young families.",
    accent: "text-accent",
    icon: "early-years.svg",
  },
  {
    key: "coaching-institutes",
    title: "Coaching Institutes",
    description:
      "Burnout prevention and performance coaching for competitive-exam aspirants.",
    accent: "mauve",
    icon: "coaching-icon.svg",
  },
];

const ACCENT_CLASSES: Record<
  string,
  { bg: string; line: string; text: string }
> = {
  terracotta: { bg: "bg-terracotta", line: "bg-terracotta", text: "text-terracotta" },
  sage: { bg: "bg-sage", line: "bg-sage", text: "text-sage" },
  brand: { bg: "bg-brand", line: "bg-brand", text: "text-brand" },
  "text-accent": { bg: "bg-text-accent", line: "bg-text-accent", text: "text-text-accent" },
  mauve: { bg: "bg-mauve", line: "bg-mauve", text: "text-mauve" },
};

export function WaysInSection() {
  return (
    <section className="w-full py-12 px-5 lg:mb-20 lg:py-0" >
      <div className="mx-auto max-w-[1280px]">
        <p className="font-subheading text-xs font-bold uppercase tracking-[3px] text-text-accent ">
          — The Ecosystem
        </p>
        <h2 className="mt-2 font-serif text-2xl font-bold capitalize leading-tight text-text-heading lg:mt-3">
          One brand. Five ways in,
          <br />
          depending on who you are.
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {PATHS.map((path) => {
            const accent = ACCENT_CLASSES[path.accent];
            return (
              <div
                key={path.key}
                className="flex w-full flex-col rounded-3xl border border-brand/10 bg-cream p-6 shadow-sm sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${accent.bg}`}
                >
                  <Image
                    src={`/images/${path.icon}`}
                    alt=""
                    width={64}
                    height={64}
                    className="h-10 w-10"
                  />
                </div>

                <span className={`mt-5 block h-[3px] w-9 rounded-full ${accent.line}`} />

                <h3 className="mt-2 font-serif text-lg font-bold text-text-dark">
                  {path.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {path.description}
                </p>

                <Link
                  href="/about"
                  className={`mt-5 inline-flex w-fit items-center gap-1.5 font-subheading text-xs font-bold uppercase tracking-wider ${accent.text}`}
                >
                  Explore
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    strokeWidth={1.5}
                    className="h-3.5 w-3.5 stroke-current"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
