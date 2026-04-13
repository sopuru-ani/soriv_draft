import React from "react";
import { LazyImage } from "./LazyImage";

interface TwoColumnSectionProps {
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  children?: React.ReactNode;
}

function TwoColumnSection({
  title,
  description,
  imageUrl,
  imageAlt,
  imageOnLeft = true,
  children,
}: TwoColumnSectionProps) {
  return (
    <section className="border-t border-secondary/25 py-12 md:py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          {/* Image */}
          <div
            className={`${
              imageOnLeft
                ? "md:col-span-5"
                : "md:col-span-5 md:col-start-8 order-2 md:order-2"
            }`}
          >
            <LazyImage
              src={imageUrl}
              alt={imageAlt}
              wrapperClassName="aspect-4/3 w-full overflow-hidden rounded-2xl shadow-[0_14px_40px_-30px_var(--color-primary)]"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>

          {/* Text Content */}
          <article
            className={`${
              imageOnLeft
                ? "md:col-span-7 order-1"
                : "md:col-span-7 md:col-start-1 order-1 md:order-1"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              {title}
            </h2>

            {description && (
              <p className="mt-4 text-lg text-primary">{description}</p>
            )}

            {children}
          </article>
        </div>
      </div>
    </section>
  );
}

export default TwoColumnSection;
