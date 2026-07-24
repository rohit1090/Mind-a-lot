import Image from "next/image";

const CHECKLIST_ITEMS = [
  "Chat with licensed experts anytime",
  "Track your mood every day",
  "Access guided self-care tools",
];

const STATIC_IMAGE = "/images/mind-a-lot-aap (1).webp";

const SCROLLING_IMAGES = [
  "/images/Mind-a-lot-app-img2.webp",
  "/images/ming-a-lot-img3.webp",
  "/images/ming-a-lot-img4.webp",
  "/images/ming-a-lot-img5.webp",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} className="h-4 w-4 stroke-white">
      <path d="M5 13l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M16.4 12.4c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.3 1 8.3.7 1 1.5 2.1 2.6 2 1-.1 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.2-.8-2.2-3.3zM14.3 5.7c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.6-1.1 1.6-.9 2.6.9.1 1.9-.5 2.5-1.2z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7">
      <path d="M4 3.5v17c0 .3.2.5.4.6l9.7-9.1L4.4 2.9c-.2.1-.4.3-.4.6z" fill="#4CAF50" />
      <path d="M17.5 10.5L14.5 8.7l-3 2.8 3 2.8 3-2.8c.5-.4.5-1.1 0-1.5z" fill="#FFC107" />
      <path d="M4.4 2.9l9.7 9.1 2.9-2.7L5.9 2.4c-.5-.3-1.1-.1-1.5.5z" fill="#F44336" />
      <path d="M4.4 21.1l10.6-6.9-2.9-2.7-7.7 7.6c-.4.5-.4 1.4 0 2z" fill="#2196F3" />
    </svg>
  );
}

export function AppShowcaseSection() {
  return (
    <section className="w-full overflow-hidden bg-cream px-5 pb-10 py-6 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-10">
          {/* Left column */}
          <div className="order-last w-full lg:order-none lg:w-1/2">
            <h2 className="font-serif text-4xl font-bold leading-tight text-text-dark sm:text-5xl">
              Your pocket
              <br />
              for peace of mind.
            </h2>
            <p className="mt-3 font-serif text-2xl italic text-brand sm:text-3xl">
              Simplify the process
            </p>
            <p className="mt-4 max-w-md text-text-muted">
              of finding support, tracking your mood, and talking to an
              expert — all from one convenient app.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {CHECKLIST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand">
                    <CheckIcon />
                  </span>
                  <p className="text-text-dark">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="flex items-center gap-3 rounded-xl bg-brand-dark px-5 py-2.5 text-white transition-colors hover:bg-text-dark"
              >
                <AppleIcon />
                <span className="text-left leading-tight">
                  <span className="block text-[11px]">Download on the</span>
                  <span className="block text-lg font-semibold">App Store</span>
                </span>
              </a>

              <a
                href="#"
                aria-label="Get it on Google Play"
                className="flex items-center gap-3 rounded-xl bg-brand-dark px-5 py-2.5 text-white transition-colors hover:bg-text-dark"
              >
                <GooglePlayIcon />
                <span className="text-left leading-tight">
                  <span className="block text-[11px]">GET IT ON</span>
                  <span className="block text-lg font-semibold">Google Play</span>
                </span>
              </a>
            </div>

            <p className="mt-8 inline-block border-b border-dashed border-brand/40 pb-1 text-text-dark">
              Join our community of{" "}
              <span className="font-bold text-brand">+10,000 users</span>{" "}
              today!
            </p>
          </div>

          {/* Right column — scrolling column + static phone, side by side */}
          <div className="order-first mx-auto flex h-[560px] w-full min-w-0 max-w-[420px] items-stretch gap-4 lg:order-none lg:h-[600px] lg:w-1/2 lg:max-w-none lg:gap-6">
            {/* Left — infinite vertical scrolling images */}
            <div className="relative h-full min-w-0 flex-[42] overflow-hidden rounded-3xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-cream to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-cream to-transparent" />

              <div
                className="flex flex-col gap-10"
                style={{ animation: "scroll-up 28s linear infinite" }}
              >
                {[...SCROLLING_IMAGES, ...SCROLLING_IMAGES].map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative w-full shrink-0"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={394}
                      height={882}
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — single static image */}
            <div className="relative h-full min-w-0 flex-[58]">
              <Image
                src={STATIC_IMAGE}
                alt="Mind A Lot app"
                fill
                sizes="(min-width: 1024px) 30vw, 45vw"
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
