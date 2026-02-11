"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ============================================
// Animation Variants
// ============================================

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// ============================================
// Animated Counter Component
// ============================================

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <motion.span
      className="text-gradient-gold font-display text-4xl font-black sm:text-5xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {value}
        {suffix}
      </motion.span>
    </motion.span>
  );
}

// ============================================
// Credential Data
// ============================================

const credentials = [
  {
    icon: "\uD83C\uDF93",
    title: "G.C.T.A Certified - Australia",
    description:
      "Certified by the Global Council for Training & Assessment, Australia. Recognized for excellence in personal training and fitness coaching methodology.",
    highlight: false,
  },
  {
    icon: "\uD83C\uDF93",
    title: "I.S.S.A Certified - USA",
    description:
      "International Sports Sciences Association certified fitness professional. Accredited with world-class knowledge in exercise science and nutrition.",
    highlight: false,
  },
  {
    icon: "\uD83C\uDFC6",
    title: "India's First",
    subtitle: "Optimum Nutrition Master Trainer",
    description:
      "The first-ever fitness professional in India to be appointed as Optimum Nutrition Master Trainer. A landmark achievement in the Indian fitness industry.",
    highlight: true,
  },
  {
    icon: "\uD83D\uDCAA",
    title: "Sponsored Athlete",
    subtitle: "Evolution Sports Nutrition",
    description:
      "Officially sponsored athlete by Evolution Sports Nutrition, representing the brand as a fitness icon and performance ambassador.",
    highlight: false,
  },
  {
    icon: "\uD83C\uDF1F",
    title: "Big Flex Athlete",
    subtitle: "Brand Ambassador",
    description:
      "Serving as Brand Ambassador for Big Flex, one of India's leading sports nutrition brands. Trusted face of quality and performance.",
    highlight: false,
  },
  {
    icon: "\uD83D\uDCE2",
    title: "Brand Expert",
    subtitle: "Power Storm Nutrition India",
    description:
      "Brand Expert for Power Storm Nutrition India, contributing to product development and athlete education across the country.",
    highlight: false,
  },
];

// ============================================
// Stats Data
// ============================================

const stats = [
  { value: 20, suffix: "+", label: "Years" },
  { value: 2, suffix: "", label: "International Certifications" },
  { value: 5, suffix: "+", label: "Brand Partnerships" },
  { value: 1000, suffix: "+", label: "Lives Transformed" },
];

// ============================================
// Team Data
// ============================================

const teamMembers = [
  {
    name: "Prakash More",
    role: "Founder & Head Coach",
    image: "/images/hero/prakash-more.png",
    isFounder: true,
  },
  { name: "Coming Soon", role: "Team Member", image: null, isFounder: false },
  { name: "Coming Soon", role: "Team Member", image: null, isFounder: false },
  { name: "Coming Soon", role: "Team Member", image: null, isFounder: false },
];

// ============================================
// Page Component
// ============================================

export default function AboutPage() {
  return (
    <div className="bg-[#050d18]">
      {/* ==================== PAGE HERO ==================== */}
      <section className="relative overflow-hidden pt-40 pb-20">
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d18] via-[#0a1628] to-[#050d18]" />

        {/* Decorative radials */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[#d4af37]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-[#00d4ff]/5 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About{" "}
            <span className="text-gradient-gold">G360</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The complete fitness philosophy of Prakash More
          </motion.p>
        </div>
      </section>

      {/* ==================== ABOUT MAIN SECTION ==================== */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Image with decorative border */}
            <motion.div
              className="relative mx-auto w-full max-w-md lg:max-w-none"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                {/* Gold decorative border offset */}
                <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border-2 border-[#d4af37]/40" />

                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl bg-[#0a1628]">
                  <Image
                    src="/images/hero/prakash-more.png"
                    alt="Prakash More - Founder of G360"
                    width={600}
                    height={700}
                    className="h-auto w-full object-cover"
                    priority
                  />

                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050d18] to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
                The Visionary
              </span>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Prakash More
              </h2>

              {/* Karma tagline */}
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#d4af37]">{"\u2638"}</span>
                <span className="font-serif-accent text-lg italic text-[#d4af37]">
                  Believe in Karma
                </span>
              </div>

              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                With over 20 years of relentless dedication to fitness, Prakash More has
                established himself as one of India&apos;s most respected fitness coaches and
                sports nutrition experts. His journey from a passionate fitness enthusiast to
                an internationally certified trainer is a testament to the power of
                discipline, knowledge, and an unwavering belief in karma.
              </p>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                G360 &mdash; Guru 360 &mdash; represents the complete circle of fitness
                excellence. It is not just a brand; it is a philosophy that encompasses
                training, nutrition, mindset, and lifestyle. Through G360, Prakash More
                empowers athletes and fitness enthusiasts to unlock their full potential and
                transform their lives from the inside out.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CREDENTIALS SECTION ==================== */}
      <section className="relative py-20 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d18] via-[#0a1628] to-[#050d18]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="mx-auto mb-16 max-w-2xl text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
              Credentials
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Certifications &amp; Achievements
            </h2>
          </motion.div>

          {/* Credential cards grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group relative overflow-hidden rounded-xl border p-6 transition-colors duration-300 ${
                  cred.highlight
                    ? "border-[#d4af37]/60 bg-gradient-to-br from-[#0f1d2e] to-[#142438] shadow-lg shadow-[#d4af37]/10"
                    : "border-[#d4af37]/10 bg-[#0f1d2e] hover:border-[#00d4ff]/40"
                }`}
              >
                {/* Highlight badge */}
                {cred.highlight && (
                  <div className="absolute top-0 right-0 rounded-bl-lg bg-gradient-to-r from-[#d4af37] to-[#e8c84a] px-3 py-1">
                    <span className="text-xs font-bold text-[#050d18]">HIGHLIGHT</span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4 text-4xl">{cred.icon}</div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white">
                  {cred.title}
                </h3>
                {cred.subtitle && (
                  <p className="mt-1 text-sm font-semibold text-[#d4af37]">
                    {cred.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {cred.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== EXPERIENCE STATS ==================== */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="mx-auto mb-16 max-w-2xl text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
              Journey
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              20+ Years of Excellence
            </h2>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="group flex flex-col items-center gap-3 rounded-xl border border-[#d4af37]/15 bg-[#0f1d2e] p-6 text-center transition-all duration-300 hover:border-[#d4af37]/40 hover:shadow-lg hover:shadow-[#d4af37]/5 sm:p-8"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span className="text-sm font-medium text-gray-400 sm:text-base">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== TEAM SECTION ==================== */}
      <section className="relative py-20 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d18] via-[#0a1628] to-[#050d18]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="mx-auto mb-6 max-w-2xl text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
              The Team
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              G360 Family
            </h2>
          </motion.div>
          <motion.p
            className="mx-auto mb-14 max-w-2xl text-center text-gray-400"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Behind every great movement is a dedicated team. The G360 family is growing,
            and together we are building a community of warriors committed to excellence in
            fitness and life.
          </motion.p>

          {/* Team grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={`${member.name}-${i}`}
                variants={fadeInUp}
                custom={i}
                className={`group flex flex-col items-center overflow-hidden rounded-xl p-6 text-center transition-all duration-300 ${
                  member.isFounder
                    ? "border-2 border-[#d4af37]/50 bg-gradient-to-b from-[#0f1d2e] to-[#142438] shadow-lg shadow-[#d4af37]/10"
                    : "border border-dashed border-gray-600/50 bg-[#0f1d2e]/50"
                }`}
              >
                {member.image ? (
                  <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-[#d4af37]/40">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-gray-600/50 bg-[#0a1628]">
                    <span className="text-4xl text-gray-600">{"\uD83D\uDC64"}</span>
                  </div>
                )}

                <h3
                  className={`font-display text-lg font-bold ${
                    member.isFounder ? "text-[#d4af37]" : "text-gray-500"
                  }`}
                >
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Join CTA Box */}
          <motion.div
            className="mx-auto mt-16 max-w-2xl rounded-2xl border border-[#d4af37]/20 bg-gradient-to-r from-[#0f1d2e] to-[#142438] p-8 text-center sm:p-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-white">
              Want to Join the G360 Family?
            </h3>
            <p className="mt-3 text-gray-400">
              We are always looking for passionate individuals who share our vision for
              fitness excellence and community building.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#e8c84a] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#050d18] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/25"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            className="font-display text-3xl font-bold text-white sm:text-4xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Start Your Journey with{" "}
            <span className="text-gradient-gold">G360</span>?
          </motion.h2>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#e8c84a] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#050d18] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/25"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg border border-[#00d4ff]/40 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#00d4ff] transition-all duration-300 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:shadow-lg hover:shadow-[#00d4ff]/10"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
