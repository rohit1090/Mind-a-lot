import Image from "next/image";
import { Button } from "@/components/ui/Button";

const NODES_DATA = [
  {
    key: "schools",
    title: "Preschool",
    desc: "Early Emotional Foundations",
    left: "20.0%",    // (160 / 800) * 100
    top: "19.71%",   // (138 / 700) * 100
    image: "PreSchool.svg",
    imageWidth: 60,
    imageHeight: 59,
  },
  {
    key: "universities",
    title: "School",
    desc: "Student Wellbeing Support",
    left: "80.0%",    // (640 / 800) * 100
    top: "19.71%",   // (138 / 700) * 100
    image: "school.svg",
    imageWidth: 59,
    imageHeight: 59,
  },
  {
    key: "families",
    title: "Workforce",
    desc: "Mental Health Excellence",
    left: "11.875%", // (95 / 800) * 100
    top: "64.0%",    // (448 / 700) * 100
    image: "Workforce.svg",
    imageWidth: 59,
    imageHeight: 59,
  },
  {
    key: "corporates",
    title: "College",
    desc: "Career & Life Skills",
    left: "88.125%", // (705 / 800) * 100
    top: "64.0%",    // (448 / 700) * 100
    image: "Collage.svg",
    imageWidth: 59,
    imageHeight: 59,
  },
  {
    key: "retirement",
    title: "Coaching",
    desc: "Performance & Resilience",
    left: "50.0%",    // (400 / 800) * 100
    top: "85.71%",
    image: "Coaching.svg",
    imageWidth: 59,
    imageHeight: 59,
  },
];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-cream py-10 lg:py-8">
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 lg:px-0">

        {/* Main Grid Container */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-4">

          {/* Left Column Container */}
          <div className="w-full lg:w-auto lg:max-w-[50%]">
            <h1 className="mt-0 font-serif text-2xl capitalize leading-[1.15] font-bold text-text-heading sm:text-3xl md:text-[34px] lg:text-[44px]">
              One mind. Every life stage.
              <br />
              One ecosystem to <span className="text-text-accent">care for both.</span>
            </h1>

            <p className="mt-4 max-w-[90%] font-subheading text-sm leading-relaxed text-text-muted sm:text-[15px]">
              From the preschool years to the boardroom, Mind A Lot builds
              structured, data-backed mental wellness programs for schools,
              colleges, corporates, coaching institutes, and individuals —
              under one methodology, not a marketplace of strangers.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" className="justify-center sm:w-auto">
                For Institutions
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
              </Button>

              <Button href="/about" variant="secondary" className="justify-center sm:w-auto">
                For Individuals
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  strokeWidth={1.5}
                  className="h-4 w-4 stroke-brand"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile Ecosystem List (mobile only, sm and up unaffected) */}
          <div className="w-full sm:hidden">
            <div className="mb-6 flex flex-col items-center gap-3">
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_35%,#b8a290_0%,#8a7362_50%,#6b5645_100%)]"
                style={{ boxShadow: "0 10px 25px rgba(104, 80, 64, 0.22)" }}
              >
                <Image
                  src="/images/hero-right-center.png"
                  alt="Mind A Lot"
                  width={75}
                  height={98}
                  className="h-10 w-auto"
                />
              </div>
              <div className="text-center">
                <div className="text-[11px] font-bold tracking-[3px] uppercase text-brand/70">
                  Lifelong Care
                </div>
                <div className="text-[14px] font-bold tracking-[3.5px] uppercase text-text-heading">
                  One Ecosystem
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {NODES_DATA.map((node) => (
                <div
                  key={node.key}
                  className="flex items-center gap-4 rounded-2xl border border-brand/10 bg-white/60 px-4 py-3"
                >
                  <Image
                    src={`/images/${node.image}`}
                    alt=""
                    width={node.imageWidth}
                    height={node.imageHeight}
                    className="h-12 w-12 shrink-0"
                  />
                  <div className="min-w-0 text-left">
                    <div className="text-sm font-bold text-text-heading">
                      {node.title}
                    </div>
                    <div className="text-xs leading-snug text-text-muted">
                      {node.desc.replace(/\n/g, " ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Container - Maximized Ecosystem Diagram (tablet & desktop, unchanged) */}
          <div className="relative hidden w-full max-w-[620px] justify-self-center sm:block lg:col-span-7 lg:justify-self-end">
            <div className="relative mx-auto aspect-[800/700] w-full overflow-visible">
              
              {/* Header inside top arc */}
              <div className="absolute top-[15%] left-1/2 z-10 -translate-x-1/2 text-center">
                <div className="text-[11px] font-bold tracking-[3px] uppercase text-brand/70">
                 Mind A Lot
                </div>
                <div className="text-[14px] font-bold tracking-[3.5px] uppercase text-text-heading">
                  Across Life Stages
                </div>
              </div>

              {/* SVG Connectors & Scaled Concentric Circles */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 700">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8dcd2" />
                    <stop offset="100%" stopColor="#b8a192" />
                  </linearGradient>
                </defs>

                {/* Outer Orbital Ring */}
                <g
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "center",
                    animation: "spin-cw 40s linear infinite",
                  }}
                >
                  <circle
                    cx="400"
                    cy="350"
                    r="310"
                    fill="none"
                    stroke="#ebdcd0"
                    strokeWidth="1.8"
                    strokeDasharray="16 10"
                  />
                  {Array.from({ length: 5 }).map((_, i) => {
                    const angle = (2 * Math.PI * i) / 5;
                    const x = 400 + 310 * Math.cos(angle);
                    const y = 350 + 310 * Math.sin(angle);
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#d9c8b8"
                      />
                    );
                  })}
                </g>

                {/* Expanded Inner Concentric Rings around central badge */}
                <g
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "center",
                    animation: "spin-ccw 30s linear infinite",
                  }}
                >
                  <circle cx="400" cy="350" r="162" fill="none" stroke="#ebdcd0" strokeWidth="1.2" strokeDasharray="8 6" />
                  <circle cx="400" cy="350" r="144" fill="none" stroke="#cbb8aa" strokeWidth="1.5" strokeDasharray="4 8" />
                  <circle cx="400" cy="350" r="128" fill="none" stroke="#ebdcd0" strokeWidth="1" strokeDasharray="20 12" />
                </g>

                {/* Radial Connecting Lines pointing directly to node centers */}
                <line x1="400" y1="350" x2="160" y2="138" stroke="url(#lineGrad)" strokeWidth="1.4" />
                <line x1="400" y1="350" x2="640" y2="138" stroke="url(#lineGrad)" strokeWidth="1.4" />
                <line x1="400" y1="350" x2="95" y2="448" stroke="url(#lineGrad)" strokeWidth="1.4" />
                <line x1="400" y1="350" x2="705" y2="448" stroke="url(#lineGrad)" strokeWidth="1.4" />
                <line x1="400" y1="350" x2="400" y2="670" stroke="url(#lineGrad)" strokeWidth="1.4" />

                {/* Anchor Dots on dashed ring (r=145) */}
                <circle cx="291" cy="254" r="4" fill="#6d5443" />
                <circle cx="509" cy="254" r="4" fill="#6d5443" />
                <circle cx="262" cy="394" r="4" fill="#6d5443" />
                <circle cx="538" cy="394" r="4" fill="#6d5443" />
                <circle cx="400" cy="495" r="4" fill="#6d5443" />
              </svg>

              {/* Enlarged Center Mind-a-Lot Badge */}
              <div
                className="absolute top-[50%] left-[50%] z-20 flex h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_35%,#b8a290_0%,#8a7362_50%,#6b5645_100%)] text-center text-white sm:h-[185px] sm:w-[185px] lg:h-[205px] lg:w-[205px]"
                style={{ boxShadow: "0 10px 25px rgba(104, 80, 64, 0.22)" }}
              >
                <Image
                  src="/images/hero-right-center.png"
                  alt="Mind A Lot"
                  width={75}
                  height={98}
                  className="h-[55px] w-auto sm:h-[95px] lg:h-[105px]"
                />
              </div>

              {/* Scaled Ecosystem Nodes */}
              {NODES_DATA.map((node) => (
                <div
                  key={node.key}
                  style={{ left: node.left, top: node.top }}
                  className="absolute z-20 mb-[7px] flex w-[88px] -translate-x-1/2 -translate-y-[32px] flex-col items-center text-center sm:w-[130px] lg:w-[155px]"
                >
                  {/* Icon */}
                  <Image
                    src={`/images/${node.image}`}
                    alt=""
                    width={node.imageWidth}
                    height={node.imageHeight}
                    className="mb-[10px] h-16 w-16 drop-shadow-md"
                  />

                  {/* Title Badge */}
                  <div className="-mt-1 mb-1 rounded-full border border-brand/15 bg-cream px-3 py-0.5 text-[0.82rem] font-bold text-text-heading shadow-xs whitespace-nowrap">
                    {node.title}
                  </div>

                  {/* Description */}
                  <div className="whitespace-pre-line text-[13px] leading-tight text-text-muted">
                    {node.desc}
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}