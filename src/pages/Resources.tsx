import React from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
// import CtaStrip from "@/components/CtaStrip";
import ResourceSlideshow from "@/components/ResourceSlideshow";
import { ScrollArea } from "@/components/ui/scroll-area";

function Resources() {
  const resources = [
    "/flyer-1.png",
    "/flyer-2.png",
    "/flyer-3.png",
    "/save-a-life.png",
    "/not-alone.png",
  ];

  return (
    <>
      <ScrollArea className="w-full">
        <main className="bg-background">
          {/* Hero Section */}
          <HeroSection
            badge="Resource Library"
            headline="Resources and Flyers"
            description="Browse and share these materials to help students recognize risk, respond quickly, and connect to support."
            ctaButtons={[{ label: "Download All Resources", isPrimary: true }]}
          />

          {/* Resource Layout */}
          <section className="py-12 md:py-16 px-4">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                Featured Flyers & Materials
              </h2>
              <ResourceSlideshow images={resources} />
            </div>
          </section>

          {/* CTA: Custom Resources — parked for now
          <CtaStrip
            statement="Need a custom resource for your campus event or training?"
            buttonLabel="Email the SOR IV team"
            buttonHref="mailto:soriv@umes.edu"
          />
          */}

          <section className="border-t border-border px-4 py-12 md:py-16">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-2xl font-semibold text-foreground">
                External Resources
              </h2>
              <div className="mt-6 h-1 max-w-48 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary" />
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href="https://website-media.com/somerset-county-health-departmetn/somerset-co-health-dept-2024/2026/03/20155301/March-2026-Tri-County-Resource-Guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors hover:text-secondary"
                  >
                    March 2026 Tri-County Resource Guide (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <Footer />
        </main>
      </ScrollArea>
    </>
  );
}

export default Resources;
