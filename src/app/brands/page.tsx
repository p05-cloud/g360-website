"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";

/* ─── Animation variants ────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

/* ─── Data ──────────────────────────────────────────────── */

const brandValues = [
  { label: "Premium Quality", text: "Every product tested and certified" },
  { label: "Proven Results", text: "Trusted by 1000+ athletes" },
  { label: "Expert Approved", text: "Backed by 20+ years of experience" },
];

const highlightStats = [
  { value: "20+", label: "Products" },
  { value: "100%", label: "Quality Tested" },
  { value: "1000+", label: "Happy Athletes" },
];

const productCategories = [
  {
    icon: "\uD83E\uDD64",
    title: "Protein",
    description:
      "Whey Isolate, Blend, Nitro Whey, Diet Whey and Mass Gainers for every fitness goal.",
  },
  {
    icon: "\u26A1",
    title: "Performance",
    description:
      "Pre-Workout, Creatine and Recharge formulas to maximise training intensity.",
  },
  {
    icon: "\uD83D\uDC8A",
    title: "Amino Acids",
    description:
      "EAA, BCAA, L-Carnitine and L-Glutamine for optimal recovery and endurance.",
  },
  {
    icon: "\u2764\uFE0F",
    title: "Health & Wellness",
    description:
      "Fat Burner, Omega-3 and Multivitamins to support your overall wellbeing.",
  },
];

const comingSoonBrands = [
  {
    icon: "\uD83D\uDC55",
    name: "G360 Apparel",
    description: "Performance wear designed for serious athletes.",
    tags: ["Gym Wear", "Athleisure", "Accessories"],
  },
  {
    icon: "\uD83C\uDFCB\uFE0F",
    name: "Gym Accessories",
    description: "Premium training accessories and equipment.",
    tags: ["Belts", "Gloves", "Straps", "Shakers"],
  },
  {
    icon: "\uD83E\uDD1D",
    name: "Partner Brands",
    description: "Curated brands that meet G360 quality standards.",
    tags: ["Nutrition", "Recovery", "Wellness"],
  },
];

const partnershipBenefits = [
  "Expert Endorsement",
  "Targeted Reach",
  "Quality Association",
];

/* ─── Page Component ────────────────────────────────────── */

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Our Brands"
        highlight="Brands"
        subtitle="Curated brands that fuel champions"
      />

      {/* ── Brand Philosophy ────────────────────────────── */}
      <section className="bg-[#050d18] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-display text-3xl font-bold tracking-wide text-white sm:text-4xl">
              Quality Without{" "}
              <span className="text-gradient-gold">Compromise</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              At G360, every brand and product we endorse goes through rigorous
              quality checks. Prakash More personally ensures that only the best
              reaches our community of athletes, fitness enthusiasts and
              health-conscious individuals.
            </p>
          </motion.div>

          {/* Value items */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {brandValues.map((v, i) => (
              <motion.div
                key={v.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center gap-2 rounded-xl border border-[#d4af37]/10 bg-[#0f1d2e] p-6 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/10 text-lg font-bold text-[#d4af37]">
                  &#10003;
                </span>
                <h3 className="font-display text-sm font-bold tracking-wide text-white">
                  {v.label}
                </h3>
                <p className="text-xs text-gray-400">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Brand: Power Storm Nutrition ────────── */}
      <section className="bg-[#0a1628] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            {/* Banner image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#d4af37]/10 bg-[#0f1d2e]"
            >
              <Image
                src="/images/brands/power-storm-banner.png"
                alt="Power Storm Nutrition"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <span className="w-fit rounded-full bg-[#d4af37]/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                Featured Brand
              </span>
              <h2 className="font-display text-3xl font-bold tracking-wide text-white sm:text-4xl">
                Power Storm{" "}
                <span className="text-gradient-gold">Nutrition</span>
              </h2>
              <p className="leading-relaxed text-gray-400">
                Power Storm Nutrition is the flagship supplement brand endorsed
                by G360. Formulated with pharmaceutical-grade ingredients and
                tested for purity, every product is designed to help athletes
                push past their limits.
              </p>
              <p className="leading-relaxed text-gray-400">
                From premium whey proteins to performance-boosting pre-workouts,
                Power Storm covers the full spectrum of sports nutrition. Each
                batch is lab-verified for quality and potency.
              </p>

              {/* Highlight stats */}
              <div className="mt-2 grid grid-cols-3 gap-4">
                {highlightStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex flex-col items-center rounded-xl border border-[#d4af37]/10 bg-[#0f1d2e] p-4 text-center"
                  >
                    <span className="font-display text-2xl font-bold text-[#d4af37]">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-xs text-gray-400">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/products"
                className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f5d76e] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#050d18] transition-all duration-200 hover:shadow-lg hover:shadow-[#d4af37]/25 hover:scale-105"
              >
                Explore Products
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Product Categories ──────────────────────────── */}
      <section className="bg-[#050d18] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-display text-3xl font-bold tracking-wide text-white sm:text-4xl"
          >
            Product <span className="text-gradient-gold">Categories</span>
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group flex flex-col gap-4 rounded-2xl border border-[#d4af37]/10 bg-[#0f1d2e] p-6 transition-all duration-300 hover:border-[#d4af37]/30 hover:shadow-lg hover:shadow-[#d4af37]/5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {cat.icon}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {cat.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {cat.description}
                </p>
                <span className="mt-auto w-fit rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  Available Now
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coming Soon Brands ──────────────────────────── */}
      <section className="bg-[#0a1628] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-display text-3xl font-bold tracking-wide text-white sm:text-4xl"
          >
            Coming <span className="text-gradient-gold">Soon</span>
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoonBrands.map((brand, i) => (
              <motion.div
                key={brand.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-[#d4af37]/20 bg-[#0f1d2e]/50 p-6"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/5 text-2xl">
                  {brand.icon}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {brand.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {brand.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {brand.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#d4af37]/10 px-3 py-1 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-auto w-fit rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold text-[#d4af37]">
                  Coming Soon
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership CTA ─────────────────────────────── */}
      <section className="bg-[#050d18] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl rounded-2xl border border-[#d4af37]/20 bg-gradient-to-b from-[#0f1d2e] to-[#0a1628] p-8 text-center md:p-12"
          >
            <h2 className="font-display text-2xl font-bold tracking-wide text-white sm:text-3xl">
              Interested in Partnering with{" "}
              <span className="text-gradient-gold">G360</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Join our ecosystem and reach a dedicated community of fitness
              enthusiasts and professional athletes.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {partnershipBenefits.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-4 py-2 text-sm text-gray-300"
                >
                  <span className="text-[#d4af37]">&#10003;</span>
                  {b}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f5d76e] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#050d18] transition-all duration-200 hover:shadow-lg hover:shadow-[#d4af37]/25 hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
