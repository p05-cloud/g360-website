"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/warriors", label: "Warriors" },
  { href: "/brands", label: "Brands" },
  { href: "/contact", label: "Contact" },
];

function G360Logo() {
  return (
    <span className="font-orbitron text-2xl font-black tracking-wider select-none">
      <span className="bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#d4af37] bg-clip-text text-transparent">
        G
      </span>
      <span className="bg-gradient-to-r from-[#00d4ff] via-[#00aaff] to-[#00d4ff] bg-clip-text text-transparent">
        360
      </span>
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050d18]/98 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[#d4af37]/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <G360Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[#d4af37]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {/* Active / hover underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f5d76e] transition-all duration-300 ${
                    isActive(link.href) ? "w-2/3" : "w-0 group-hover:w-2/3"
                  }`}
                />
                {/* Hover underline for non-active links */}
                {!isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#d4af37] to-[#f5d76e] transition-all duration-300 hover:w-2/3 peer" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition-colors hover:text-[#d4af37]"
                  aria-label="Toggle navigation menu"
                >
                  <span
                    className={`absolute transition-all duration-300 ${
                      mobileOpen
                        ? "rotate-90 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    }`}
                  >
                    <Menu className="h-6 w-6" />
                  </span>
                  <span
                    className={`absolute transition-all duration-300 ${
                      mobileOpen
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-0 opacity-0"
                    }`}
                  >
                    <X className="h-6 w-6" />
                  </span>
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                showCloseButton={false}
                className="w-[300px] border-l border-[#d4af37]/20 bg-[#050d18]/98 backdrop-blur-xl p-0"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex h-full flex-col">
                  {/* Mobile sheet header */}
                  <div className="flex items-center justify-between border-b border-[#d4af37]/10 px-6 py-5">
                    <G360Logo />
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-[#d4af37]"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Mobile nav links */}
                  <div className="flex flex-1 flex-col gap-1 px-4 py-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center rounded-lg px-4 py-3 text-base font-medium tracking-wide uppercase transition-all duration-200 ${
                          isActive(link.href)
                            ? "bg-[#d4af37]/10 text-[#d4af37] border-l-2 border-[#d4af37]"
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile sheet footer */}
                  <div className="border-t border-[#d4af37]/10 px-6 py-4">
                    <p className="text-xs text-gray-500 text-center">
                      Believe in Karma
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
