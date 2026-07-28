import Image from "next/image";

const AUDIENCES = [
  {
    key: "students",
    title: "Students & Young Adults",
    description: "Facing exam stress, peer pressure, identity struggles, loneliness.",
    image: "/images/Student-young-adults.png",
    layout: "overlay",
    span: "lg:col-span-4 lg:row-span-2",
  },
  {
    key: "professionals",
    title: "Working Professionals",
    description: "Burnout, overthinking, career decisions, relationship stress.",
    image: "/images/Working-Professional.png",
    layout: "side",
    span: "lg:col-span-5",
  },
  {
    key: "older",
    title: "Older Adults",
    description: "Losa, loneliness, transitions, simply needing someone to talk.",
    image: "/images/Older Adults.png",
    layout: "side",
    span: "lg:col-span-5",
  },
  {
    key: "lgbtq",
    title: "LGBTQ+ Community",
    description: "Safe, affirming space to talk about anything.",
    image: "/images/LGBTQ.png",
    layout: "stacked",
    span: "lg:col-span-3 lg:row-span-2",
  },
  {
    key: "neurodivergent",
    title: "Neurodivergent Users",
    description: "ADHD, emotional regulation, social fatigue.",
    image: "/images/Neurodivergent Users .png",
    layout: "side",
    span: "",
  },
  {
    key: "support",
    title: "Anyone Who Needs Emotional Support",
    description: "When friends or family aren't enough, or too much stress builds up.",
    image: "/images/Anyone Who Needs.png",
    layout: "side-reverse",
    span: "",
  },
];

function AccentLine() {
  return <span className="block h-[3px] w-9 rounded-full bg-brand/60" />;
}

export function WhoIsThisForSection() {
  const overlayCard = AUDIENCES[0];
  const professionals = AUDIENCES[1];
  const older = AUDIENCES[2];
  const lgbtq = AUDIENCES[3];
  const neurodivergent = AUDIENCES[4];
  const support = AUDIENCES[5];

  return (
    <section className="relative w-full overflow-hidden bg-cream px-4 pt-8 lg:py-2 lg:pb-8">
      <Image
        src="/images/Right-corner-leaf.png"
        alt=""
        width={98}
        height={98}
        className="pointer-events-none absolute -bottom-2 -right-2 hidden h-auto w-32 opacity-50 lg:block"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <h2 className="text-center font-serif text-2xl font-bold capitalize text-text-heading">
          Who is this for?
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand/40" />

        <p className="mx-auto mt-5 max-w-2xl text-center font-subheading text-text-muted">
          Mind A Lot is for everyone who wants to feel better, grow stronger,
          and cope smarter.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-center italic text-brand">
          &ldquo;Wherever you are. Whoever you are. However you feel.&rdquo; —
          Mind A Lot is here for you!
        </p>

        {/* Top bento grid */}
        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          {/* Students & Young Adults - overlay card */}
          <div className={`relative h-[440px] overflow-hidden rounded-3xl shadow-sm ${overlayCard.span}`}>
            <div className="absolute inset-x-0 top-0 h-[70%]">
              <Image
                src={overlayCard.image}
                alt={overlayCard.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[52%]">
              <svg
                viewBox="0 0 400 300"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <path
                  d="M0,25 C60,20 100,15 150,45 C210,80 250,110 310,75 C355,50 380,35 400,50 L400,300 L0,300 Z"
                  fill="#fdfbf6"
                  fillOpacity="0.97"
                />
              </svg>
              <div className="relative px-7 pb-6 pt-16">
                <h3 className="font-serif text-2xl font-bold leading-tight text-text-dark">
                  Students &amp;
                  <br />
                  Young Adults
                </h3>
                <div className="mt-3">
                  <AccentLine />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {overlayCard.description}
                </p>
              </div>
            </div>
          </div>

          {/* Working Professionals - side card */}
          <div className={`relative flex overflow-hidden rounded-3xl bg-cream shadow-sm ${professionals.span}`}>
            <div className="relative w-1/2 shrink-0">
              <Image
                src={professionals.image}
                alt={professionals.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-cream" />
            </div>
            <div className="flex flex-col justify-center px-7 py-5">
              <h3 className="font-serif text-2xl font-bold leading-tight text-text-dark">
                Working
                <br />
                Professionals
              </h3>
              <div className="mt-3">
                <AccentLine />
              </div>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {professionals.description}
              </p>
            </div>
          </div>

          {/* LGBTQ+ Community - stacked card (photo top, text bottom) */}
          <div className={`flex flex-col overflow-hidden rounded-3xl bg-cream shadow-sm ${lgbtq.span}`}>
            <div className="relative min-h-0 flex-1">
              <Image
                src={lgbtq.image}
                alt={lgbtq.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="shrink-0 px-7 py-5">
              <h3 className="font-serif text-2xl font-bold leading-tight text-text-dark">
                {lgbtq.title}
              </h3>
              <div className="mt-3">
                <AccentLine />
              </div>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {lgbtq.description}
              </p>
            </div>
          </div>

          {/* Older Adults - side card */}
          <div className={`flex overflow-hidden rounded-3xl bg-cream shadow-sm ${older.span}`}>
            <div className="relative w-1/2 shrink-0">
              <Image
                src={older.image}
                alt={older.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-cream" />
            </div>
            <div className="flex flex-col justify-center px-7 py-5">
              <h3 className="font-serif text-2xl font-bold leading-tight text-text-dark">
                {older.title}
              </h3>
              <div className="mt-3">
                <AccentLine />
              </div>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {older.description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          {/* Neurodivergent Users - side card */}
          <div className="flex h-[240px] overflow-hidden rounded-3xl bg-cream shadow-sm">
            <div className="relative w-1/2 shrink-0">
              <Image
                src={neurodivergent.image}
                alt={neurodivergent.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-cream" />
            </div>
            <div className="flex flex-col justify-center px-7 py-5">
              <h3 className="font-serif text-2xl font-bold leading-tight text-text-dark">
                {neurodivergent.title}
              </h3>
              <div className="mt-3">
                <AccentLine />
              </div>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {neurodivergent.description}
              </p>
            </div>
          </div>

          {/* Anyone Who Needs Emotional Support - reversed side card */}
          <div className="flex overflow-hidden rounded-3xl bg-cream shadow-sm">
            <div className="flex flex-col justify-center px-7 py-5">
              <h3 className="font-serif text-2xl font-bold leading-tight text-text-dark">
                {support.title}
              </h3>
              <div className="mt-3">
                <AccentLine />
              </div>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {support.description}
              </p>
            </div>
            <div className="relative w-1/2 shrink-0">
              <Image
                src={support.image}
                alt={support.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-l from-transparent to-cream" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
