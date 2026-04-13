import React from "react";

interface CtaStripProps {
  statement: string;
  buttonLabel: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

function CtaStrip({
  statement,
  buttonLabel,
  buttonHref,
  onButtonClick,
}: CtaStripProps) {
  const ButtonComponent = buttonHref ? "a" : "button";

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-secondary/25 bg-gradient-to-r from-secondary/15 via-background to-tertiary/15 p-8 md:p-12">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                {statement}
              </p>
            </div>

            <ButtonComponent
              {...(buttonHref
                ? { href: buttonHref }
                : { onClick: onButtonClick })}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-[0_12px_28px_-16px_var(--color-primary)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              {buttonLabel}
            </ButtonComponent>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaStrip;
