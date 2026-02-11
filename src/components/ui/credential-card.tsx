"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface CredentialCardProps {
  icon: string
  title: string
  location: string
  description: string
  isHighlight?: boolean
  index?: number
  className?: string
}

export function CredentialCard({
  icon,
  title,
  location,
  description,
  isHighlight = false,
  index = 0,
  className,
}: CredentialCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={cn(
        "relative flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-300",
        "border",
        isHighlight
          ? "border-[var(--color-gold)] bg-[rgba(212,175,55,0.05)]"
          : "border-[var(--color-border)] hover:border-[var(--color-electric-blue)] hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]",
        className
      )}
      style={{
        background: isHighlight
          ? "linear-gradient(145deg, rgba(212,175,55,0.08) 0%, #0f1d2e 40%, #0a1628 100%)"
          : "linear-gradient(145deg, #0f1d2e 0%, #0a1628 100%)",
      }}
    >
      {/* Icon */}
      <div className="mb-4 text-4xl sm:text-5xl">{icon}</div>

      {/* Title */}
      <h3 className="font-display text-base font-bold tracking-wide text-[var(--color-foreground)] sm:text-lg">
        {title}
      </h3>

      {/* Location */}
      <p
        className="mt-1 text-xs font-semibold uppercase tracking-[0.15em]"
        style={{ color: "var(--color-electric-blue)" }}
      >
        {location}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {description}
      </p>

      {/* Highlight glow ring */}
      {isHighlight && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            boxShadow:
              "inset 0 0 30px rgba(212,175,55,0.06), 0 0 15px rgba(212,175,55,0.08)",
          }}
        />
      )}
    </motion.div>
  )
}
