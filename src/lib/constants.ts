// ============================================
// G360 Site Constants
// ============================================

export const SITE_NAME = "G360 - Guru 360";
export const SITE_TAGLINE = "Fuel Your Inner Warrior";
export const OWNER_NAME = "Prakash More";
export const WHATSAPP_NUMBER = "918655850932";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// ============================================
// Navigation Links
// ============================================

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products" },
      { label: "Whey Proteins", href: "/products?category=protein" },
      { label: "Amino Acids", href: "/products?category=amino" },
      { label: "Performance", href: "/products?category=performance" },
      { label: "Health & Wellness", href: "/products?category=health" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Warriors", href: "/warriors" },
  { label: "Contact", href: "/contact" },
];

// ============================================
// Product Types
// ============================================

export type ProductCategory = "protein" | "amino" | "performance" | "health";

export interface ProductPrice {
  size: string;
  price: number;
}

export interface ProductFlavor {
  name: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  badge?: string;
  description: string;
  highlights: string[];
  prices: ProductPrice[];
  flavors: ProductFlavor[];
  defaultImage: string;
}

// ============================================
// Products Data
// ============================================

export const PRODUCTS: Product[] = [
  // --- PROTEINS ---
  {
    id: "isolate-whey-protein",
    name: "Isolate Whey Protein",
    slug: "isolate-whey-protein",
    category: "protein",
    badge: "Premium",
    description:
      "Ultra-pure whey protein isolate for maximum absorption and lean muscle growth. Engineered for athletes who demand the best.",
    highlights: ["26g Protein per serving", "5.7g BCAAs", "4.1g Glutamic Acid", "Low Fat & Low Carb"],
    prices: [{ size: "2KG", price: 9500 }],
    flavors: [
      { name: "American Icecream", image: "/images/products/isolate-whey-icecream.jpg" },
      { name: "Chocolate", image: "/images/products/isolate-whey-chocolate.jpg" },
      { name: "Cafe Mocha", image: "/images/products/isolate-whey-mocha.jpg" },
      { name: "Malai Kulfi", image: "/images/products/isolate-whey-kulfi.jpg" },
    ],
    defaultImage: "/images/products/isolate-whey-icecream.jpg",
  },
  {
    id: "whey-blend-protein",
    name: "Whey Blend Protein",
    slug: "whey-blend-protein",
    category: "protein",
    description:
      "A powerful blend of whey concentrate and isolate for balanced nutrition. Perfect for daily use and consistent muscle recovery.",
    highlights: ["24g Protein per serving", "Whey Concentrate + Isolate Blend", "Great Taste", "Easy Mixing"],
    prices: [
      { size: "1KG", price: 3990 },
      { size: "2KG", price: 7700 },
    ],
    flavors: [
      { name: "Chocolate", image: "/images/products/whey-blend-chocolate.jpg" },
      { name: "Malai Kulfi", image: "/images/products/whey-blend-kulfi.jpg" },
      { name: "Cafe Mocha", image: "/images/products/whey-blend-mocha.jpg" },
      { name: "American Icecream", image: "/images/products/whey-blend-icecream.jpg" },
      { name: "Mango", image: "/images/products/whey-blend-mango.jpg" },
      { name: "Mix Berry", image: "/images/products/whey-blend-berry.jpg" },
    ],
    defaultImage: "/images/products/whey-blend-chocolate.jpg",
  },
  {
    id: "nitro-whey-protein",
    name: "Nitro Whey Protein",
    slug: "nitro-whey-protein",
    category: "protein",
    badge: "Popular",
    description:
      "Advanced whey protein formula fortified with L-Arginine and Creatine for explosive performance and maximum muscle pump.",
    highlights: ["30g Protein per serving", "Added L-Arginine", "Added Creatine", "Enhanced Recovery"],
    prices: [
      { size: "1KG", price: 4150 },
      { size: "2KG", price: 7650 },
    ],
    flavors: [
      { name: "Chocolate", image: "/images/products/nitro-whey-chocolate.jpg" },
      { name: "Malai Kulfi", image: "/images/products/nitro-whey-kulfi.jpg" },
      { name: "Mango", image: "/images/products/nitro-whey-mango.jpg" },
      { name: "Cafe Mocha", image: "/images/products/nitro-whey-mocha.jpg" },
    ],
    defaultImage: "/images/products/nitro-whey-chocolate.jpg",
  },
  {
    id: "whey-diet-protein",
    name: "Whey Diet Protein",
    slug: "whey-diet-protein",
    category: "protein",
    description:
      "Lean protein formula enhanced with L-Carnitine and Green Tea extract. Designed for fat loss while preserving lean muscle.",
    highlights: ["26g Protein per serving", "Added L-Carnitine", "Green Tea Extract", "Supports Fat Loss"],
    prices: [
      { size: "1KG", price: 4100 },
      { size: "2KG", price: 7999 },
    ],
    flavors: [
      { name: "American Icecream", image: "/images/products/whey-diet-icecream.jpg" },
      { name: "Mango", image: "/images/products/whey-diet-mango.jpg" },
      { name: "Chocolate", image: "/images/products/whey-diet-chocolate.jpg" },
      { name: "Malai Kulfi", image: "/images/products/whey-diet-kulfi.jpg" },
    ],
    defaultImage: "/images/products/whey-diet-icecream.jpg",
  },
  {
    id: "pure-gain-mass-gainer",
    name: "Pure Gain Mass Gainer",
    slug: "pure-gain-mass-gainer",
    category: "protein",
    badge: "Gainer",
    description:
      "High-calorie mass gainer packed with complex carbs and quality protein for serious size and strength gains.",
    highlights: ["327 Kcal per serving", "60g Complex Carbs", "Quality Protein Blend", "Easy Weight Gain"],
    prices: [
      { size: "1KG", price: 1800 },
      { size: "3KG", price: 4800 },
    ],
    flavors: [
      { name: "Chocolate", image: "/images/products/mass-gainer-chocolate.jpg" },
      { name: "Malai Kulfi", image: "/images/products/mass-gainer-kulfi.jpg" },
      { name: "Mango", image: "/images/products/mass-gainer-mango.jpg" },
      { name: "American Icecream", image: "/images/products/mass-gainer-icecream.jpg" },
    ],
    defaultImage: "/images/products/mass-gainer-chocolate.jpg",
  },

  // --- AMINO ACIDS ---
  {
    id: "eaa-complex",
    name: "EAA Complex",
    slug: "eaa-complex",
    category: "amino",
    badge: "Essential",
    description:
      "Complete Essential Amino Acid complex with all 9 EAAs for maximum muscle protein synthesis and recovery.",
    highlights: ["6.5g EAA per serving", "All 9 Essential Amino Acids", "Intra-Workout Formula", "Fast Absorption"],
    prices: [{ size: "250g", price: 2500 }],
    flavors: [
      { name: "Mix Berry", image: "/images/products/eaa-berry.jpg" },
      { name: "Mango", image: "/images/products/eaa-mango.jpg" },
      { name: "Watermelon", image: "/images/products/eaa-watermelon.jpg" },
    ],
    defaultImage: "/images/products/eaa-berry.jpg",
  },
  {
    id: "bcaa-2-1-1",
    name: "BCAA 2:1:1",
    slug: "bcaa-2-1-1",
    category: "amino",
    description:
      "Branched-Chain Amino Acids in the scientifically proven 2:1:1 ratio for muscle recovery and reduced soreness.",
    highlights: ["6g BCAA per serving", "2:1:1 Ratio (Leucine:Isoleucine:Valine)", "Anti-Catabolic", "Faster Recovery"],
    prices: [{ size: "250g", price: 2500 }],
    flavors: [
      { name: "Mango", image: "/images/products/bcaa-mango.jpg" },
      { name: "Green Apple", image: "/images/products/bcaa-green-apple.jpg" },
    ],
    defaultImage: "/images/products/bcaa-mango.jpg",
  },
  {
    id: "l-leucine",
    name: "L-Leucine",
    slug: "l-leucine",
    category: "amino",
    description:
      "Pure L-Leucine powder - the most critical BCAA for triggering muscle protein synthesis and growth signaling.",
    highlights: ["Pure L-Leucine", "mTOR Activation", "Muscle Protein Synthesis", "Unflavored for Stacking"],
    prices: [{ size: "100g", price: 700 }],
    flavors: [{ name: "Unflavored", image: "/images/products/ps-l-leucine.jpg" }],
    defaultImage: "/images/products/ps-l-leucine.jpg",
  },
  {
    id: "l-carnitine",
    name: "L-Carnitine",
    slug: "l-carnitine",
    category: "amino",
    description:
      "Pure L-Carnitine for enhanced fat metabolism and energy production. Transports fatty acids into mitochondria for fuel.",
    highlights: ["Pure L-Carnitine", "Fat Metabolism Support", "Energy Production", "Unflavored for Stacking"],
    prices: [{ size: "100g", price: 1500 }],
    flavors: [{ name: "Unflavored", image: "/images/products/l-carnitine.jpg" }],
    defaultImage: "/images/products/l-carnitine.jpg",
  },
  {
    id: "l-glutamine",
    name: "L-Glutamine",
    slug: "l-glutamine",
    category: "amino",
    description:
      "Pure L-Glutamine for gut health, immune support, and enhanced muscle recovery after intense training sessions.",
    highlights: ["Pure L-Glutamine", "Gut Health Support", "Immune Function", "Post-Workout Recovery"],
    prices: [{ size: "250g", price: 1800 }],
    flavors: [{ name: "Unflavored", image: "/images/products/ps-l-glutamine.jpg" }],
    defaultImage: "/images/products/ps-l-glutamine.jpg",
  },

  // --- PERFORMANCE ---
  {
    id: "pre-workout",
    name: "Pre-Workout",
    slug: "pre-workout",
    category: "performance",
    badge: "Energy",
    description:
      "Explosive pre-workout formula with 200mg Caffeine and Beta Alanine for intense energy, focus, and endurance.",
    highlights: ["200mg Caffeine", "3g Beta Alanine", "Enhanced Focus", "Explosive Energy"],
    prices: [{ size: "300g", price: 3100 }],
    flavors: [
      { name: "Mango Mojito", image: "/images/products/preworkout-mango.jpg" },
      { name: "Mix Berry", image: "/images/products/preworkout-berry.jpg" },
      { name: "Watermelon", image: "/images/products/preworkout-watermelon.jpg" },
    ],
    defaultImage: "/images/products/preworkout-mango.jpg",
  },
  {
    id: "pure-creatine",
    name: "Pure Creatine",
    slug: "pure-creatine",
    category: "performance",
    description:
      "Micronized Creatine Monohydrate for increased strength, power output, and muscle volumization.",
    highlights: ["Pure Creatine Monohydrate", "Micronized for Absorption", "Strength & Power", "Muscle Volumization"],
    prices: [
      { size: "100g", price: 700 },
      { size: "250g", price: 1700 },
    ],
    flavors: [{ name: "Unflavored", image: "/images/products/ps-pure-creatine.jpg" }],
    defaultImage: "/images/products/ps-pure-creatine.jpg",
  },
  {
    id: "recharge",
    name: "PS Recharge",
    slug: "recharge",
    category: "performance",
    description:
      "Instant energy drink that hydrates faster than water. Packed with 126 kcal energy, 250mg BCAA, 300mg L-Glutamine, and 300mg Beta Alanine for peak performance and rapid recovery.",
    highlights: ["Hydrates Faster Than Water", "126 kcal Energy", "250mg BCAA", "300mg L-Glutamine & Beta Alanine"],
    prices: [{ size: "1 KG", price: 650 }],
    flavors: [
      { name: "Mango", image: "/images/products/recharge-mango.jpg" },
      { name: "Mojito", image: "/images/products/recharge-mojito.jpg" },
      { name: "Cola", image: "/images/products/recharge-mango.jpg" },
      { name: "Pineapple", image: "/images/products/recharge-mango.jpg" },
    ],
    defaultImage: "/images/products/recharge-mango.jpg",
  },

  // --- HEALTH & WELLNESS ---
  {
    id: "fat-burner",
    name: "Fat Burner",
    slug: "fat-burner",
    category: "health",
    description:
      "Powerful thermogenic fat burner with Green Tea, L-Carnitine, and Garcinia Cambogia for accelerated fat loss.",
    highlights: ["Green Tea Extract", "L-Carnitine", "Garcinia Cambogia", "Thermogenic Formula"],
    prices: [{ size: "60 Tablets", price: 1500 }],
    flavors: [{ name: "Tablets", image: "/images/products/ps-fat-burner.jpg" }],
    defaultImage: "/images/products/ps-fat-burner.jpg",
  },
  {
    id: "omega-3-fish-oil",
    name: "Omega-3 Fish Oil",
    slug: "omega-3-fish-oil",
    category: "health",
    description:
      "High-quality Omega-3 Fish Oil with optimal EPA and DHA for heart health, joint support, and brain function.",
    highlights: ["EPA/DHA Formula", "Heart Health", "Joint Support", "Brain Function"],
    prices: [{ size: "60 Softgels", price: 900 }],
    flavors: [{ name: "Softgels", image: "/images/products/omega3.jpg" }],
    defaultImage: "/images/products/omega3.jpg",
  },
  {
    id: "multivitamins",
    name: "Multivitamins",
    slug: "multivitamins",
    category: "health",
    description:
      "Complete daily multivitamin and mineral formula to fill nutritional gaps and support overall health and immunity.",
    highlights: ["Complete Formula", "Vitamins & Minerals", "Immune Support", "Daily Wellness"],
    prices: [{ size: "60 Tablets", price: 850 }],
    flavors: [{ name: "Tablets", image: "/images/products/ps-multivitamin.jpg" }],
    defaultImage: "/images/products/ps-multivitamin.jpg",
  },
  {
    id: "gainz",
    name: "Gainz",
    slug: "gainz",
    category: "protein",
    badge: "Gainer",
    description:
      "Weight gainer tablets engineered for digestion and muscle mass. Clean gains without the bulk of powder gainers.",
    highlights: ["Digestion Support", "Lean Mass Gain", "Easy to Stack", "100 Tablet Pack"],
    prices: [{ size: "100 Tablets", price: 1800 }],
    flavors: [{ name: "Tablets", image: "/images/products/ps-gainz.jpg" }],
    defaultImage: "/images/products/ps-gainz.jpg",
  },
  {
    id: "testo-booster",
    name: "Testo Booster",
    slug: "testo-booster",
    category: "health",
    description:
      "Advanced stimulation for testosterone support. Formulated to back strength training, recovery, and male vitality.",
    highlights: ["Testosterone Support", "Strength & Recovery", "Vitality Formula", "60 Tablet Pack"],
    prices: [{ size: "60 Tablets", price: 2500 }],
    flavors: [{ name: "Tablets", image: "/images/products/ps-testo-booster.jpg" }],
    defaultImage: "/images/products/ps-testo-booster.jpg",
  },
  {
    id: "l-arginine",
    name: "L-Arginine",
    slug: "l-arginine",
    category: "amino",
    description:
      "L-Arginine with L-Citrulline — essential precursors of nitric oxide. Supports cardiovascular health, blood flow, and athletic performance.",
    highlights: ["With L-Citrulline", "Nitric Oxide Precursor", "Cardiovascular Health", "Performance & Recovery"],
    prices: [{ size: "60 Tablets", price: 1000 }],
    flavors: [{ name: "Tablets", image: "/images/products/ps-l-arginine.jpg" }],
    defaultImage: "/images/products/ps-l-arginine.jpg",
  },
  {
    id: "calcium",
    name: "Calcium",
    slug: "calcium",
    category: "health",
    description:
      "Bioavailable calcium citrate for superior absorption. Supports bone, teeth, joint, and muscle health.",
    highlights: ["Calcium Citrate Form", "Bone & Joint Support", "Better Absorption", "60 Tablet Pack"],
    prices: [{ size: "60 Tablets", price: 700 }],
    flavors: [{ name: "Tablets", image: "/images/products/ps-calcium.jpg" }],
    defaultImage: "/images/products/ps-calcium.jpg",
  },
  {
    id: "digestive-enzymes",
    name: "Digestive Enzymes",
    slug: "digestive-enzymes",
    category: "health",
    description:
      "Broad-spectrum digestive enzyme complex for better nutrient absorption and reduced bloating after high-protein meals.",
    highlights: ["Broad-Spectrum Enzymes", "Improves Absorption", "Reduces Bloating", "60 Tablet Pack"],
    prices: [{ size: "60 Tablets", price: 1500 }],
    flavors: [{ name: "Tablets", image: "/images/products/ps-digestive-enzymes.jpg" }],
    defaultImage: "/images/products/ps-digestive-enzymes.jpg",
  },
  {
    id: "peanut-butter",
    name: "Peanut Butter",
    slug: "peanut-butter",
    category: "health",
    badge: "Food",
    description:
      "High-protein peanut butter in Cream & Cookies. Packed with crunch and clean fats for a satisfying fitness-friendly snack.",
    highlights: ["High Protein Source", "Crunchy Texture", "Clean Fats", "1 KG Tub"],
    prices: [{ size: "1 KG", price: 1000 }],
    flavors: [{ name: "Cream & Cookies", image: "/images/products/ps-peanut-butter.jpg" }],
    defaultImage: "/images/products/ps-peanut-butter.jpg",
  },
  {
    id: "high-protein-oats",
    name: "High Protein Oats",
    slug: "high-protein-oats",
    category: "protein",
    badge: "Food",
    description:
      "Instant high-protein oats with fruit and nut. 22g protein, 12.5g fibre per serving. Banned-substance free.",
    highlights: ["22g Protein per serving", "12.5g Fibre", "Dried Fruits & Nuts", "Banned-Substance Free"],
    prices: [
      { size: "450g", price: 450 },
      { size: "1 KG", price: 1100 },
    ],
    flavors: [{ name: "Chocolate", image: "/images/products/ps-protein-oats.jpg" }],
    defaultImage: "/images/products/ps-protein-oats.jpg",
  },
];

// ============================================
// Product Categories for filtering
// ============================================

export const PRODUCT_CATEGORIES: {
  value: ProductCategory | "all";
  label: string;
  description: string;
}[] = [
  { value: "all", label: "All Products", description: "Browse our complete lineup" },
  { value: "protein", label: "Whey Proteins", description: "Premium protein for muscle growth" },
  { value: "amino", label: "Amino Acids", description: "Essential building blocks" },
  { value: "performance", label: "Performance", description: "Fuel your workouts" },
  { value: "health", label: "Health & Wellness", description: "Complete daily nutrition" },
];

// ============================================
// Stats
// ============================================

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "20+", label: "Years Experience" },
  { value: "1000+", label: "Athletes Trained" },
  { value: "5+", label: "Brand Partners" },
  { value: "\u221E", label: "Dedication" },
];

// ============================================
// Credentials
// ============================================

export interface Credential {
  title: string;
  description: string;
  icon: string;
}

export const CREDENTIALS: Credential[] = [
  {
    title: "Certified Sports Nutritionist",
    description:
      "Internationally certified in sports nutrition and supplementation science.",
    icon: "award",
  },
  {
    title: "20+ Years in Fitness Industry",
    description:
      "Two decades of hands-on experience training athletes and bodybuilders.",
    icon: "trophy",
  },
  {
    title: "1000+ Athletes Transformed",
    description:
      "A proven track record of transforming physiques and performance outcomes.",
    icon: "users",
  },
  {
    title: "Competition Coach",
    description:
      "Expert guidance for bodybuilding and physique competition preparation.",
    icon: "target",
  },
  {
    title: "Supplement Formulation Expert",
    description:
      "Deep knowledge of ingredient science and supplement formulation.",
    icon: "flask",
  },
  {
    title: "Community Leader",
    description:
      "Building a thriving community of fitness enthusiasts and warriors.",
    icon: "heart",
  },
];

// ============================================
// Reviews / Testimonials
// ============================================

export interface Review {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  product?: string;
}

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Rahul Patil",
    role: "Competitive Bodybuilder",
    image: "/images/reviews/rahul.jpg",
    rating: 5,
    text: "Prakash sir's guidance completely transformed my physique. The G360 Nitro Whey is my go-to protein - incredible taste and results. Won my first state-level competition under his mentorship.",
    product: "Nitro Whey Protein",
  },
  {
    id: "review-2",
    name: "Sneha Deshmukh",
    role: "Fitness Athlete",
    image: "/images/reviews/sneha.jpg",
    rating: 5,
    text: "As a female athlete, finding the right supplements was always a challenge. G360 Whey Diet Protein with L-Carnitine has been a game-changer for my lean physique goals. Prakash sir truly understands nutrition.",
    product: "Whey Diet Protein",
  },
  {
    id: "review-3",
    name: "Vikram Singh",
    role: "MMA Fighter",
    image: "/images/reviews/vikram.jpg",
    rating: 5,
    text: "The Pre-Workout gives me insane energy for my training sessions. And the EAA Complex keeps me recovered between fights. Prakash sir doesn't just sell supplements - he builds warriors.",
    product: "Pre-Workout",
  },
];

// ============================================
// Social Links
// ============================================

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/guru360_prakashmore/",
  youtube: "https://www.youtube.com/@guru360",
  facebook: "https://www.facebook.com/guru360prakashmore",
  whatsapp: WHATSAPP_URL,
};

// ============================================
// Helper functions
// ============================================

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

