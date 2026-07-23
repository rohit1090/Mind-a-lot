import Image from "next/image";

const PROFESSIONALS = [
  {
    key: "priya",
    photo: "/images/professionals-1.png",
    name: "Dr. Priya Sharma",
    title: "PhD in Clinical Psychology",
    description:
      "Specializes in anxiety, relationships, and emotional well-being.",
  },
  {
    key: "neha",
    photo: "/images/professionals-2.png",
    name: "Dr. Neha Verma",
    title: "PhD, Positive Psychology Practitioner",
    description:
      "Focuses on mindset coaching, motivation, and personal growth.",
  },
  {
    key: "arjun",
    photo: "/images/professionals-3.png",
    name: "Dr. Arjun Mehta",
    title: "PhD in Psychology",
    description:
      "Expert in behaviour change, well-being, and mental resilience.",
  },
];

const SOCIAL_ICONS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    filled: true,
    icon: (
      <>
        <rect x="4" y="8.5" width="2.2" height="7.5" />
        <circle cx="5.1" cy="5.6" r="1.3" />
        <path d="M9 8.5h2.1v1.3c.6-1 1.7-1.6 3-1.6 2.3 0 3.4 1.5 3.4 4.2V16h-2.2v-3.5c0-1.3-.5-2.2-1.7-2.2-.9 0-1.6.6-1.9 1.2-.1.2-.1.5-.1.9V16H9V8.5z" />
      </>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    filled: false,
    icon: (
      <>
        <rect x="4" y="4" width="14" height="14" rx="4" />
        <circle cx="11" cy="11" r="3.2" />
        <circle cx="14.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

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
    <section className="relative w-full overflow-hidden bg-cream px-4 py-4 lg:py-8">
      <DotGrid className="pointer-events-none absolute left-6 top-6 hidden h-24 w-24 opacity-60 lg:block" />
      <DotGrid className="pointer-events-none absolute right-6 top-6 hidden h-24 w-24 opacity-60 lg:block" />
      <Image
        src="/images/leaf-left.png"
        alt=""
        width={76}
        height={154}
        className="pointer-events-none absolute -bottom-4 -left-2 hidden h-auto w-24 -scale-x-100 opacity-60 lg:block"
      />
      <Image
        src="/images/Right-corner-leaf.png"
        alt=""
        width={98}
        height={98}
        className="pointer-events-none absolute -bottom-2 -right-2 hidden h-auto w-28 opacity-60 lg:block"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] ">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-1.5 text-xs font-bold tracking-[3px] text-brand">
          <span className="h-1 w-1 rounded-full bg-sage" />
          EXPERTS
          <span className="h-1 w-1 rounded-full bg-sage" />
        </div>

        <h2 className="mt-4 text-center font-sans text-2xl font-bold text-text-dark sm:text-3xl">
          Mind A Lot experts
        </h2>
        <p className="mt-1 text-center text-sm text-text-muted">
          Our professionals co-create Liven&apos;s content and framework
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROFESSIONALS.map((person) => (
            <div
              key={person.key}
              className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 rounded-2xl border border-brand/10 bg-[#fdfbfa] p-5 shadow-sm"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 pt-[0.5rem]">
                <p className="whitespace-nowrap text-[1.1rem] font-bold text-text-dark">
                  {person.name}
                </p>
                <p className="text-[0.825rem] font-bold text-[#c17a3e]">
                  {person.title}
                </p>
                <span className="mt-2 block h-px w-8 bg-brand/20" />
              </div>

              <div className="col-span-2 flex items-start gap-3">
                <div className="flex shrink-0 gap-2">
                  {SOCIAL_ICONS.map((social) => (
                    <a
                      key={social.key}
                      href="#"
                      aria-label={`${person.name} on ${social.label}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-icon-bg"
                    >
                      <svg
                        viewBox="0 0 22 22"
                        fill={social.filled ? "currentColor" : "none"}
                        stroke={social.filled ? "none" : "currentColor"}
                        strokeWidth={1.5}
                        className="h-[18px] w-[18px] text-brand"
                      >
                        {social.icon}
                      </svg>
                    </a>
                  ))}
                </div>

                <p className="min-w-0 text-base leading-relaxed text-text-muted">
                  {person.description}
                </p>
              </div>
            </div>
          ))}

          {/* Stats card */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-brand/10 bg-[#fdfbfa] p-5 text-center shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={1.5}
              className="h-11 w-11 stroke-brand"
            >
              <circle cx="9" cy="8" r="3.2" />
              <path d="M3 19v-.5c0-2.8 2.7-4.8 6-4.8s6 2 6 4.8v.5" />
              <circle cx="17" cy="8.2" r="2.6" />
              <path d="M14.8 13.8c.7-.15 1.4-.2 2.2-.2 2.7 0 5 1.7 5 4.4v1" />
            </svg>

            <p className="mt-3 text-4xl font-extrabold text-[#c17a3e]">15+</p>
            <p className="mt-2 text-base leading-snug text-text-dark">
              Licensed therapists
              <br />
              and psychologists
            </p>

            <span className="mt-4 block h-px w-16 bg-brand/20" />

            <p className="mt-4 text-sm leading-snug text-text-muted">
              Across our leadership
              <br />
              and clinical teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
