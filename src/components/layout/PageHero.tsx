interface PageHeroProps {
  title: string;
  highlight: string;
  subtitle: string;
}

export default function PageHero({ title, highlight, subtitle }: PageHeroProps) {
  // Split the title around the highlight word
  const parts = title.split(highlight);

  return (
    <section className="relative overflow-hidden bg-[#050d18] pt-40 pb-20">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d18] via-[#0a1628] to-[#050d18]" />

      {/* Decorative radial gradient - top right */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[#d4af37]/5 blur-3xl" />

      {/* Decorative radial gradient - bottom left */}
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-[#00d4ff]/5 blur-3xl" />

      {/* Subtle grid pattern */}
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
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {parts[0]}
          <span className="bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#d4af37] bg-clip-text text-transparent">
            {highlight}
          </span>
          {parts.length > 1 ? parts[1] : ""}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
