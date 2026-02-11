"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/layout/PageHero";

/* ─── Types ─────────────────────────────────────────────── */

interface PriceEntry {
  size: string;
  price: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  badge?: string;
  description: string;
  prices: PriceEntry[];
  flavors?: { name: string; image?: string }[];
  image?: string;
}

/* ─── Filter categories ─────────────────────────────────── */

const categories = [
  { key: "all", label: "All Products" },
  { key: "protein", label: "Protein" },
  { key: "amino", label: "Amino Acids" },
  { key: "performance", label: "Performance" },
  { key: "health", label: "Health & Wellness" },
];

/* ─── Product data ──────────────────────────────────────── */

const products: Product[] = [
  {
    id: 1,
    name: "Isolate Whey Protein",
    category: "protein",
    badge: "Premium",
    description:
      "Ultra-pure whey protein isolate with rapid absorption for serious athletes. High protein per scoop, low carb and fat.",
    prices: [{ size: "2KG", price: "8,700" }],
    flavors: [
      { name: "American Icecream", image: "/images/products/isolate-whey-icecream.jpg" },
      { name: "Chocolate", image: "/images/products/isolate-whey-chocolate.jpg" },
      { name: "Cafe Mocha", image: "/images/products/isolate-whey-cafe-mocha.jpg" },
      { name: "Malai Kulfi" },
    ],
  },
  {
    id: 2,
    name: "Whey Blend",
    category: "protein",
    description:
      "A versatile blend of whey concentrate and isolate for everyday muscle recovery and lean gains.",
    prices: [
      { size: "1KG", price: "3,800" },
      { size: "2KG", price: "7,000" },
    ],
    flavors: [
      { name: "Chocolate", image: "/images/products/whey-blend-chocolate.jpg" },
      { name: "Malai Kulfi", image: "/images/products/whey-blend-kulfi.jpg" },
      { name: "Cafe Mocha", image: "/images/products/whey-blend-cafe-mocha.jpg" },
      { name: "American Icecream", image: "/images/products/whey-blend-icecream.jpg" },
      { name: "Mango", image: "/images/products/whey-blend-mango.jpg" },
      { name: "Mix Berry" },
    ],
  },
  {
    id: 3,
    name: "Nitro Whey",
    category: "protein",
    badge: "Popular",
    description:
      "Nitrogen-boosted whey protein for explosive recovery and muscle growth. Fan-favourite formula.",
    prices: [
      { size: "1KG", price: "4,000" },
      { size: "2KG", price: "7,300" },
    ],
    flavors: [
      { name: "Chocolate", image: "/images/products/nitro-whey-chocolate.jpg" },
      { name: "Malai Kulfi", image: "/images/products/nitro-whey-kulfi.jpg" },
      { name: "Mango", image: "/images/products/nitro-whey-mango.jpg" },
      { name: "Cafe Mocha" },
    ],
  },
  {
    id: 4,
    name: "Whey Diet",
    category: "protein",
    description:
      "Low-calorie whey protein formulated for lean muscle while supporting fat loss. Ideal for cutting phases.",
    prices: [
      { size: "1KG", price: "3,800" },
      { size: "2KG", price: "7,500" },
    ],
    flavors: [
      { name: "American Icecream", image: "/images/products/whey-diet-icecream.jpg" },
      { name: "Mango", image: "/images/products/whey-diet-mango.jpg" },
      { name: "Chocolate" },
      { name: "Malai Kulfi" },
    ],
  },
  {
    id: 5,
    name: "Pure Gain",
    category: "protein",
    badge: "Gainer",
    description:
      "High-calorie mass gainer with quality carbs and protein for hard-gainers looking to bulk up.",
    prices: [
      { size: "1KG", price: "1,800" },
      { size: "3KG", price: "4,800" },
    ],
    flavors: [
      { name: "Chocolate", image: "/images/products/pure-gain-chocolate-promo.jpg" },
      { name: "Malai Kulfi", image: "/images/products/pure-gain-3kg-kulfi.jpg" },
      { name: "Mango", image: "/images/products/pure-gain-1kg-mango.jpg" },
      { name: "American Icecream", image: "/images/products/pure-gain-1kg-icecream-promo.jpg" },
    ],
  },
  {
    id: 6,
    name: "EAA Complex",
    category: "amino",
    badge: "Essential",
    description:
      "Complete Essential Amino Acid complex for enhanced recovery, endurance and muscle protein synthesis.",
    prices: [{ size: "250g", price: "2,500" }],
    flavors: [
      { name: "Mix Berry", image: "/images/products/eaa-mixberry-promo.jpg" },
      { name: "Mango", image: "/images/products/eaa-mango-clean.jpg" },
      { name: "Watermelon", image: "/images/products/eaa-watermelon-clean.jpg" },
    ],
  },
  {
    id: 7,
    name: "BCAA 2:1:1",
    category: "amino",
    description:
      "Branched-Chain Amino Acids in the clinically-studied 2:1:1 ratio for intra-workout recovery.",
    prices: [{ size: "250g", price: "2,500" }],
    image: "/images/products/bcaa.png",
  },
  {
    id: 8,
    name: "L-Carnitine",
    category: "amino",
    description:
      "Supports fat metabolism and energy production. Turn stored fat into usable fuel during workouts.",
    prices: [{ size: "100g", price: "1,500" }],
    image: "/images/products/l-carnitine.jpg",
  },
  {
    id: 9,
    name: "L-Glutamine",
    category: "amino",
    description:
      "Pure glutamine for gut health, immune support and reduced muscle soreness after intense training.",
    prices: [{ size: "250g", price: "1,800" }],
    image: "/images/products/l-glutamine.jpg",
  },
  {
    id: 10,
    name: "Pre-Workout",
    category: "performance",
    badge: "Energy",
    description:
      "Explosive energy, laser focus, and skin-splitting pumps. Engineered for maximum workout intensity.",
    prices: [{ size: "300g", price: "3,100" }],
    flavors: [
      { name: "Mango Mojito", image: "/images/products/pre-workout-mango-mojito.jpg" },
      { name: "Mix Berry", image: "/images/products/pre-workout-mixberry.jpg" },
      { name: "Watermelon", image: "/images/products/pre-workout-watermelon.jpg" },
    ],
  },
  {
    id: 11,
    name: "Pure Creatine",
    category: "performance",
    description:
      "Micronised creatine monohydrate for increased strength, power output and muscle volumisation.",
    prices: [
      { size: "250g", price: "1,800" },
      { size: "100g", price: "800" },
    ],
    image: "/images/products/pure-creatine-250g.jpg",
  },
  {
    id: 12,
    name: "Recharge",
    category: "performance",
    description:
      "Electrolyte and hydration formula to replenish minerals lost during intense training sessions.",
    prices: [{ size: "500g", price: "650" }],
    flavors: [
      { name: "Orange", image: "/images/products/recharge-orange.jpg" },
      { name: "Lemon", image: "/images/products/recharge-lemon.jpg" },
    ],
  },
  {
    id: 13,
    name: "Fat Burner",
    category: "health",
    description:
      "Thermogenic formula to boost metabolism, enhance energy, and support your fat-loss journey.",
    prices: [{ size: "60 caps", price: "2,000" }],
    image: "/images/products/fat-burner.jpg",
  },
  {
    id: 14,
    name: "Omega-3",
    category: "health",
    description:
      "High-potency fish oil softgels for heart health, joint support and cognitive function.",
    prices: [{ size: "60 softgels", price: "900" }],
    image: "/images/products/omega-3.jpg",
  },
  {
    id: 15,
    name: "Multivitamins",
    category: "health",
    description:
      "Complete daily multivitamin and mineral complex to fill nutritional gaps and support overall wellness.",
    prices: [{ size: "60 tablets", price: "1,200" }],
    image: "/images/products/multivitamins.jpg",
  },
];

/* ─── Helpers ───────────────────────────────────────────── */

function getDefaultImage(product: Product): string {
  if (product.flavors && product.flavors.length > 0) {
    const firstWithImage = product.flavors.find((f) => f.image);
    if (firstWithImage?.image) return firstWithImage.image;
  }
  return product.image || "/images/products/placeholder.jpg";
}

/* ─── Product Card Component ────────────────────────────── */

function ProductCard({ product }: { product: Product }) {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const currentImage = useCallback(() => {
    if (selectedFlavor && product.flavors) {
      const flavor = product.flavors.find((f) => f.name === selectedFlavor);
      if (flavor?.image) return flavor.image;
    }
    return getDefaultImage(product);
  }, [selectedFlavor, product]);

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in *${product.name}*${selectedFlavor ? ` (${selectedFlavor})` : ""}. Can you share more details about pricing and availability?`
  );

  const handleInstagram = async () => {
    try {
      await navigator.clipboard.writeText("@powerstormnutritionindia");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#d4af37]/10 bg-[#0f1d2e] transition-all duration-300 hover:border-[#d4af37]/30 hover:shadow-lg hover:shadow-[#d4af37]/5"
    >
      {/* Image container */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#0a1628]">
        <Image
          src={currentImage()}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5d76e] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#050d18]">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-bold tracking-wide text-white">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-gray-400">{product.description}</p>

        {/* Pricing table */}
        <div className="mt-1 rounded-lg border border-[#d4af37]/10 bg-[#0a1628]/60">
          {product.prices.map((p, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-2 ${
                i > 0 ? "border-t border-[#d4af37]/10" : ""
              }`}
            >
              <span className="text-sm text-gray-400">{p.size}</span>
              <span className="font-display text-base font-bold text-[#d4af37]">
                &#8377;{p.price}
              </span>
            </div>
          ))}
        </div>

        {/* Flavor selector */}
        {product.flavors && product.flavors.length > 0 && (
          <div className="mt-1">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
              Flavors
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.flavors.map((flavor) => (
                <button
                  key={flavor.name}
                  onClick={() =>
                    setSelectedFlavor((prev) =>
                      prev === flavor.name ? null : flavor.name
                    )
                  }
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
                    selectedFlavor === flavor.name
                      ? "bg-gradient-to-r from-[#00d4ff] to-[#d4af37] text-[#050d18]"
                      : "border border-[#d4af37]/20 text-gray-300 hover:border-[#d4af37]/50 hover:text-white"
                  }`}
                >
                  {flavor.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Spacer to push buttons to bottom */}
        <div className="flex-1" />

        {/* Action buttons */}
        <div className="mt-3 flex gap-2">
          <a
            href={`https://wa.me/918655850932?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1da851] hover:shadow-lg hover:shadow-[#25D366]/20"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <button
            onClick={handleInstagram}
            className="relative flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#C13584]/20 hover:brightness-110"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram
            {/* Toast notification */}
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#050d18] px-3 py-1 text-xs text-[#d4af37] shadow-lg border border-[#d4af37]/20"
                >
                  Copied to clipboard!
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Page ─────────────────────────────────────────── */

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Our Products"
        highlight="Products"
        subtitle="Premium supplements for peak performance"
      />

      {/* Filters + Grid */}
      <section className="bg-[#050d18] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                  activeFilter === cat.key
                    ? "bg-gradient-to-r from-[#00d4ff] to-[#d4af37] text-[#050d18] shadow-lg shadow-[#d4af37]/20"
                    : "border border-[#d4af37]/20 text-gray-300 hover:border-[#d4af37]/50 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              }}
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* More products coming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 flex flex-col items-center gap-4 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-[#d4af37]/30">
              <span className="text-2xl">+</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              More Products Coming Soon
            </h3>
            <p className="max-w-md text-sm text-gray-400">
              We are constantly expanding our range. Stay tuned for new
              supplements and exciting product launches.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
