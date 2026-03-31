"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
// Stats Data
// ============================================

const teamStats = [
  { value: "18+", label: "Team Members" },
  { value: "6+", label: "Zones Covered" },
  { value: "20+", label: "Years Experience" },
  { value: "\u221E", label: "Belief in Karma" },
];

// ============================================
// Athlete Types & Data
// ============================================

type AthleteCategory = "all" | "ibbf" | "coach" | "zonal-head" | "fitness-model" | "athlete";

interface Athlete {
  id: string;
  name: string;
  photo: string;
  roles: string[];
  specializations: string[];
  bio: string;
  zone?: string;
  category: AthleteCategory[];
}

const filterCategories: { key: AthleteCategory; label: string }[] = [
  { key: "all", label: "All Members" },
  { key: "ibbf", label: "IBBF Athletes" },
  { key: "coach", label: "Coaches" },
  { key: "zonal-head", label: "Zonal Heads" },
  { key: "fitness-model", label: "Fitness Models" },
  { key: "athlete", label: "Athletes" },
];

const athletes: Athlete[] = [
  // --- IBBF Athletes & Key Leaders ---
  {
    id: "pratik-mohite",
    name: "Pratik Mohite",
    photo: "/images/team/pratik-mohite.jpeg",
    roles: ["IBBF Athlete", "Divyang Champion"],
    specializations: ["Coach", "Diet Consultant"],
    bio: "IBBF-recognized Divyang athlete who proves that true strength knows no boundaries. As a certified coach and diet consultant, Pratik inspires the entire G360 family with unmatched discipline and determination.",
    category: ["all", "ibbf", "coach", "athlete"],
  },
  {
    id: "john-sale",
    name: "John Sale",
    photo: "/images/team/john-sale.jpeg",
    roles: ["IBBF Athlete", "Coach"],
    specializations: [],
    bio: "IBBF-level competitive athlete and experienced coach with deep knowledge of competition prep and training science. A cornerstone of the G360 coaching team.",
    category: ["all", "ibbf", "coach", "athlete"],
  },
  {
    id: "pushpak-patil",
    name: "Pushpak Patil",
    photo: "/images/team/pushpak-patil.jpeg",
    roles: ["MMA Fighter", "Influencer"],
    specializations: ["Tech & Digital", "Athlete"],
    bio: "MMA background fighter turned fitness influencer with 14+ years of training experience. The tech brain behind the G360 digital presence, Pushpak bridges the worlds of combat sports, fitness, and technology.",
    category: ["all", "fitness-model", "athlete"],
  },
  // --- Zonal Heads ---
  {
    id: "pratik-lokhande",
    name: "Pratik Lokhande",
    photo: "/images/team/pratik-lokhande.jpeg",
    roles: ["Influencer", "Transformation Specialist"],
    specializations: [],
    bio: "Social media influencer and transformation specialist driving fitness culture in Khopoli. As Zonal Head, Pratik leads by example and builds champions in his community.",
    zone: "Khopoli",
    category: ["all", "zonal-head", "coach"],
  },
  {
    id: "sandeep-rane",
    name: "Sandeep Rane",
    photo: "/images/team/sandeep-rane.jpeg",
    roles: ["Fitness Expert"],
    specializations: [],
    bio: "Seasoned fitness expert leading the G360 movement across Kalyan to Karjat. As Zonal Head, Sandeep brings years of practical coaching experience to every athlete he mentors.",
    zone: "Kalyan to Karjat",
    category: ["all", "zonal-head", "coach"],
  },
  {
    id: "vinit-kotian",
    name: "Vinit Kotian",
    photo: "/images/team/vinit-kotian.jpeg",
    roles: ["Fitness Coach", "Nutrition Consultant"],
    specializations: [],
    bio: "Certified fitness coach and nutrition consultant overseeing the Thane region. Vinit combines science-backed training programs with personalised diet plans to deliver real results.",
    zone: "Thane Region",
    category: ["all", "zonal-head", "coach"],
  },
  {
    id: "shrikant-sontakke",
    name: "Shrikant Sontakke",
    photo: "/images/team/shrikant-sontakke.jpeg",
    roles: ["Senior Fitness Consultant"],
    specializations: ["Nutrition Consultant"],
    bio: "Senior fitness and nutrition consultant heading the G360 operations in Solapur. Shrikant brings deep expertise in personalised coaching and has guided numerous successful transformations.",
    zone: "Solapur",
    category: ["all", "zonal-head", "coach"],
  },
  {
    id: "wasim-pathan",
    name: "Wasim Pathan",
    photo: "/images/team/wasim-pathan.jpeg",
    roles: ["Fitness Coach", "Transformation Specialist"],
    specializations: [],
    bio: "Fitness coach and transformation specialist leading the G360 presence in Akkalkot. Wasim specialises in body recomposition and has helped countless clients achieve their dream physique.",
    zone: "Akkalkot",
    category: ["all", "zonal-head", "coach"],
  },
  {
    id: "inzamam-inamdar",
    name: "Inzamam Inamdar",
    photo: "/images/team/inzamam-inamdar.jpeg",
    roles: ["Bodybuilder", "Certified Personal Trainer"],
    specializations: ["Nutrition Coach"],
    bio: "Dedicated bodybuilder, certified personal trainer, and nutrition coach from Solapur, Maharashtra. Recognized under the G20 Fit India Pledge, Inzamam brings professional expertise, discipline, and passion to transforming lives through fitness. His focus is on building strength, improving physique, and guiding individuals with the right nutrition and training strategies.",
    zone: "Solapur",
    category: ["all", "coach", "athlete"],
  },
  // --- Senior Coaches ---
  {
    id: "dinesh-rokde",
    name: "Dinesh Rokde",
    photo: "/images/team/dinesh-rokde.jpeg",
    roles: ["Senior Fitness Coach"],
    specializations: [],
    bio: "Senior fitness coach with years of experience in strength training and body conditioning. Dinesh is known for his hands-on coaching style and ability to push athletes to their peak.",
    category: ["all", "coach"],
  },
  {
    id: "sukoon-halanley",
    name: "Sukoon Halanley",
    photo: "/images/team/sukoon-halanley.jpeg",
    roles: ["Senior Fitness Coach"],
    specializations: ["Nutrition Consultant"],
    bio: "Senior fitness coach and nutrition consultant who takes a holistic approach to athlete development. His expertise in both training and diet makes him a trusted guide for transformations.",
    category: ["all", "coach"],
  },
  {
    id: "shekhar-patharikar",
    name: "Shekhar Patharikar",
    photo: "/images/team/shekhar-patharikar.jpeg",
    roles: ["Senior Fitness Coach"],
    specializations: ["Nutrition Consultant"],
    bio: "Experienced senior fitness coach and nutrition consultant dedicated to holistic athlete development. His balanced approach to training and diet helps clients achieve sustainable, long-term results.",
    category: ["all", "coach"],
  },
  // --- Fitness Models & Athletes ---
  {
    id: "yash-bhutade",
    name: "Yash Bhutade",
    photo: "/images/team/yash-bhutade.jpeg",
    roles: ["Fitness Model"],
    specializations: ["Marketing Expert"],
    bio: "Fitness model and marketing expert bringing the Power Storm brand to life. His aesthetic physique and creative vision help connect athletes with the G360 mission.",
    category: ["all", "fitness-model"],
  },
  {
    id: "subhan-naik",
    name: "Subhan Naik",
    photo: "/images/team/subhan-naik.jpeg",
    roles: ["Athlete", "Fitness Model"],
    specializations: [],
    bio: "Competitive athlete and fitness model with an impressive physique that represents the G360 standard. His dedication to training and discipline inspires the next generation of warriors.",
    category: ["all", "fitness-model", "athlete"],
  },
  {
    id: "mahesh-irwadkar",
    name: "Mahesh Irwadkar",
    photo: "/images/team/mahesh-irwadkar.jpeg",
    roles: ["Powerlifter", "Athlete"],
    specializations: [],
    bio: "Competitive powerlifter and dedicated athlete who leads by raw strength. His commitment to heavy lifting and disciplined training embodies the warrior ethos of G360.",
    category: ["all", "athlete"],
  },
  {
    id: "satish-kyar",
    name: "Satish Kyar",
    photo: "/images/team/satish-kyar.jpeg",
    roles: ["Athlete"],
    specializations: [],
    bio: "Dedicated G360 athlete committed to consistent growth and peak performance. Satish embodies the warrior mindset through daily discipline and relentless hard work.",
    category: ["all", "athlete"],
  },
  {
    id: "najim-maniyar",
    name: "Najim Maniyar",
    photo: "/images/team/najim-maniyar.jpeg",
    roles: ["Athlete"],
    specializations: [],
    bio: "Passionate athlete focused on building strength and pushing physical limits. Najim represents the G360 warrior spirit with his consistent training and determination to excel.",
    category: ["all", "athlete"],
  },
  {
    id: "sumeet-gadhve",
    name: "Sumeet Gadhve",
    photo: "/images/team/sumeet-gadhve.jpeg",
    roles: ["Athlete", "Coach"],
    specializations: ["Strength Training"],
    bio: "Competitive athlete and dedicated coach who brings intensity and precision to every training session. Sumeet combines hands-on coaching expertise with his own athletic journey to help clients unlock their full potential through structured strength programs.",
    category: ["all", "coach", "athlete"],
  },
];

// ============================================
// Athlete Card Component
// ============================================

function AthleteCard({ athlete }: { athlete: Athlete }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#d4af37]/10 bg-[#0f1d2e] transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-lg hover:shadow-[#d4af37]/10"
    >
      {/* Gold top-border sweep on hover */}
      <div className="absolute top-0 left-0 z-10 h-0.5 w-0 bg-gradient-to-r from-[#b8962e] via-[#d4af37] to-[#e8c84a] transition-all duration-500 group-hover:w-full" />

      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#0a1628]">
        <Image
          src={athlete.photo}
          alt={athlete.name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0f1d2e] via-[#0f1d2e]/60 to-transparent" />

        {/* Zone badge on photo */}
        {athlete.zone && (
          <div className="absolute bottom-3 right-3 rounded-full border border-[#00d4ff]/30 bg-[#050d18]/80 px-3 py-1 backdrop-blur-sm">
            <span className="text-xs font-medium text-[#00d4ff]">
              Zonal Head &mdash; {athlete.zone}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5 p-5">
        <h3 className="font-display text-lg font-bold tracking-wide text-white">
          {athlete.name}
        </h3>

        {/* Bio */}
        <p className="text-sm leading-relaxed text-gray-400">
          {athlete.bio}
        </p>

        {/* Role badges (gold) */}
        <div className="flex flex-wrap gap-1.5">
          {athlete.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-2.5 py-0.5 text-xs font-semibold text-[#d4af37]"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Specialization badges (cyan) */}
        {athlete.specializations.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {athlete.specializations.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 px-2.5 py-0.5 text-xs font-medium text-[#00d4ff]"
              >
                {spec}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ============================================
// Page Component
// ============================================

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState<AthleteCategory>("all");

  const filteredAthletes =
    activeFilter === "all"
      ? athletes
      : athletes.filter((a) => a.category.includes(activeFilter));

  return (
    <div className="bg-[#050d18]">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-40 pb-24">
        {/* Background image with sepia & low opacity */}
        <div className="absolute inset-0">
          <Image
            src="/images/swami.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.08] sepia"
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d18]/60 via-[#050d18]/80 to-[#050d18]" />

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

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-1.5"
          >
            <span className="text-sm font-semibold tracking-wider text-[#d4af37]">
              Coaches. Athletes. Leaders.
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Meet the{" "}
            <span className="text-gradient-gold">G360 Family</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            The strength behind the brand. Our team of IBBF athletes, certified
            coaches, zonal heads, and fitness experts work together to build
            champions across India.
          </motion.p>
        </div>
      </section>

      {/* ==================== STATS BANNER ==================== */}
      <section className="relative border-y border-[#d4af37]/10 bg-[#0a1628]/60 py-10">
        <motion.div
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16 lg:justify-between lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-gradient-gold font-display text-3xl font-black sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400 sm:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==================== TEAM SHOWCASE GRID ==================== */}
      <section className="relative py-20 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d18] via-[#0a1628]/50 to-[#050d18]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="mx-auto mb-10 max-w-2xl text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
              The G360 Family
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Our Team
            </h2>
          </motion.div>

          {/* Filter bar */}
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.key
                    ? "bg-gradient-to-r from-[#d4af37] to-[#e8c84a] font-bold text-[#050d18] shadow-lg shadow-[#d4af37]/20"
                    : "border border-[#d4af37]/20 text-gray-400 hover:border-[#d4af37]/40 hover:text-[#d4af37]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Athlete grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredAthletes.map((athlete) => (
                <AthleteCard key={athlete.id} athlete={athlete} />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredAthletes.length === 0 && (
            <motion.p
              className="py-16 text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No team members found in this category.
            </motion.p>
          )}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-20 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d18] via-[#0a1628] to-[#050d18]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            className="font-display text-3xl font-bold text-white sm:text-4xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Want to Join the{" "}
            <span className="text-gradient-gold">G360 Family</span>?
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-gray-400"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Whether you&apos;re a coach, athlete, or fitness professional, there&apos;s a
            place for you in the G360 team. Reach out and let&apos;s build something
            great together.
          </motion.p>

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
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg border border-[#00d4ff]/40 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#00d4ff] transition-all duration-300 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:shadow-lg hover:shadow-[#00d4ff]/10"
            >
              Shop Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
