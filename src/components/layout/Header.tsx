"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type DropdownLink = { label: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownLink[] };

const NAV_ITEMS: NavItem[] = [
  {
    label: "For Institutions",
    href: "/for-institutions",
    dropdown: [
      { label: "Schools", href: "/for-institutions/schools" },
      { label: "Colleges & Universities", href: "/for-institutions/colleges-universities" },
      { label: "Coaching Institutes", href: "/for-institutions/coaching-institutes" },
      { label: "Corporates", href: "/for-institutions/corporates" },
      { label: "Preschools", href: "/for-institutions/preschools" },
    ],
  },
  { label: "For Individuals", href: "/for-individuals" },
  { label: "Our Ecosystem", href: "/ecosystem" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About Mind A Lot", href: "/about" },
      { label: "Founder", href: "/about/founder" },
      { label: "Our Counsellors", href: "/about/counsellors" },
      { label: "Impact", href: "/about/impact" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Blogs", href: "/blog" },
      { label: "FAQs", href: "/contact#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 6"
      fill="none"
      strokeWidth={1.5}
      className={cn("h-1.5 w-2.5 stroke-current transition-transform duration-300", className)}
      aria-hidden="true"
    >
      <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} className="h-6 w-6 stroke-current" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GetInTouchCta({ className }: { className?: string }) {
  return (
    <Button href="/contact" variant="primary" className={cn("font-bold", className)}>
      Get in Touch
      <svg viewBox="0 0 16 16" fill="none" strokeWidth={1.5} className="h-4 w-4 stroke-white" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Button>
  );
}

function isItemActive(pathname: string, item: NavItem) {
  if (pathname === item.href) return true;
  if (item.dropdown?.some((d) => pathname === d.href)) return true;
  return item.href !== "/" && pathname.startsWith(`${item.href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-brand/10 bg-cream px-5 py-3 transition-shadow lg:px-16 ${
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
            className="h-12 w-auto lg:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(pathname, item);
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 font-sans text-sm transition-colors duration-200",
                    active ? "text-[#AC9B8A]" : "text-text-dark hover:text-[#AC9B8A]"
                  )}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDownIcon className="group-hover:rotate-180" />
                  )}
                </Link>

                {item.dropdown && (
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-2xl bg-[#FFFDEB]/95 p-5 shadow-xl backdrop-blur-md ring-1 ring-brand/10">
                      <ul className="flex flex-col gap-1">
                        {item.dropdown.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className={cn(
                                "block rounded-xl px-3 py-2.5 text-sm transition-colors duration-200 hover:bg-icon-bg/50 hover:text-[#AC9B8A]",
                                pathname === sub.href ? "text-[#AC9B8A]" : "text-text-dark"
                              )}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <GetInTouchCta />
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
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

      {/* Mobile full-screen slide-in menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-cream transition-transform duration-300 lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-brand/10 px-5 py-3">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/images/Mind_a_lot_Logo-new.png"
              alt="Mind A Lot"
              width={266}
              height={153}
              className="h-12 w-auto"
            />
          </Link>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
            className="text-brand"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="flex flex-col divide-y divide-brand/10">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="py-1">
                {item.dropdown ? (
                  <details className="group/mobile">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-semibold text-text-dark">
                      {item.label}
                      <ChevronDownIcon className="h-2.5 w-3.5 group-open/mobile:rotate-180" />
                    </summary>
                    <div className="flex flex-col gap-1 pb-3 pl-3">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="rounded-xl px-3 py-2.5 text-sm text-text-muted transition-colors duration-200 hover:bg-icon-bg/50 hover:text-[#AC9B8A]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-base font-semibold text-text-dark transition-colors duration-200 hover:text-[#AC9B8A]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-brand/10 px-5 py-4">
          <GetInTouchCta className="w-full" />
        </div>
      </div>
    </header>
  );
}
