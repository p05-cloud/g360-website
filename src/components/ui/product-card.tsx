"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ProductFlavor {
  name: string
  image: string
}

export interface ProductPrice {
  size: string
  price: string
}

export interface Product {
  name: string
  description: string
  badge?: string
  prices: ProductPrice[]
  flavors: ProductFlavor[]
  defaultImage: string
  category: string
}

interface ProductCardProps {
  product: Product
  index?: number
  className?: string
}

export function ProductCard({
  product,
  index = 0,
  className,
}: ProductCardProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<number>(0)
  const currentImage =
    product.flavors.length > 0
      ? product.flavors[selectedFlavor]?.image ?? product.defaultImage
      : product.defaultImage

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] transition-all duration-300",
        "hover:border-[var(--color-electric-blue)] hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]",
        className
      )}
      style={{
        background: "linear-gradient(145deg, #0f1d2e 0%, #0a1628 60%, #142438 100%)",
      }}
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-[var(--color-bg-secondary)]">
        <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.08]">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <div
            className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-bg-primary)]"
            style={{
              background: "linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #e8c84a 100%)",
            }}
          >
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Name & Description */}
        <div>
          <h3 className="font-display text-lg font-bold tracking-wide text-[var(--color-foreground)]">
            {product.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
            {product.description}
          </p>
        </div>

        {/* Pricing */}
        {product.prices.length > 0 && (
          <div className="space-y-1.5">
            {product.prices.map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-[var(--color-muted-foreground)]">
                  {p.size}
                </span>
                <span
                  className="font-display font-bold"
                  style={{ color: "var(--color-gold)" }}
                >
                  {p.price}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Flavor Selector */}
        {product.flavors.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Flavors
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.flavors.map((flavor, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedFlavor(i)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
                    selectedFlavor === i
                      ? "text-[var(--color-bg-primary)]"
                      : "border border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  )}
                  style={
                    selectedFlavor === i
                      ? {
                          background:
                            "linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #e8c84a 100%)",
                        }
                      : undefined
                  }
                >
                  {flavor.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />
      </div>
    </motion.div>
  )
}
