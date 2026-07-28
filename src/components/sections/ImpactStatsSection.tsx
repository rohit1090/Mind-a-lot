const STATS = [
  {
    key: "states",
    value: "3",
    description: "States — Karnataka, Delhi NCR, Tamil Nadu",
    tone: "peach",
  },
  {
    key: "programs",
    value: "5",
    description: "Programs across the life-stage continuum",
    tone: "sage",
  },
  {
    key: "institutions",
    value: "[ X ]",
    description: "Institutions served to date",
    tone: "peach",
  },
  {
    key: "counsellors",
    value: "[ X ]",
    description: "In-house trained counsellors",
    tone: "sage",
  },
];

const TONE_STYLES: Record<
  string,
  { cardBg: string; wave?: string; ringBorder: string; dot: string; divider: string }
> = {
  peach: {
    cardBg: "bg-[#FCF9F5]",
    wave: "fill-[#F4EBE0]",
    ringBorder: "border-[#BA9B77]",
    dot: "bg-[#BA9B77]",
    divider: "bg-[#D2B895]",
  },
  sage: {
    cardBg: "bg-[#F5F7F1]",
    ringBorder: "border-sage",
    dot: "bg-sage",
    divider: "bg-sage/60",
  },
};

export function ImpactStatsSection() {
  return (
    <section className="w-full px-5 lg:pb-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((stat) => {
            const tone = TONE_STYLES[stat.tone];
            return (
              <div
                key={stat.key}
                className={`relative overflow-hidden rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${tone.cardBg}`}
              >
                {tone.wave && (
                  <svg
                    className="absolute left-0 top-0 z-10 h-[120px] w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,0 L100,0 L100,20 C 65,70 30,80 0,55 Z"
                      className={tone.wave}
                    />
                  </svg>
                )}

                <div
                  className={`absolute right-[25px] top-[25px] z-20 flex h-[22px] w-[22px] items-center justify-center rounded-full border-[4.5px] ${tone.ringBorder} ${tone.cardBg}`}
                >
                  <div className={`h-[6px] w-[6px] rounded-full ${tone.dot}`} />
                </div>

                <div className="relative z-20 flex flex-col px-[30px] pb-[30px] pt-[100px]">
                  <p className="m-0 font-serif text-[2.25rem] font-medium leading-none text-[#362512]">
                    {stat.value}
                  </p>
                  <span className={`my-[22px] h-[3px] w-[35px] rounded-sm ${tone.divider}`} />
                  <p className="m-0 text-[0.95rem] font-normal leading-[1.5] text-[#5C5C5C]">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
