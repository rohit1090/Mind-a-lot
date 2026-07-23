import Image from "next/image";

const FEATURES = [
  {
    key: "anonymous",
    title: "100% Anonymous",
    description: "Your identity stays private. Feel safe to talk and be yourself.",
    iconSrc: "/images/Anonymous.svg",
  },
  {
    key: "secure",
    title: "Secure & Private",
    description: "Your data is encrypted to ensure complete peace of mind.",
    iconSrc: "/images/Secure%20%26%20Private.svg",
  },
  {
    key: "growth",
    title: "Personal Growth",
    description: "Tiny daily nudges to help you grow, heal and thrive.",
    iconSrc: "/images/Personal%20Growth.svg",
  },
  {
    key: "no-judgment",
    title: "No Judgment",
    description: "Just support that truly understands you — no judgment, ever.",
    iconSrc: "/images/No%20Judgment.svg",
  },
];

export function TaglineSection() {
  return (
    <section className="w-full overflow-hidden px-5 bg-cream py-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-4 sm:gap-8">
          <span className="h-px flex-1 bg-brand/20" />
          <div className="flex shrink-0 items-center gap-2">
            <h2 className="whitespace-nowrap font-serif text-xl text-text-dark sm:text-2xl">
              Mind A Lot is here for everyone.
            </h2>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-brand">
              <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 12c-2.5 4.5-9.5 9-9.5 9z" />
            </svg>
          </div>
          <span className="h-px flex-1 bg-brand/20" />
        </div>

        <p className="mt-2 text-center text-sm text-text-muted">
          Wherever you are. Whoever you are. However you feel
        </p>

        <div className="flex items-center gap-8 pt-8">
          <div className="grid flex-1 grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-brand/10">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.key}
                className={`flex items-start gap-2 ${index > 0 ? "lg:px-4" : ""}`}
              >
                <div className="flex shrink-0 items-center justify-center">
                  <Image
                    src={feature.iconSrc}
                    alt=""
                    width={40}
                    height={40}
                    className="h-14 w-14 sm:h-18 sm:w-18"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-text-dark">{feature.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Image
            src="/images/Stone-mind-a-lot-cropped.png"
            alt=""
            width={854}
            height={724}
            className="pointer-events-none hidden h-56 w-auto shrink-0 lg:block"
          />
        </div>
      </div>
    </section>
  );
}
