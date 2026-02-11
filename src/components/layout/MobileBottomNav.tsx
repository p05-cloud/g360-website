"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Package, Trophy, MessageCircle } from "lucide-react";

const bottomNavItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/products", label: "Products", icon: Package },
  { href: "/warriors", label: "Warriors", icon: Trophy },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Glass morphism background */}
      <div className="border-t border-white/10 bg-[#050d18]/90 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-4">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 py-2.5 transition-colors duration-200 ${
                  active ? "text-[#d4af37]" : "text-gray-500"
                }`}
              >
                <div className="relative">
                  <Icon
                    className={`h-5 w-5 transition-all duration-200 ${
                      active ? "scale-110" : ""
                    }`}
                    strokeWidth={active ? 2.5 : 1.5}
                  />
                  {/* Active dot indicator */}
                  {active && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#d4af37]" />
                  )}
                </div>
                <span
                  className={`text-[10px] font-medium tracking-wide ${
                    active ? "text-[#d4af37]" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
