"use client"

import { cn } from "@/lib/utils"

interface ReviewCardProps {
  stars: number
  text: string
  authorName: string
  authorInitials: string
  badge: string
  date: string
  className?: string
}

export function ReviewCard({
  stars,
  text,
  authorName,
  authorInitials,
  badge,
  date,
  className,
}: ReviewCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border border-[var(--color-border)] p-6 transition-all duration-300",
        "hover:border-[var(--color-electric-blue)]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]",
        className
      )}
      style={{
        background: "linear-gradient(145deg, #0f1d2e 0%, #0a1628 100%)",
      }}
    >
      {/* Decorative Quote Mark */}
      <div
        className="pointer-events-none absolute right-5 top-4 select-none font-serif text-6xl leading-none sm:text-7xl"
        style={{ color: "rgba(212,175,55,0.08)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Star Rating */}
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={i < stars ? "var(--color-gold)" : "none"}
            stroke={i < stars ? "var(--color-gold)" : "var(--color-muted-foreground)"}
            strokeWidth="1.5"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--color-muted-foreground)] sm:text-base">
        {text}
      </p>

      {/* Author Section */}
      <div className="flex items-center gap-3">
        {/* Avatar Circle */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[var(--color-bg-primary)]"
          style={{
            background:
              "linear-gradient(135deg, #d4af37 0%, #e8c84a 40%, #00d4ff 100%)",
          }}
        >
          {authorInitials}
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[var(--color-foreground)]">
            {authorName}
          </span>
          {badge && (
            <span className="text-xs font-medium text-[var(--color-electric-blue)]">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Date */}
      <p className="mt-3 text-xs text-[var(--color-muted-foreground)]/60">
        {date}
      </p>
    </div>
  )
}
