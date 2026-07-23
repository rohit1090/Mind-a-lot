"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "For Organizations", href: "/for-organizations" },
  { label: "For Institutions", href: "/for-institutions" },
  { label: "For Insurers", href: "/for-insurers" },
  { label: "About Us", href: "/about" },
];

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 10 6"
      fill="none"
      strokeWidth={1.5}
      className="h-1.5 w-2.5 stroke-current"
      aria-hidden="true"
    >
      <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EnterpriseDemoCta({ className }: { className?: string }) {
  return (
    <Button href="/contact" variant="primary" className={cn("font-bold", className)}>
      Book an Enterprise Demo
      <svg
        viewBox="0 0 16 16"
        fill="none"
        strokeWidth={1.5}
        className="h-4 w-4 stroke-white"
        aria-hidden="true"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-brand/10 bg-cream px-5 py-5 transition-shadow lg:px-16 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/Mind_a_lot_Logo-new.png"
            alt="Mind A Lot"
            width={266}
            height={153}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 font-sans text-sm text-text-dark transition-colors hover:text-brand"
            >
              {link.label}
              <ChevronDownIcon />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <EnterpriseDemoCta />
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden"
          >
            <svg
              className="h-6 w-6 text-brand"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="w-full bg-cream px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1 font-sans text-sm text-text-dark transition-colors hover:text-brand"
              >
                {link.label}
                <ChevronDownIcon />
              </Link>
            ))}
            <EnterpriseDemoCta className="mt-2 w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}
