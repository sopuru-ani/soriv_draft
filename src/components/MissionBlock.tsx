import React from "react";

interface MissionBlockProps {
  heading: string;
  content?: string;
  children?: React.ReactNode;
  centered?: boolean;
}

function MissionBlock({
  heading,
  content,
  children,
  centered = true,
}: MissionBlockProps) {
  return (
    <section className={`py-12 md:py-16 px-4 ${centered ? "text-center" : ""}`}>
      <div className={`mx-auto ${centered ? "max-w-3xl" : "max-w-7xl"}`}>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          {heading}
        </h2>

        {/* Horizontal divider */}
        <div
          className={`mt-6 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary ${centered ? "mx-auto max-w-48" : "w-full"} rounded-full`}
        />

        {content && (
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}

export default MissionBlock;
