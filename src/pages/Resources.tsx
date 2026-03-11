import React from "react";
import Nav from "@/components/Nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LazyImage } from "@/components/LazyImage";

function Resources() {
  const resources = ["/flyer-1.png", "/flyer-2.png", "/flyer-3.png"];

  return (
    <>
      <Nav />

      <ScrollArea className="h-[calc(100dvh-3.75rem)] w-full">
        <main className="relative overflow-hidden bg-background px-4 pb-20 pt-10 md:px-8 md:pt-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(68,157,209,0.2),transparent_40%),radial-gradient(circle_at_90%_18%,rgba(244,159,4,0.16),transparent_36%),radial-gradient(circle_at_40%_92%,rgba(11,46,94,0.18),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(68,157,209,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,157,209,0.14)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(circle_at_center,black_22%,transparent_82%)]" />

          <div className="relative mx-auto max-w-6xl">
            <header className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Resource Library
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Resources and Flyers
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Browse and share these materials to help students recognize
                risk, respond quickly, and connect to support.
              </p>
            </header>

            <section className="mt-10 grid gap-6 md:grid-cols-3">
              {resources.map((src) => (
                <LazyImage
                  key={src}
                  src={src}
                  alt="SORIV resource flyer"
                  wrapperClassName="w-full"
                  className="w-full object-contain"
                />
              ))}
            </section>

            <section className="mt-12 rounded-2xl border border-secondary/25 bg-gradient-to-r from-secondary/15 via-background to-tertiary/15 p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Need a custom resource?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    We can tailor materials for campus events, student
                    trainings, or partner organizations.
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                  Email the SORIV team
                </span>
              </div>
            </section>
          </div>
        </main>
      </ScrollArea>
    </>
  );
}

export default Resources;
