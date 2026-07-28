import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    number: "01",
    badgeColor: "bg-brand",
    title: "Instant Human Support",
    description:
      "Talk to a real counsellor the moment you feel overwhelmed. No forms. No waiting. No automated replies — just a human who listens.",
    iconSrc: "/images/Human-support-icon.svg",
  },
  {
    number: "02",
    badgeColor: "bg-sage",
    title: "100% Anonymous",
    description:
      "Use a name you're comfortable with. Your identity stays private. Feel safe. Speak freely. Be heard without judgement.",
    iconSrc: "/images/Anonymous-icon.svg",
  },
  {
    number: "03",
    badgeColor: "bg-brand",
    title: "Flexible Access",
    description:
      "Choose your counsellor. Choose chat, voice, or video. Support that fits your comfort.",
    iconSrc: "/images/Flexible-icon.svg",
  },
  {
    number: "04",
    badgeColor: "bg-sage",
    title: "Gentle Daily Support",
    description:
      "Set your personal growth goals inside the app. We send you tiny, doable nudges to help you stay on track — one gentle step at a time.",
    iconSrc: "/images/Daily-support-icon.svg",
  },
  {
    number: "05",
    badgeColor: "bg-brand",
    title: "Mood Check-In",
    description:
      "Just tap how you're feeling. We'll guide you from there. No mood history shown — because your past doesn't need to hurt you again.",
    iconSrc: "/images/Mood-check-in-icon.svg",
  },
  {
    number: "06",
    badgeColor: "bg-sage",
    title: "Self-Discovery & Learning",
    description:
      "Understand your thoughts and habits through simple self-assessments, and explore videos, stories, podcasts, and guided journaling created by experts.",
    iconSrc: "/images/Self-discovery=icon.svg",
    wrapCircle: true,
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-16 pb-16 lg:pb-20">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <p className="text-center font-subheading text-xs font-bold uppercase tracking-[3px] text-text-accent">
          — Our Difference
        </p>

        <h2 className="mt-5 text-center font-serif text-2xl font-bold capitalize text-text-heading">
          What makes <span className="text-brand">Mind-A-Lot</span> different?
        </h2>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-brand/20 sm:w-28" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-brand">
            <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 12c-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
          <span className="h-px w-20 bg-brand/20 sm:w-28" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.number}
              className="flex items-start gap-4 rounded-3xl border border-brand/10 bg-white/60 px-6 py-6 sm:px-8 lg:items-center lg:gap-5 lg:rounded-full"
            >
              {feature.wrapCircle ? (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-icon-bg lg:h-24 lg:w-24">
                  <Image
                    src={feature.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="h-9 w-9 lg:h-12 lg:w-12"
                  />
                </div>
              ) : (
                <Image
                  src={feature.iconSrc}
                  alt=""
                  width={96}
                  height={96}
                  className="h-16 w-16 shrink-0 lg:h-24 lg:w-24"
                />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${feature.badgeColor}`}
                  >
                    {feature.number}
                  </span>
                  <h3 className="font-serif text-xl text-text-dark">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-dark"
          >
            Explore all features
            <svg
              viewBox="0 0 16 16"
              fill="none"
              strokeWidth={1.5}
              className="h-4 w-4 stroke-white"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
