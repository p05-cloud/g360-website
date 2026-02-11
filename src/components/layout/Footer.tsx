import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/warriors", label: "Warriors" },
  { href: "/brands", label: "Brands" },
  { href: "/contact", label: "Contact" },
];

function FooterLogo() {
  return (
    <span className="font-orbitron text-3xl font-black tracking-wider select-none">
      <span className="bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#d4af37] bg-clip-text text-transparent">
        G
      </span>
      <span className="bg-gradient-to-r from-[#00d4ff] via-[#00aaff] to-[#00d4ff] bg-clip-text text-transparent">
        360
      </span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[#d4af37]/30 bg-[#050d18]">
      {/* Gold gradient top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <FooterLogo />
            <p className="text-sm text-gray-400 text-center md:text-left leading-relaxed max-w-xs">
              Fueling warriors with premium nutrition and supplements. Push your
              limits, break your boundaries.
            </p>
            <p className="text-sm font-medium italic text-[#d4af37]/80">
              &ldquo;Believe in Karma&rdquo;
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <nav className="flex flex-col items-center md:items-start gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#d4af37]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact CTA */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-400 text-center md:text-left leading-relaxed">
              Have questions or want to partner with us? We&apos;d love to hear from
              you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f5d76e] px-6 py-2.5 text-sm font-semibold text-[#050d18] transition-all duration-200 hover:shadow-lg hover:shadow-[#d4af37]/25 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-gray-500">
            &copy; 2024 G360 - Guru 360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
