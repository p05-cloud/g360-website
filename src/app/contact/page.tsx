"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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

const contactInfo = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "gabornemore360@gmail.com",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 86558 50932",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Mumbai, Maharashtra, India",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    emoji: "\uD83D\uDCF8",
    href: "https://www.instagram.com/powerstormnutritionindia/",
  },
  {
    name: "Facebook",
    emoji: "\uD83D\uDCD8",
    href: "https://www.facebook.com/",
  },
  {
    name: "YouTube",
    emoji: "\uD83C\uDFAC",
    href: "https://www.youtube.com/",
  },
  {
    name: "LinkedIn",
    emoji: "\uD83D\uDCBC",
    href: "https://www.linkedin.com/",
  },
];

const quickLinks = [
  { label: "Browse Products", href: "/products" },
  { label: "About Prakash More", href: "/about" },
  { label: "Partnership Info", href: "/brands" },
];

const inquiryTypes = [
  "Product Inquiry",
  "Bulk / Wholesale Order",
  "Fitness Consultation",
  "Brand Partnership",
  "Sponsorship",
  "Other",
];

const faqs = [
  {
    question: "How can I purchase your products?",
    answer:
      "You can reach out to us directly via WhatsApp or Instagram to place an order. Simply fill out the contact form on this page or click the WhatsApp button on any product page. We will confirm availability, pricing, and delivery details.",
  },
  {
    question: "Do you offer bulk or wholesale discounts?",
    answer:
      "Yes! We offer special pricing for bulk orders, gym owners, coaches and resellers. Select 'Bulk / Wholesale Order' in the inquiry type and share your requirements. Our team will get back to you with a custom quote.",
  },
  {
    question: "Can I book a fitness consultation with Prakash More?",
    answer:
      "Absolutely. Prakash More offers personalised fitness consultations covering training, nutrition and supplementation. Select 'Fitness Consultation' in the form above and we will schedule a session for you.",
  },
  {
    question: "How can I become a brand partner with G360?",
    answer:
      "We are always open to partnerships that align with our quality standards. If you represent a brand in sports nutrition, fitness apparel or wellness, select 'Brand Partnership' in the form and share details about your brand. Our team will review and respond.",
  },
];

/* ─── Page Component ────────────────────────────────────── */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim()) newErrors.email = true;
    if (!form.subject.trim()) newErrors.subject = true;
    if (!form.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build WhatsApp message
    const lines = [
      `*New Inquiry from G360 Website*`,
      ``,
      `*Name:* ${form.name}`,
      form.email ? `*Email:* ${form.email}` : "",
      form.phone ? `*Phone:* ${form.phone}` : "",
      `*Subject:* ${form.subject}`,
      form.inquiryType ? `*Inquiry Type:* ${form.inquiryType}` : "",
      ``,
      `*Message:*`,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/918655850932?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  const inputBase =
    "w-full rounded-lg border bg-[#0a1628] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors duration-200 focus:border-[#d4af37]/60 focus:ring-1 focus:ring-[#d4af37]/30";
  const inputBorder = (field: string) =>
    errors[field] ? "border-red-500/70" : "border-[#d4af37]/15";

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Contact Us"
        highlight="Contact"
        subtitle="Get in touch with the G360 team"
      />

      {/* ── Contact Section ─────────────────────────────── */}
      <section className="bg-[#050d18] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            {/* ── Left: Form (3 cols) ───────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h2 className="font-display text-2xl font-bold text-white">
                Send Us a <span className="text-gradient-gold">Message</span>
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Fill out the form and we will reach out to you via WhatsApp.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-3xl text-green-400">
                    &#10003;
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="max-w-md text-sm text-gray-400">
                    Your inquiry has been opened in WhatsApp. If it did not open
                    automatically, please message us at{" "}
                    <span className="text-[#d4af37]">+91 86558 50932</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        inquiryType: "",
                        message: "",
                      });
                    }}
                    className="mt-2 text-sm font-medium text-[#00d4ff] underline underline-offset-4 transition-colors hover:text-[#00d4ff]/80"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 grid gap-5 sm:grid-cols-2"
                  noValidate
                >
                  {/* Full Name */}
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={`${inputBase} ${inputBorder("name")}`}
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`${inputBase} ${inputBorder("email")}`}
                    />
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className={`${inputBase} border-[#d4af37]/15`}
                    />
                  </div>

                  {/* Subject */}
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputBase} ${inputBorder("subject")}`}
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                      className={`${inputBase} border-[#d4af37]/15 appearance-none`}
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputBase} ${inputBorder("message")} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f5d76e] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#050d18] transition-all duration-200 hover:shadow-lg hover:shadow-[#d4af37]/25 hover:scale-[1.02] sm:w-auto"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* ── Right: Info (2 cols) ──────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-8 lg:col-span-2"
            >
              {/* Contact info card */}
              <div className="rounded-2xl border border-[#d4af37]/10 bg-[#0f1d2e] p-6">
                <h3 className="mb-5 font-display text-lg font-bold text-white">
                  Contact Info
                </h3>
                <div className="flex flex-col gap-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-sm text-gray-300">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="rounded-2xl border border-[#d4af37]/10 bg-[#0f1d2e] p-6">
                <h3 className="mb-4 font-display text-lg font-bold text-white">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 rounded-lg border border-[#d4af37]/10 bg-[#0a1628] px-4 py-3 text-sm text-gray-300 transition-all duration-200 hover:border-[#d4af37]/30 hover:text-white"
                    >
                      <span className="text-lg">{s.emoji}</span>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="rounded-2xl border border-[#d4af37]/10 bg-[#0f1d2e] p-6">
                <h3 className="mb-4 font-display text-lg font-bold text-white">
                  Quick Links
                </h3>
                <div className="flex flex-col gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-[#d4af37]"
                    >
                      <svg
                        className="h-3.5 w-3.5 text-[#d4af37]/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ─────────────────────────────────── */}
      <section className="bg-[#0a1628] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-display text-3xl font-bold tracking-wide text-white sm:text-4xl"
          >
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </motion.h2>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`faq-${i}`}
                    className="rounded-xl border border-[#d4af37]/10 bg-[#0f1d2e] px-5 py-1"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-white hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dharma Wheel CTA ────────────────────────────── */}
      <section className="bg-[#050d18] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            {/* Dharma Wheel */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex h-20 w-20 items-center justify-center text-5xl text-[#d4af37]/60"
            >
              &#9784;
            </motion.div>

            <h2 className="font-serif-accent text-3xl font-bold italic text-white sm:text-4xl">
              &ldquo;Believe in{" "}
              <span className="text-gradient-gold">Karma</span>&rdquo;
            </h2>
            <p className="max-w-lg text-gray-400">
              Every rep counts. Every meal matters. The effort you put in today
              shapes the champion you become tomorrow.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
