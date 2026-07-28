import Image from "next/image";

const CREDENTIALS = [
  "Founder & CEO of Jagrati EdTech Pvt. Ltd.",
  "Creator of Mind A Lot & Author of Mindful Tales",
  "PhD in Educational Psychology & Chartered Accountant",
  "Mentored 2.1L+ students across 70+ institutions",
  "Recipient of the India Excellence Award 2023",
];

export function FounderSection() {
  return (
    <section className="w-full px-5 py-14 lg:px-0 lg:py-24 lg:pb-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {/* Left — photo + profile card */}
          <div className="relative mx-auto flex w-full max-w-sm shrink-0 flex-col overflow-hidden rounded-3xl bg-brand-dark px-6 py-8 text-white lg:mx-0 lg:w-[30%]">
            <div className="relative mx-auto aspect-square w-4/5 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/sandhya-p-nagar.jpg"
                alt="Dr. CA Sandhya P. Nagar"
                fill
                sizes="(min-width: 1024px) 24vw, 307px"
                className="object-cover object-top"
              />
            </div>

            <span className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} className="h-4 w-4 shrink-0 stroke-white">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 6.5l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              sandhya@mindalot.care
            </span>

            <ul className="mt-6 space-y-2.5 text-xs leading-relaxed text-white/90">
              {CREDENTIALS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — content */}
          <div className="flex flex-col justify-center rounded-3xl bg-icon-bg/40 px-6 py-8 sm:px-10 sm:py-10">
            <p className="font-subheading text-xs font-bold uppercase tracking-[3px] text-text-accent">
              — Built By, Not Just Funded By
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold capitalize text-text-heading">
              Dr. CA Sandhya P. Nagar
            </h2>
            <p className="mt-1 font-subheading text-sm font-bold text-sage sm:text-base">
              Founder &amp; CEO
            </p>

            <p className="mt-5 font-subheading text-base font-bold text-text-dark">
              A Chartered Accountant&rsquo;s rigor, applied to mental
              wellness.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
              Mind A Lot is founded and led by Dr. CA Sandhya P. Nagar, a
              Chartered Accountant with additional training in psychology
              and NLP. That combination shapes everything the ecosystem is
              built on: measurable outcomes and structured delivery, not
              just good intentions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
              Every program is delivered by a dedicated, in-house
              counselling team — not a rotating marketplace of freelance
              strangers — so schools, colleges, and companies work with the
              same people and the same standard, cycle after cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
