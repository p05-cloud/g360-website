"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, PRODUCTS } from "@/lib/constants";

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

const heroStats = [
  { value: "500+", label: "Transformations" },
  { value: "20+", label: "Years Experience" },
  { value: "100%", label: "Dedication" },
  { value: "\u221E", label: "Belief in Karma" },
];

// ============================================
// Video Placeholder Data
// ============================================

const videoTestimonials = [
  { title: "Transformation Story #1", subtitle: "Coming soon..." },
  { title: "Transformation Story #2", subtitle: "Coming soon..." },
  { title: "Transformation Story #3", subtitle: "Coming soon..." },
];

// ============================================
// Review Data
// ============================================

const reviews = [
  {
    id: "r1",
    initials: "RK",
    name: "Rahul Kumar",
    rating: 5,
    text: "The G360 Pre-Workout is an absolute game-changer. I have never experienced this level of energy and focus during my training sessions. The pump is insane, and the flavour is surprisingly great. Highly recommended for anyone serious about their workouts!",
    date: "January 2026",
    verified: true,
    product: "Pre-Workout",
  },
  {
    id: "r2",
    initials: "PS",
    name: "Priya Sharma",
    rating: 5,
    text: "I have been using the G360 Whey Blend Protein for three months now and the results speak for themselves. The taste is amazing, mixes easily, and I can clearly see improvements in my recovery time. Prakash sir really knows what athletes need.",
    date: "December 2025",
    verified: true,
    product: "Whey Protein",
  },
  {
    id: "r3",
    initials: "AM",
    name: "Amit Mehta",
    rating: 5,
    text: "Joining the G360 journey has been the best decision of my fitness life. From the personalised guidance to the premium supplements, everything is top notch. Prakash sir does not just sell products, he transforms lives. True warrior community!",
    date: "November 2025",
    verified: true,
    product: "G360 Journey",
  },
];

// ============================================
// Star Rating Component
// ============================================

function StarRating({
  rating,
  interactive = false,
  onRate,
}: {
  rating: number;
  interactive?: boolean;
  onRate?: (r: number) => void;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => onRate?.(star)}
          className={`text-lg transition-colors ${
            interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
          } ${star <= rating ? "text-[#d4af37]" : "text-gray-600"}`}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          {"\u2605"}
        </button>
      ))}
    </div>
  );
}

// ============================================
// Play Icon SVG Component
// ============================================

function PlayIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#d4af37] transition-transform duration-300 group-hover:scale-110"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.6"
      />
      <path d="M26 20L46 32L26 44V20Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

// ============================================
// Review Form Component
// ============================================

function ReviewForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const productOptions = PRODUCTS.map((p) => p.name);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const stars = "\u2B50".repeat(rating);
    const message = [
      `*New G360 Review*`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Product: ${product || "General"}`,
      `Rating: ${stars} (${rating}/5)`,
      ``,
      `Review:`,
      reviewText,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center gap-4 rounded-xl border border-[#d4af37]/20 bg-[#0f1d2e] p-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Checkmark SVG */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" stroke="#d4af37" strokeWidth="2" />
          <path
            d="M20 32L28 40L44 24"
            stroke="#d4af37"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="font-display text-xl font-bold text-[#d4af37]">
          Thank You, Warrior!
        </h3>
        <p className="text-gray-400">
          Your review has been sent via WhatsApp. We appreciate your feedback and
          support!
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setProduct("");
            setRating(0);
            setReviewText("");
          }}
          className="mt-2 text-sm font-medium text-[#00d4ff] underline underline-offset-4 transition-colors hover:text-[#00d4ff]/80"
        >
          Write another review
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="review-name" className="text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          id="review-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="rounded-lg border border-[#d4af37]/15 bg-[#0a1628] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/30"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="review-email" className="text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          id="review-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="rounded-lg border border-[#d4af37]/15 bg-[#0a1628] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/30"
        />
      </div>

      {/* Product */}
      <div className="flex flex-col gap-2">
        <label htmlFor="review-product" className="text-sm font-medium text-gray-300">
          Product
        </label>
        <select
          id="review-product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="rounded-lg border border-[#d4af37]/15 bg-[#0a1628] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/30"
        >
          <option value="">Select a product (optional)</option>
          {productOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Star Rating */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-300">Rating</span>
        <StarRating rating={rating} interactive onRate={setRating} />
      </div>

      {/* Review Text */}
      <div className="flex flex-col gap-2">
        <label htmlFor="review-text" className="text-sm font-medium text-gray-300">
          Your Review
        </label>
        <textarea
          id="review-text"
          required
          rows={4}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Share your experience with G360..."
          className="resize-none rounded-lg border border-[#d4af37]/15 bg-[#0a1628] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/30"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#e8c84a] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#050d18] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/25"
      >
        Submit Review
      </button>
    </form>
  );
}

// ============================================
// Page Component
// ============================================

export default function WarriorsPage() {
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
              Real People. Real Results.
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            G360{" "}
            <span className="text-gradient-gold">Warriors</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Every warrior has a story. These are the real transformations powered by
            G360 nutrition, expert coaching, and an unstoppable mindset. Their
            journeys inspire the next generation of champions.
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
          {heroStats.map((stat) => (
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

      {/* ==================== VIDEO TESTIMONIALS ==================== */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="mx-auto mb-14 max-w-2xl text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
              Video Testimonials
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Watch Their Journey
            </h2>
          </motion.div>

          {/* Video cards grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {videoTestimonials.map((video, i) => (
              <motion.div
                key={video.title}
                variants={fadeInUp}
                custom={i}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#d4af37]/10 bg-[#0f1d2e] transition-all duration-300 hover:border-[#00d4ff]/30"
              >
                {/* Video placeholder */}
                <div className="relative flex aspect-video items-center justify-center bg-[#0a1628]">
                  {/* Play icon */}
                  <PlayIcon />

                  {/* Coming soon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#050d18]/60">
                    <span className="rounded-full border border-[#d4af37]/20 bg-[#050d18]/80 px-4 py-2 text-sm font-medium text-gray-400">
                      Video Coming Soon
                    </span>
                  </div>
                </div>

                {/* Info section */}
                <div className="flex flex-col gap-1 p-5">
                  <h3 className="font-display text-base font-bold text-white">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500">{video.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== REVIEWS SECTION ==================== */}
      <section className="relative py-20 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d18] via-[#0a1628] to-[#050d18]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="mx-auto mb-14 max-w-2xl text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
              Customer Reviews
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              What Warriors Say
            </h2>
          </motion.div>

          {/* Review cards grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                variants={fadeInUp}
                custom={i}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-[#d4af37]/10 bg-[#0f1d2e] p-6 transition-all duration-300 hover:border-[#d4af37]/30 hover:shadow-lg hover:shadow-[#d4af37]/5"
              >
                {/* Decorative large quote mark */}
                <span
                  className="pointer-events-none absolute -top-2 -left-1 font-serif text-[120px] leading-none text-[#d4af37]/5 select-none"
                  aria-hidden="true"
                >
                  {"\u201C"}
                </span>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Review text */}
                <p className="relative z-10 text-sm leading-relaxed text-gray-300">
                  {review.text}
                </p>

                {/* Product badge */}
                {review.product && (
                  <span className="w-fit rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 px-3 py-1 text-xs font-medium text-[#00d4ff]">
                    {review.product}
                  </span>
                )}

                {/* Author */}
                <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
                  {/* Avatar */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#e8c84a] text-sm font-bold text-[#050d18]">
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">
                      {review.name}
                    </span>
                    <span className="flex items-center gap-2 text-xs text-gray-500">
                      {review.date}
                      {review.verified && (
                        <span className="flex items-center gap-1 text-[#d4af37]">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
                            <path
                              d="M3.5 6L5.5 8L8.5 4.5"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Verified Buyer
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== WRITE REVIEW SECTION ==================== */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Info */}
            <motion.div
              className="flex flex-col justify-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
                Share Your Story
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Write a Review
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Your experience matters. Share your G360 journey and inspire fellow
                warriors. Every review helps us improve and motivates others to start
                their transformation.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Your review will be sent directly to us via WhatsApp for verification
                before being published on the site.
              </p>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              className="rounded-xl border border-[#d4af37]/15 bg-[#0f1d2e] p-6 sm:p-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ReviewForm />
            </motion.div>
          </div>
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
            Ready to Become a{" "}
            <span className="text-gradient-gold">Warrior</span>?
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-gray-400"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Join the G360 community and start your transformation today. Premium
            nutrition, expert guidance, and a warrior mindset await you.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#e8c84a] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#050d18] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/25"
            >
              Shop Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-[#00d4ff]/40 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#00d4ff] transition-all duration-300 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:shadow-lg hover:shadow-[#00d4ff]/10"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
