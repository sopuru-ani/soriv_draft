import React from "react";

interface HeroSectionProps {
  badge?: string;
  headline: string;
  description?: string;
  ctaButtons?: Array<{
    label: string;
    isPrimary?: boolean;
    onClick?: () => void;
  }>;
  backgroundImageUrl?: string;
}

function HeroSection({
  badge,
  headline,
  description,
  ctaButtons = [],
  backgroundImageUrl,
}: HeroSectionProps) {
  const bgStyle = backgroundImageUrl
    ? {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32 px-4"
      style={bgStyle}
    >
      {/* Overlay for text readability */}
      {backgroundImageUrl && <div className="absolute inset-0 bg-black/40" />}

      {/* Gradient background elements */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(68,157,209,0.15),transparent_36%),radial-gradient(circle_at_88%_20%,rgba(244,159,4,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {badge && (
            <p className="inline-flex items-center gap-2 rounded-lg border border-secondary/40 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
              {badge}
            </p>
          )}

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
            {headline}
          </h1>

          {description && (
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
              {description}
            </p>
          )}

          {ctaButtons.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {ctaButtons.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={btn.onClick}
                  className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    btn.isPrimary
                      ? "bg-primary text-primary-foreground hover:-translate-y-0.5 shadow-[0_12px_28px_-16px_var(--color-primary)]"
                      : "border border-secondary/45 bg-background/70 text-primary hover:border-secondary hover:bg-background"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
