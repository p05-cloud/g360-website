"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

/* ──────────────────────────────────────────────
   Animation variants
   ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

/* ══════════════════════════════════════════════
   HOME PAGE
   ══════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ── SECTION 1: HERO ──────────────────── */}
      <HeroSection />

      {/* ── SECTION 1.5: POWER STORM BANNER ──── */}
      <PowerStormBannerSection />

      {/* ── SECTION 2: PRAKASH MORE ──────────── */}
      <PrakashMoreSection />

      {/* ── SECTION 3: STATS ─────────────────── */}
      <StatsSection />

      {/* ── SECTION 4: PRODUCTS PREVIEW ──────── */}
      <ProductsPreviewSection />

      {/* ── SECTION 4.5: STAY FULL / STAY FIT ── */}
      <StayFullStayFitSection />

      {/* ── SECTION 5: CTA ───────────────────── */}
      <CTASection />
    </main>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SECTION 1 — HERO
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-between bg-black text-center">
      {/* Background image with sepia-gold filter */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/swami.jpg"
          alt="Spiritual background"
          fill
          priority
          className="object-cover opacity-30 sepia brightness-75 hue-rotate-[15deg]"
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      {/* ── Top content ── */}
      <div className="relative z-10 flex flex-col items-center pt-24 sm:pt-32 md:pt-36 lg:pt-40">
        {/* G360 Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="leading-none"
          style={{
            fontSize: "clamp(6rem, 20vw, 14rem)",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900,
          }}
        >
          <span className="bg-gradient-to-b from-[#f4e4bc] via-[#d4af37] to-[#b8962e] bg-clip-text text-transparent">
            G
          </span>
          <span className="text-[#00d4ff]">360</span>
        </motion.h1>

        {/* GURU 360 subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-2 text-[#00d4ff] tracking-[0.35em] text-lg sm:text-xl md:text-2xl font-semibold uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          GURU 360
        </motion.p>
      </div>

      {/* ── Spacer to push content apart ── */}
      <div className="flex-1" />

      {/* ── Bottom content ── */}
      <div className="relative z-10 flex flex-col items-center gap-6 pb-8 px-4 sm:px-6">
        {/* Karma box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex items-center gap-3 rounded-xl border border-[#d4af37]/30 bg-black/50 backdrop-blur-md px-6 py-3"
        >
          {/* Spinning dharma wheel */}
          <span
            className="text-[#d4af37] text-3xl animate-[spin_8s_linear_infinite]"
            aria-hidden="true"
          >
            &#9784;
          </span>
          <span
            className="text-[#d4af37] italic text-lg sm:text-xl font-medium"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Believe in Karma
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="max-w-xl text-gray-300 text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Transform your fitness journey with India&apos;s premier fitness
          expert. Strength, discipline, and wisdom combined.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] px-8 py-3 text-sm sm:text-base font-bold text-black uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Discover More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#00d4ff] px-8 py-3 text-sm sm:text-base font-bold text-[#00d4ff] uppercase tracking-wider transition-all hover:bg-[#00d4ff]/10 hover:shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:scale-105"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="mt-4 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="h-6 w-6 text-[#d4af37] animate-[bounceGentle_2s_ease-in-out_infinite]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SECTION 1.5 — POWER STORM BRAND BANNER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function PowerStormBannerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black"
      aria-label="Power Storm — Feel the Power, Be the Storm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image panel — uses the brochure composition verbatim */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="relative aspect-[2/3] w-full lg:aspect-auto lg:min-h-[600px]"
        >
          <Image
            src="/images/hero-power-storm.jpg"
            alt="Power Storm — Feel the Power, Be the Storm"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 lg:to-black/0" />
        </motion.div>

        {/* Copy panel */}
        <div className="relative flex flex-col justify-center gap-6 bg-black px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="text-sm uppercase tracking-[0.35em] text-[#d4af37]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Power Storm Nutrition
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Feel the{" "}
            <span className="bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] bg-clip-text text-transparent">
              Power
            </span>
            <br />
            Be the{" "}
            <span className="bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] bg-clip-text text-transparent">
              Storm
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Power Storm Nutrition is built on pure ingredients, clean formulas,
            and real results. Lab-tested whey, amino acids, and wellness
            products engineered for athletes who demand the best from every
            scoop.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] sm:text-base"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Explore Products
            </Link>
            <Link
              href="/brands"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#00d4ff] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#00d4ff] transition-all hover:scale-105 hover:bg-[#00d4ff]/10 hover:shadow-[0_0_25px_rgba(0,212,255,0.3)] sm:text-base"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              About the Brand
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SECTION 4.5 — STAY FULL / STAY FIT  (Peanut Butter + Oats)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function StayFullStayFitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      name: "Peanut Butter",
      tagline: "Cream & Cookies · Crunchy · 1 KG",
      image: "/images/products/ps-peanut-butter.jpg",
      href: "/products",
    },
    {
      name: "High Protein Oats",
      tagline: "22g Protein · 12.5g Fibre · 1 KG",
      image: "/images/products/ps-protein-oats.jpg",
      href: "/products",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black py-20 sm:py-28"
      aria-label="Stay Full / Stay Fit — Peanut Butter & High Protein Oats"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="mb-12 text-center"
        >
          <span
            className="text-sm uppercase tracking-[0.35em] text-[#d4af37]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Power Storm · Everyday Fuel
          </span>
          <h2
            className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Stay{" "}
            <span className="bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] bg-clip-text text-transparent">
              Full
            </span>{" "}
            / Stay{" "}
            <span className="bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] bg-clip-text text-transparent">
              Fit
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i + 1}
            >
              <Link
                href={item.href}
                className="group relative flex aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-gradient-to-b from-[#0a1628] to-[#050d18] transition-all hover:border-[#d4af37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
              >
                <Image
                  src={item.image}
                  alt={`Power Storm ${item.name}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-24">
                  <h3
                    className="text-2xl font-bold text-white sm:text-3xl"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="mt-1 text-sm text-[#d4af37] sm:text-base"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {item.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SECTION 2 — PRAKASH MORE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function PrakashMoreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const credentials = [
    { label: "GCTA Certified", icon: "🏆" },
    { label: "ISSA Certified", icon: "🎓" },
    { label: "ON Master Trainer", icon: "💪" },
    { label: "Big Flex Athlete", icon: "⚡" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 lg:py-32"
      style={{ background: "linear-gradient(180deg, #050d18 0%, #0a1628 50%, #050d18 100%)" }}
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Monogram mark — stands in for a portrait we don't have yet */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="relative mb-2 flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#d4af37]/60 bg-[#0a1628] shadow-[0_0_40px_rgba(212,175,55,0.25)] sm:h-32 sm:w-32"
          >
            <span
              className="bg-gradient-to-b from-[#f4e4bc] via-[#d4af37] to-[#b8962e] bg-clip-text text-5xl font-black text-transparent sm:text-6xl"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              PM
            </span>
          </motion.div>

          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="text-sm uppercase tracking-[0.25em] text-[#00d4ff]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            The Visionary
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Prakash{" "}
            <span className="bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] bg-clip-text text-transparent">
              More
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            With over two decades of experience in fitness coaching and sports
            nutrition, Prakash More has transformed the lives of thousands of
            athletes and fitness enthusiasts across India. As the founder of
            G360, he brings a holistic approach to fitness that combines
            modern science with timeless discipline.
          </motion.p>

          {/* Credentials grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={4}
            className="mt-4 grid w-full max-w-3xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          >
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex items-center justify-center gap-3 rounded-xl border border-[#d4af37]/20 bg-[#0f1d2e]/70 px-4 py-3 backdrop-blur-sm transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              >
                <span className="text-xl" aria-hidden="true">
                  {cred.icon}
                </span>
                <span
                  className="text-sm font-semibold text-white sm:text-base"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {cred.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Learn More button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={5}
            className="mt-4"
          >
              <Link
                href="/about"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] px-8 py-3 text-sm sm:text-base font-bold text-black uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Learn More
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SECTION 3 — STATS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "1000+", label: "Athletes Trained" },
    { value: "5+", label: "Brand Partners" },
    { value: "\u221E", label: "Dedication" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0f1d2e 40%, #142438 70%, #0a1628 100%)",
      }}
    >
      {/* Subtle top/bottom border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
            >
              <AnimatedCounter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SECTION 4 — PRODUCTS PREVIEW
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ProductsPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const products = [
    {
      name: "Isolate Whey",
      image: "/images/products/isolate-whey-new.jpg",
    },
    {
      name: "Nitro Whey",
      image: "/images/products/nitro-whey-new.jpg",
    },
    {
      name: "Whey Diet",
      image: "/images/products/whey-diet-new.jpg",
    },
    {
      name: "Whey Blend",
      image: "/images/products/whey-blend-new.jpg",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 lg:py-32"
      style={{ background: "#050d18" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="text-sm uppercase tracking-[0.25em] text-[#00d4ff]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Power Storm Nutrition
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Premium{" "}
            <span className="bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] bg-clip-text text-transparent">
              Products
            </span>
          </motion.h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i + 2}
              className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/10 bg-[#0f1d2e]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2.5 hover:border-[#00d4ff]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d18] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
              <div className="relative px-4 py-4 text-center">
                <h3
                  className="text-base sm:text-lg font-bold text-white"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={6}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#d4af37] px-8 py-3 text-sm sm:text-base font-bold text-[#d4af37] uppercase tracking-wider transition-all hover:bg-[#d4af37]/10 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            View All Products
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SECTION 5 — CTA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050d18 0%, #0a1628 40%, #0f1d2e 60%, #050d18 100%)",
      }}
    >
      {/* Decorative glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#d4af37]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Ready to Start Your{" "}
          <span className="bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] bg-clip-text text-transparent">
            Journey
          </span>
          ?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
          className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Whether you are a beginner looking to build a foundation or an
          experienced athlete aiming for the next level, G360 has the expertise,
          products, and community to help you achieve your fitness goals.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] px-8 py-3.5 text-sm sm:text-base font-bold text-black uppercase tracking-wider transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Contact Us
          </Link>
          <Link
            href="/brands"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#00d4ff] px-8 py-3.5 text-sm sm:text-base font-bold text-[#00d4ff] uppercase tracking-wider transition-all hover:bg-[#00d4ff]/10 hover:shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:scale-105"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Explore Brands
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
