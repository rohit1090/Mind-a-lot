import Image from "next/image";

const ARTICLES = [
  {
    key: "anxiety",
    title: "How to manage\nanxiety in daily life",
    readTime: "5 min read",
    image: "/images/Blog-1.png",
  },
  {
    key: "self-care",
    title: "Self-care practices\nthat truly help",
    readTime: "6 min read",
    image: "/images/Blog-2.png",
  },
  {
    key: "resilience",
    title: "Building emotional\nresilience",
    readTime: "5 min read",
    image: "/images/Blog-3.png",
  },
  {
    key: "listening",
    title: "Mindful listening:\nA powerful habit",
    readTime: "4 min read",
    image: "/images/Blog-4.png",
  },
];

function VaseDecoration() {
  return (
    <Image
      src="/images/Blog-section-bkg.png"
      alt=""
      width={1024}
      height={1536}
      className="pointer-events-none absolute -bottom-2 right-0 hidden h-56 w-auto lg:block"
    />
  );
}

export function SmallReadsSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
        <div className="flex items-start justify-center gap-3">
          <Image src="/images/Leaf.svg" alt="" width={45} height={21} className="h-auto w-8 -scale-x-100" />
          <h2 className="text-center font-serif text-2xl font-bold text-text-dark sm:text-3xl">
            Not ready to talk yet? Start with a small read.
          </h2>
          <Image src="/images/Leaf.svg" alt="" width={45} height={21} className="h-auto w-8" />
        </div>

        <div className="relative mt-10">
          <div
            className="flex gap-5 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {ARTICLES.map((article) => (
              <div
                key={article.key}
                className="w-[220px] shrink-0 overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={article.image}
                    alt={article.title.replace(/\n/g, " ")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="whitespace-pre-line text-sm font-bold leading-snug text-text-dark">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-text-muted">
                    {article.readTime}
                  </p>
                </div>
              </div>
            ))}

            <span className="my-auto hidden h-3 w-3 shrink-0 rotate-45 border border-brand/20 sm:block" />

            {/* Need help - CTA card */}
            <div className="relative w-[300px] shrink-0 overflow-hidden rounded-2xl border border-brand/10 bg-[#fdf5f1] p-6">
              <h3 className="text-lg font-bold text-text-dark">Need help?</h3>
              <p className="mt-1 text-sm text-text-muted">
                Explore our FAQs
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Visit FAQ Center
                <svg viewBox="0 0 16 16" fill="none" strokeWidth={1.5} className="h-4 w-4 stroke-white">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <VaseDecoration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
