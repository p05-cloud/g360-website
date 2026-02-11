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
  onCopyInstagram?: () => void
  instagramHandle?: string
  whatsappNumber?: string
  className?: string
}

export function ProductCard({
  product,
  index = 0,
  onCopyInstagram,
  instagramHandle = "@g360fitness",
  whatsappNumber = "919876543210",
  className,
}: ProductCardProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<number>(0)
  const currentImage =
    product.flavors.length > 0
      ? product.flavors[selectedFlavor]?.image ?? product.defaultImage
      : product.defaultImage

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in ${product.name}${
      product.flavors.length > 0
        ? ` (${product.flavors[selectedFlavor]?.name})`
        : ""
    }. Could you share more details?`
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  function handleInstagramClick() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(instagramHandle)
    }
    onCopyInstagram?.()
  }

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

        {/* Spacer to push buttons to bottom */}
        <div className="flex-1" />

        {/* Enquiry Buttons */}
        <div className="flex gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            style={{
              background: "linear-gradient(135deg, #128c3e 0%, #25d366 100%)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <button
            onClick={handleInstagramClick}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(193,53,132,0.3)]"
            style={{
              background:
                "linear-gradient(135deg, #833ab4 0%, #c13584 50%, #e1306c 100%)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram
          </button>
        </div>
      </div>
    </motion.div>
  )
}
