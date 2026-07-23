"use client";

import Image from "next/image";
import { useState } from "react";

const TESTIMONIALS = [
  {
    key: "student",
    quote: "Mind A Lot helped me handle college pressure confidently.",
    name: "Student, Bengaluru",
  },
  {
    key: "professional",
    quote: "It gave me a safe space to talk without judgement, even at 2 a.m.",
    name: "Working Professional, Mumbai",
  },
  {
    key: "parent",
    quote: "My teenager finally opens up. This app made that possible.",
    name: "Parent, Delhi",
  },
];

function AvatarPlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white/25">
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.3} className="h-10 w-10 stroke-white/70">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
      </svg>
    </div>
  );
}

function StonesDecoration() {
  return (
    <Image
      src="/images/review-img.svg"
      alt=""
      width={122}
      height={122}
      className="pointer-events-none absolute right-8 top-1/2 hidden h-24 w-auto -translate-y-1/2 opacity-70 lg:block"
    />
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  function goPrev() {
    setIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  }

  function goNext() {
    setIndex((current) => (current === TESTIMONIALS.length - 1 ? 0 : current + 1));
  }

  return (
    <section className="w-full bg-cream py-16  px-5 pb-10 lg:py-12 lg:pb-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#a8927b] px-6 py-10 shadow-sm sm:px-10">
          <StonesDecoration />

          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 sm:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} className="h-4 w-4 stroke-current">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-4 sm:gap-6">
              <span className="hidden select-none font-serif text-6xl leading-none text-white/25 sm:block">
                &ldquo;
              </span>

              <div className="hidden h-28 w-28 shrink-0 overflow-hidden rounded-full ring-4 ring-white/40 sm:block">
                <AvatarPlaceholder />
              </div>

              <div>
                <div className="mb-4 h-14 w-14 shrink-0 overflow-hidden rounded-full ring-4 ring-white/40 sm:hidden">
                  <AvatarPlaceholder />
                </div>

                <p className="font-serif text-xl leading-snug text-white sm:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-white/80">
                  — {testimonial.name}
                </p>

                <div className="mt-4 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous testimonial"
                    className="mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 sm:hidden"
                  >
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} className="h-3.5 w-3.5 stroke-current">
                      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {TESTIMONIALS.map((item, dotIndex) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setIndex(dotIndex)}
                      aria-label={`Go to testimonial ${dotIndex + 1}`}
                      className={
                        dotIndex === index
                          ? "h-2 w-6 rounded-full bg-white"
                          : "h-2 w-2 rounded-full bg-white/40"
                      }
                    />
                  ))}

                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next testimonial"
                    className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 sm:hidden"
                  >
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} className="h-3.5 w-3.5 stroke-current">
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 sm:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} className="h-4 w-4 stroke-current">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
