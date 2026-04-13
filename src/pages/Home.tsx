import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TwoColumnSection from "@/components/TwoColumnSection";
import MissionBlock from "@/components/MissionBlock";
import WhyChooseUsBlock from "@/components/WhyChooseUsBlock";
import CtaStrip from "@/components/CtaStrip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LazyImage } from "@/components/LazyImage";

function Home() {
  return (
    <>
      <Nav />
      <ScrollArea className="w-full">
        <main className="bg-background">
          {/* Hero Section */}
          <HeroSection
            badge="SORIV Education Hub"
            headline="Real talk about opioids, risk, and how to protect your people."
            description="Quick, clear, and student-friendly info for spotting warning signs early, reducing harm, and getting support fast on campus and in your community."
            ctaButtons={[
              { label: "Explore Resources", isPrimary: true },
              { label: "Take the Survey", isPrimary: false },
            ]}
          />

          {/* Key Stat Section */}
          <section className="py-12 md:py-16 px-4 bg-card/30 border-t border-secondary/25">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-secondary/30 bg-card/80 p-6 shadow-[0_18px_44px_-30px_var(--color-primary)]">
                  <p className="text-sm font-semibold text-primary">
                    Maryland Snapshot
                  </p>
                  <p className="mt-3 text-5xl font-black leading-none text-foreground">
                    2,500+
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    annual intoxication deaths
                  </p>
                  <div className="mt-6 rounded-lg bg-tertiary px-4 py-4 text-tertiary-foreground">
                    <p className="text-2xl font-bold">80-90%</p>
                    <p className="mt-1 text-sm">
                      involve synthetic opioids, mostly fentanyl.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Quick Action Cards */}
          <section className="py-8 md:py-12 px-4">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  "Know the signs",
                  "Carry naloxone",
                  "Connect someone to care",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-secondary/25 bg-card/70 px-4 py-3 text-sm font-medium text-foreground shadow-[0_12px_30px_-28px_var(--color-primary)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/45"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Two-Column Section 1: Why This Matters */}
          <TwoColumnSection
            title="Why this matters right now"
            description="The crisis hits students, families, and friend groups directly."
            imageUrl="/drugneedle.jpg"
            imageAlt="Substance use and needles"
            imageOnLeft={true}
          >
            <p className="mt-4 border-l-4 border-secondary/70 pl-4 text-base leading-7 text-muted-foreground">
              SORIV gives practical guidance so people can recognize risk,
              respond with confidence, and connect to support before a situation
              becomes fatal.
            </p>
          </TwoColumnSection>

          {/* Two-Column Section 2: What Are Opioids */}
          <TwoColumnSection
            title="What are opioids?"
            imageUrl="/opioidtypes.png"
            imageAlt="Types of opioids"
            imageOnLeft={false}
          >
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Opioids include prescription pain medicines and illegal
              substances. Misuse can quickly lead to dependence, overdose, and
              death, especially with fentanyl in the drug supply.
            </p>
          </TwoColumnSection>
          {/* Signs and Response Cards Section */}
          <section className="py-12 md:py-16 px-4 border-t border-secondary/25">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-xl border border-secondary/25 bg-card/80 p-6 shadow-[0_18px_40px_-30px_var(--color-primary)] transition-transform duration-300 hover:-translate-y-1">
                  <h2 className="text-2xl font-bold text-foreground">
                    Opioid misuse signs
                  </h2>
                  <ul className="mt-5 space-y-3 text-muted-foreground">
                    {[
                      "Unresponsiveness",
                      "Pinpoint pupils",
                      "Fevers and body aches",
                      "Missing work or school responsibilities",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-xl border border-secondary/25 bg-card/80 p-6 shadow-[0_18px_40px_-30px_var(--color-primary)] transition-transform duration-300 hover:-translate-y-1">
                  <h2 className="text-2xl font-bold text-foreground">
                    How to respond fast
                  </h2>
                  <ul className="mt-5 space-y-3 text-muted-foreground">
                    {[
                      "Recognize overdose signs",
                      "Call 911 immediately",
                      "Administer naloxone if available",
                      "Stay until medical help arrives",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-tertiary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* Mission Block: Prevention */}
          <MissionBlock heading="Prevention beats panic." centered={true}>
            <ul className="mt-8 space-y-4">
              {[
                "Only trust reliable health information sources.",
                "Take medication exactly as prescribed.",
                "Use drug take-back programs for unused medication.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 justify-center">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-base leading-7 text-muted-foreground max-w-xl">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </MissionBlock>

          {/* Why Choose Us Block */}
          <WhyChooseUsBlock
            heading="Why SORIV Matters"
            subheading="Supporting your health and safety every step of the way"
            items={[
              "Provides easy access to relevant behavioral health resources.",
              "Increases awareness and opioid education efforts.",
              "Measures outcomes and improves effectiveness over time.",
            ]}
          />

          {/* CTA Strip */}
          <CtaStrip
            statement="Ready to learn more and make a difference?"
            buttonLabel="Take the Survey"
            buttonHref="/survey"
          />

          {/* Footer */}
          <Footer />
        </main>
      </ScrollArea>
    </>
  );
}

export default Home;
