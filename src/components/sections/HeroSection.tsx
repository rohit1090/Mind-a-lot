import Image from "next/image";
import { Button } from "@/components/ui/Button";

const TRUST_BADGES = [
  {
    key: "secure",
    title: "Secure & Confidential",
    description: "Enterprise-Grade Security",
    fillIcon: false,
    icon: (
      <>
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    key: "clinical",
    title: "Clinically Validated",
    description: "Evidence-based Practices",
    fillIcon: true,
    icon: (
      <>
        <circle cx="8" cy="8" r="3" />
        <path d="M2.5 19v-1.5C2.5 14.8 5 13 8 13s5.5 1.8 5.5 4.5V19z" />
        <circle cx="16.5" cy="7.5" r="2.5" />
        <path d="M14.6 12.2c.6-.13 1.24-.2 1.9-.2 2.8 0 5 1.6 5 3.8V17h-5.5" />
      </>
    ),
  },
  {
    key: "global",
    title: "Global Reach",
    description: "Care Without Boundaries",
    fillIcon: false,
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
      </>
    ),
  },
];

const NODES_DATA = [
  {
    key: "schools",
    title: "Schools",
    desc: "Early emotional\ndevelopment &\ncounseling",
    left: "20.0%",    // (160 / 800) * 100
    top: "19.71%",   // (138 / 700) * 100
    image: "Schools.png",
    imageWidth: 70,
    imageHeight: 69,
  },
  {
    key: "universities",
    title: "Universities",
    desc: "Student well-being,\nstress & career\nguidance",
    left: "80.0%",    // (640 / 800) * 100
    top: "19.71%",   // (138 / 700) * 100
    image: "Universities.png",
    imageWidth: 70,
    imageHeight: 69,
  },
  {
    key: "families",
    title: "Families",
    desc: "Relationships,\nparenting & holistic\nfamily support",
    left: "11.875%", // (95 / 800) * 100
    top: "64.0%",    // (448 / 700) * 100
    image: "Families.png",
    imageWidth: 69,
    imageHeight: 67,
  },
  {
    key: "corporates",
    title: "Corporates",
    desc: "EAP programs,\nburnout prevention &\nleadership wellness",
    left: "88.125%", // (705 / 800) * 100
    top: "64.0%",    // (448 / 700) * 100
    image: "Corporates.png",
    imageWidth: 69,
    imageHeight: 68,
  },
  {
    key: "retirement",
    title: "Retirement",
    desc: "Loneliness mitigation &\npurpose-driven wellness",
    left: "50.0%",    // (400 / 800) * 100
    top: "85.71%",
    image: "Retirement.png",
    imageWidth: 66,
    imageHeight: 68,
  },
];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-cream py-10 lg:py-8">
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 lg:px-0">

        {/* Main Grid Container */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-4">

          {/* Left Column Container */}
          <div className="w-full lg:w-auto">
            <h1 className="mt-0 font-serif text-2xl leading-[1.15] text-text-dark sm:text-3xl md:text-[34px] lg:text-[48px]">
              <span className="font-bold">Complete Mental</span>
              <br />
              <span className="font-bold">Wellness</span>{" "}
              <span className="text-brand">Infrastructure</span>
              <br />
              for Your Organization.
            </h1>

            <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-text-muted sm:text-[15px]">
              Powered by 80+ global counselors across India, USA, Canada,
              Dubai, and Australia. 24/7 boundary-less support across time
              zones.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" className="justify-center sm:w-auto">
                Book an Enterprise Demo
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
                Explore Our Care Ecosystem
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-col divide-y divide-brand/15 border-t border-brand/10 pt-4 gap-3 lg:flex-row lg:flex-nowrap lg:divide-x lg:divide-y-0">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.key}
                  className="flex items-start gap-3 pb-3 last:pb-0 lg:pr-3 lg:pb-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={badge.fillIcon ? "currentColor" : "none"}
                    strokeWidth={badge.fillIcon ? 0 : 1.5}
                    className="h-7 w-7 shrink-0 stroke-brand text-brand"
                  >
                    {badge.icon}
                  </svg>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-text-dark">
                      {badge.title}
                    </p>
                    <p className="text-sm text-text-muted">
                      {badge.description}
                    </p>
                  </div>
                </div>
              ))}
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
                <div className="text-[11px] font-bold tracking-[3px] uppercase text-[#a49183]">
                  Lifelong Care
                </div>
                <div className="text-[14px] font-bold tracking-[3.5px] uppercase text-[#7b5b47]">
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
                    <div className="text-sm font-bold text-[#7b5b47]">
                      {node.title}
                    </div>
                    <div className="text-xs leading-snug text-[#8d7a6e]">
                      {node.desc.replace(/\n/g, " ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Container - Maximized Ecosystem Diagram (tablet & desktop, unchanged) */}
          <div className="relative hidden w-full max-w-[680px] justify-self-center sm:block lg:col-span-7 lg:justify-self-end">
            <div className="relative mx-auto aspect-[800/700] w-full overflow-visible">
              
              {/* Header inside top arc */}
              <div className="absolute top-[15%] left-1/2 z-10 -translate-x-1/2 text-center">
                <div className="text-[11px] font-bold tracking-[3px] uppercase text-[#a49183]">
                  Lifelong Care
                </div>
                <div className="text-[14px] font-bold tracking-[3.5px] uppercase text-[#7b5b47]">
                  One Ecosystem
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
                  <div className="-mt-1 mb-1 rounded-full border border-[#f0dfd5] bg-[#fefbf9] px-3 py-0.5 text-[0.82rem] font-bold text-[#7b5b47] shadow-xs whitespace-nowrap">
                    {node.title}
                  </div>

                  {/* Description */}
                  <div className="whitespace-pre-line text-[13px] leading-tight text-[#8d7a6e]">
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