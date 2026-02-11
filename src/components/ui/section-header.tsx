import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  title: string
  highlight: string
  subtitle?: string
  className?: string
}

export function SectionHeader({
  label,
  title,
  highlight,
  subtitle,
  className,
}: SectionHeaderProps) {
  // Split the title around the highlight word so we can wrap it in a gradient span
  const parts = title.split(highlight)

  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <p
        className="font-body mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-blue)]"
        style={{ fontSize: "0.9rem", letterSpacing: "5px" }}
      >
        {label}
      </p>

      <h2 className="font-serif-accent text-3xl font-bold leading-tight text-[var(--color-foreground)] sm:text-4xl md:text-5xl">
        {parts.length > 1 ? (
          <>
            {parts[0]}
            <span className="text-gradient-gold">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          <>
            {title}{" "}
            <span className="text-gradient-gold">{highlight}</span>
          </>
        )}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted-foreground)] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
