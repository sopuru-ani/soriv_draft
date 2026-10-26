import React, { useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
// import CtaStrip from "@/components/CtaStrip";
import ResourceSlideshow from "@/components/ResourceSlideshow";
import { ScrollArea } from "@/components/ui/scroll-area";

const resources = [
  "/flyer-1.png",
  "/flyer-2.png",
  "/flyer-3.png",
  "/save-a-life.png",
  "/not-alone.png",
  "/Fact Sheet Fentanyl.png",
  "/Recovery.png",
  "/Support.png",
];

function filenameFromSrc(src: string) {
  return decodeURIComponent(src.split("/").pop() || "resource.png");
}

async function downloadAllResources(urls: string[]) {
  for (const url of urls) {
    const response = await fetch(encodeURI(url));
    if (!response.ok) continue;
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = filenameFromSrc(url);
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
    // Stagger so the browser doesn't block rapid multi-downloads
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}

function Resources() {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadAll = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      await downloadAllResources(resources);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <ScrollArea className="w-full">
        <main className="bg-background">
          <HeroSection
            badge="Resource Library"
            headline="Resources and Flyers"
            description="Browse and share these materials to help students recognize risk, respond quickly, and connect to support."
            ctaButtons={[
              {
                label: downloading
                  ? "Downloading…"
                  : "Download All Resources",
                isPrimary: true,
                onClick: handleDownloadAll,
              },
            ]}
          />

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
