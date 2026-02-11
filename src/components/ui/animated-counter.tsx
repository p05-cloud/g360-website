"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: string
  label: string
  className?: string
}

function parseNumericValue(value: string): { number: number; suffix: string } | null {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return null
  return { number: parseInt(match[1], 10), suffix: match[2] || "" }
}

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const springValue = useSpring(0, { stiffness: 50, damping: 20, duration: 2 })
  const display = useTransform(springValue, (latest) =>
    Math.round(latest).toLocaleString()
  )
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (isInView && !hasStarted) {
      springValue.set(target)
      setHasStarted(true)
    }
  }, [isInView, hasStarted, springValue, target])

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{display}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  )
}

export function AnimatedCounter({ value, label, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const parsed = parseNumericValue(value)

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center", className)}
    >
      <div
        className="font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl"
        style={{
          background:
            "linear-gradient(135deg, #00d4ff 0%, #00a8cc 40%, #d4af37 70%, #e8c84a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {parsed ? (
          <AnimatedNumber target={parsed.number} suffix={parsed.suffix} />
        ) : (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {value}
          </motion.span>
        )}
      </div>
      <motion.p
        className="font-body mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] sm:text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {label}
      </motion.p>
    </div>
  )
}
