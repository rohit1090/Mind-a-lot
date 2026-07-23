import Image from "next/image";

const STATS = [
  {
    key: "experts",
    value: "80+",
    title: "On-Ground Experts",
    description: "Licensed psychologists &\ncounselors worldwide",
    icon: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3.5 19v-1c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4v1" />
        <circle cx="16.5" cy="8" r="2.3" />
        <path d="M14.8 12.3c.5-.1 1.1-.2 1.7-.2 2.4 0 4.5 1.3 4.5 3.3V19" />
      </>
    ),
  },
  {
    key: "hubs",
    value: "5+",
    title: "Major Global Hubs",
    description: "India · USA · Canada · Dubai\nAustralia & Beyond",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a13.5 13.5 0 010 18 13.5 13.5 0 010-18z" />
      </>
    ),
  },
  {
    key: "availability",
    value: "24/7",
    title: "Multi-timezone Availability",
    description: "Round-the-clock support\nwhen it matters most",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    key: "compliance",
    value: "100%",
    title: "Compliance First",
    description: "ISO 27001 · HIPAA\nGDPR·DPDPA",
    icon: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

const MAP_PINS = [
  { key: "canada", label: "Canada", left: "20%", top: "20%", color: "#5f6b5a" },
  { key: "usa", label: "USA", left: "18%", top: "33%", color: "#4b4b4b" },
  { key: "india", label: "India", left: "68%", top: "43%", color: "#c99a4e" },
  { key: "dubai", label: "Dubai", left: "63%", top: "35%", color: "#6b3a46" },
  { key: "australia", label: "Australia", left: "85%", top: "79%", color: "#5f6b5a" },
];

export function GlobalPresenceSection() {
  return (
    <section className="w-full bg-cream pb-10 pt-12 lg:pb-12">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-0">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-brand/10 bg-[#faf6f2] lg:flex-row lg:items-stretch">
          {/* Stats */}
          <div className="flex divide-x divide-brand/10 overflow-x-auto lg:flex-1 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {STATS.map((stat) => (
              <div
                key={stat.key}
                className="flex w-[200px] shrink-0 flex-col items-center gap-2 px-5 py-6 text-center sm:w-[220px] lg:w-auto lg:py-8"
              >
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={1.5}
                    className="h-9 w-9 stroke-brand"
                  >
                    {stat.icon}
                  </svg>
                  <p className="font-sans text-3xl font-bold text-text-dark">
                    {stat.value}
                  </p>
                </div>
                <p className="text-sm font-semibold text-text-dark">
                  {stat.title}
                </p>
                <p className="whitespace-pre-line text-xs leading-relaxed text-text-muted">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="relative aspect-[514/230] w-full max-w-[440px] shrink-0 self-center border-t border-brand/10 pt-5 lg:border-t-0 lg:border-l lg:pt-0">
            <Image
              src="/images/Map.png"
              alt="Global presence map"
              fill
              className="object-contain"
            />
            {MAP_PINS.map((pin) => (
              <div
                key={pin.key}
                style={{ left: pin.left, top: pin.top }}
                className="absolute flex -translate-x-1/2 -translate-y-full items-center gap-1"
              >
                <svg viewBox="0 0 24 24" fill={pin.color} className="h-5 w-5 shrink-0">
                  <path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 6.6 11.2 7.3 11.8a1 1 0 001.4 0C13.4 21.2 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <span className="whitespace-nowrap text-xs font-medium text-text-dark">
                  {pin.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
