import Image from "next/image";

const STEP_1_ITEMS = [
  { emoji: "🎁", bg: "bg-[#eef6ea]", label: "Map your survival-mode patterns" },
  { emoji: "💗", bg: "bg-transparent", label: "Notice your patterns" },
  { emoji: "💡", bg: "bg-[#fdf3e0]", label: "Sharpen focus" },
  { emoji: "🦋", bg: "bg-[#f2eafb]", label: "Spot what's draining you" },
];

const STEP_2_ITEMS = [
  {
    label: "Learning",
    color: "text-[#c17a3e]",
    icon: (
      <>
        <path d="M12 7c-2-1.5-4.8-1.5-6.8 0v11c2-1.5 4.8-1.5 6.8 0" />
        <path d="M12 7c2-1.5 4.8-1.5 6.8 0v11c-2-1.5-4.8-1.5-6.8 0" />
        <path d="M12 7v11" />
      </>
    ),
  },
  {
    label: "Daily tasks",
    color: "text-[#c17a3e]",
    icon: (
      <>
        <path d="M5 6h1.2M5 12h1.2M5 18h1.2" strokeLinecap="round" />
        <path d="M9 6h10M9 12h10M9 18h10" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Practice",
    color: "text-[#c17a3e]",
    icon: <path d="M13 3L5 14h5l-1 7 8-11h-5l1-7z" strokeLinejoin="round" />,
  },
  {
    label: "Procrastination cycle",
    color: "text-[#4a6b2f]",
    icon: (
      <>
        <path d="M4 12a8 8 0 0113.7-5.7L20 8" />
        <path d="M20 4v4h-4" />
        <path d="M20 12a8 8 0 01-13.7 5.7L4 16" />
        <path d="M4 20v-4h4" />
      </>
    ),
  },
];

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const CALENDAR_ROWS = [
  ["empty", "check", "empty", "empty", "check", "check", "empty"],
  ["empty", "check", "empty", "note", "check", "empty", "empty"],
  ["empty", "check", "empty", "empty", "check", "empty", "empty"],
];

const STEPS = [
  {
    number: "01",
    label: "STEP 1",
    title: "Take a short test",
    subtitle: "To get your personalized plan",
    icon: (
      <>
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <rect x="9" y="2.5" width="6" height="3" rx="1" />
        <path d="M9 10h6M9 13h6M9 16h4" strokeLinecap="round" />
      </>
    ),
  },
  {
    number: "02",
    label: "STEP 2",
    title: "Assess your well-being state",
    subtitle: "And choose your subscription",
    icon: (
      <path d="M12 20s-6.5-4.2-9-8.4C1 8.4 3 5 6.5 5c2 0 3.3 1.2 4 2.3.7-1.1 2-2.3 4-2.3C18 5 20 8.4 18.5 11.6 16 15.8 12 20 12 20z" />
    ),
  },
  {
    number: "03",
    label: "STEP 3",
    title: "Open the Liven app",
    subtitle: "for a quick reset or a self-discovery session",
    icon: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M11 19h2" strokeLinecap="round" />
      </>
    ),
  },
];

function CalendarCell({ state }: { state: string }) {
  if (state === "check") {
    return (
      <div className="flex aspect-square items-center justify-center rounded-xl bg-[#4a6b2f]">
        <svg viewBox="0 0 16 16" fill="none" strokeWidth={2} className="h-3.5 w-3.5 stroke-white">
          <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (state === "note") {
    return (
      <div className="flex aspect-square items-center justify-center rounded-xl bg-[#f3e9de]">
        <svg viewBox="0 0 16 16" fill="none" strokeWidth={1.3} className="h-3.5 w-3.5 stroke-brand">
          <rect x="2.5" y="3.5" width="11" height="9" rx="1.2" />
          <circle cx="5.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          <path d="M3.5 10l2.7-2.8 2 2 2.3-2.7 2.5 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return <div className="aspect-square rounded-xl bg-[#f3e9de]" />;
}

export function StepsSection() {
  return (
    <section className="w-full bg-cream py-12 lg:py-20 lg:pb-10">
      <div className="mx-auto max-w-[1400px] ">
        <div className="grid gap-8 px-4 lg:grid-cols-[380px_1fr] lg:items-center">
          {/* Left content */}
          <div className="relative lg:pb-44">
            <Image
              src="/images/Who-you-are-col-img.png"
              alt=""
              width={165}
              height={159}
              className="pointer-events-none absolute bottom-0 left-0 hidden h-auto w-36 lg:block"
            />
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-10 bg-brand/25" />
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-brand">
                <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 12c-2.5 4.5-9.5 9-9.5 9z" />
              </svg>
              <span className="h-px w-10 bg-brand/25" />
            </div>

            <h2 className="mt-5 text-center font-serif text-4xl text-text-dark sm:text-5xl lg:text-left lg:text-[2.5rem]">
              It took a lot of steps
              <br />
              <span className="font-bold text-text-dark">to become</span>{" "}
              <span className="font-bold text-brand">who you are</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xs text-center text-text-muted lg:mx-0 lg:text-left">
              It will take 3 simple steps to start your self-discovery
              routine
            </p>
          </div>

          {/* Right cards */}
          <div className="grid gap-8 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-center rounded-3xl border border-brand/10 bg-[#fdf5f1] p-4 shadow-[0_1px_0px_0_#00000014,0_1px_1px_-1px_#0000000d]"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-icon-bg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={1.5}
                    className="h-7 w-7 stroke-brand"
                  >
                    {step.icon}
                  </svg>
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-brand">
                  {step.label}
                </p>
                <h3 className="mt-1 text-center text-lg font-bold text-text-dark">
                  {step.title}
                </h3>
                <p className="mt-1 text-center text-xs text-text-muted">
                  {step.subtitle}
                </p>

                <div className="mt-5 w-full">
                  {index === 0 && (
                    <div className="space-y-3">
                      {STEP_1_ITEMS.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-2xl border border-brand/10 bg-[#fdfbfa59] p-4 shadow-sm"
                        >
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xl ${item.bg}`}
                          >
                            {item.emoji}
                          </span>
                          <span className="flex-1 text-sm text-text-dark">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {index === 1 && (
                    <div className="space-y-3">
                      {STEP_2_ITEMS.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-2xl border border-brand/10 bg-[#fdfbfa59] p-4 shadow-sm"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth={1.8}
                            className={`h-7 w-7 shrink-0 ${item.color}`}
                            stroke="currentColor"
                          >
                            {item.icon}
                          </svg>
                          <span className="flex-1 text-sm text-text-dark">
                            {item.label}
                          </span>
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a6b2f]">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              strokeWidth={2}
                              className="h-3.5 w-3.5 stroke-white"
                            >
                              <path
                                d="M3 8.5l3 3 7-7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {index === 2 && (
                    <div className="rounded-2xl border border-brand/10 bg-[#fdfbfa59] p-4 shadow-sm">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-text-dark">
                          New routine
                        </span>
                        <span className="flex items-center gap-1 text-text-muted">
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4a6b2f]">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              strokeWidth={2}
                              className="h-2.5 w-2.5 stroke-white"
                            >
                              <path
                                d="M3 8.5l3 3 7-7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          Mastered
                        </span>
                      </div>

                      <div className="mt-2 border-b border-brand/10" />

                      <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-[10px] text-text-muted">
                        {DAYS.map((day) => (
                          <span key={day}>{day}</span>
                        ))}
                      </div>

                      {CALENDAR_ROWS.map((row, rowIndex) => (
                        <div
                          key={rowIndex}
                          className="mt-1.5 grid grid-cols-7 gap-1.5"
                        >
                          {row.map((cell, cellIndex) => (
                            <CalendarCell key={cellIndex} state={cell} />
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
