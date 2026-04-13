import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TwoColumnSection from "@/components/TwoColumnSection";
import MissionBlock from "@/components/MissionBlock";
import WhyChooseUsBlock from "@/components/WhyChooseUsBlock";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LazyImage } from "@/components/LazyImage";

function About() {
  return (
    <>
      <Nav />

      <ScrollArea className="w-full">
        <main className="bg-background">
          {/* Hero Section */}
          <HeroSection
            badge="SORIV Initiative"
            headline="Education, recovery, and community support built with students in mind."
            description="Funded by the Maryland Department of Behavioral Health and developed in collaboration with the UMES Counseling Education Program."
          />

          {/* Two-Column Section 1: About SORIV */}
          <TwoColumnSection
            title="Supporting Opioid Recovery through Innovation & Visibility"
            description="Bringing awareness, trusted resources, and meaningful connection both on campus and in the surrounding community."
            imageUrl="/THE_OPIOID_EPIDEMIC.jpg"
            imageAlt="Opioid awareness campaign visual"
            imageOnLeft={true}
          >
            <p className="mt-4 border-l-2 border-secondary/55 pl-4 text-base leading-7 text-muted-foreground">
              The SORIV Project bridges behavioral health, student leadership,
              and practical digital tools so individuals and families can find
              support faster and make informed decisions.
            </p>
          </TwoColumnSection>

          {/* Two-Column Section 2: Unique Collaboration */}
          <TwoColumnSection
            title="A Unique Collaboration"
            imageUrl="/hands.jpeg"
            imageAlt="Students and community collaboration"
            imageOnLeft={false}
          >
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Counseling Education and Computer Science students are building
              tools together to create practical, community-facing impact.
            </p>

            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  Provide easy access to relevant behavioral health resources.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Increase awareness and opioid education efforts.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  Measure outcomes and improve effectiveness over time.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Strengthen campus-community partnerships.</span>
              </li>
            </ul>
          </TwoColumnSection>

          {/* Two-Column Section 3: Opportunity for Counseling Education Students */}
          <section className="border-t border-secondary/25 py-12 md:py-16 px-4">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <LazyImage
                    src="/opportunity.jpg"
                    alt="Counseling students opportunities"
                    wrapperClassName="aspect-4/3 w-full overflow-hidden rounded-2xl shadow-[0_14px_40px_-30px_var(--color-primary)]"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <article className="md:col-span-7">
                  <h2 className="text-2xl font-semibold text-foreground md:text-4xl">
                    Opportunity for Counseling Education Students
                  </h2>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    Counseling Education students are encouraged to apply for
                    the SORIV Grant Initiative.
                  </p>
                  <ul className="mt-5 grid gap-2 text-muted-foreground sm:grid-cols-2">
                    <li className="rounded-lg bg-secondary/25 px-3 py-2">
                      Professional development experiences
                    </li>
                    <li className="rounded-lg bg-secondary/25 px-3 py-2">
                      Service-learning project completion
                    </li>
                    <li className="rounded-lg bg-secondary/25 px-3 py-2">
                      Community outreach support
                    </li>
                    <li className="rounded-lg bg-secondary/25 px-3 py-2">
                      Awareness event facilitation
                    </li>
                  </ul>
                  <p className="mt-5 inline-block rounded-full border border-secondary/45 px-4 py-1.5 text-sm font-medium text-primary">
                    A stipend is provided for participation.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Two-Column Section 4: Get Involved */}
          <section className="border-t border-secondary/25 py-12 md:py-16 px-4">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <article className="order-2 md:order-1 md:col-span-7 md:col-start-1 md:row-start-1">
                  <h2 className="text-2xl font-semibold text-foreground md:text-4xl">
                    Get Involved. Make an Impact. Be Part of the Solution.
                  </h2>

                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    Our goal is a stronger, more informed community through
                    behavioral health knowledge, student innovation, and local
                    engagement.
                  </p>

                  <p className="mt-5 text-base font-medium text-primary">
                    Contact the SORIV Team through the UMES Counselor Education
                    Program.
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Dr. Kimberly Poole-Sykes, Dept Chair | Angel Cooper, Program
                    Assistant
                  </p>

                  <span className="mt-6 inline-flex w-fit items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary">
                    Contact The Team
                  </span>
                </article>

                <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 md:row-start-1">
                  <LazyImage
                    src="/impact.jpg"
                    alt="Community impact and outreach"
                    wrapperClassName="aspect-4/3 w-full overflow-hidden rounded-2xl shadow-[0_14px_40px_-30px_var(--color-primary)]"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Mission Block */}
          <MissionBlock
            heading="Our Mission"
            content="SORIV is committed to empowering students and communities with evidence-based information, accessible resources, and meaningful support pathways to reduce opioid-related harm and promote recovery."
            centered={true}
          />

          {/* Why Choose This Approach */}
          <WhyChooseUsBlock
            heading="Why This Approach Works"
            subheading="Built by students, for students"
            items={[
              "Students know what students need—relatable, judgment-free information delivered through channels they trust.",
              "Community partnerships amplify our reach and ensure we're meeting real needs beyond campus walls.",
              "Data-driven outcomes mean we continuously improve what works and adjust what doesn't.",
            ]}
          />

          {/* Footer */}
          <Footer />
        </main>
      </ScrollArea>
    </>
  );
}

export default About;
