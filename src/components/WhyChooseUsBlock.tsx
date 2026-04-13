import React from "react";

interface WhyChooseUsBlockProps {
  heading: string;
  subheading?: string;
  items: string[];
}

function WhyChooseUsBlock({
  heading,
  subheading,
  items,
}: WhyChooseUsBlockProps) {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          {heading}
        </h2>

        {subheading && (
          <p className="mt-3 text-lg text-muted-foreground">{subheading}</p>
        )}

        {/* Horizontal divider */}
        <div className="mt-6 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary mx-auto max-w-48 rounded-full" />

        {/* Bulleted list */}
        <ul className="mt-8 space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 justify-center">
              <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-primary" />
              <span className="text-base leading-7 text-muted-foreground max-w-xl">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUsBlock;
