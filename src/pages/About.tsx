import React from "react";
import Nav from "@/components/Nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LazyImage } from "@/components/LazyImage";
function About() {
  return (
    <>
      <Nav />

      <ScrollArea className="h-[calc(100dvh-3.75rem)] w-full">
        <main className="relative overflow-hidden bg-background px-4 pb-20 pt-10 md:px-8 md:pt-16">
          <style>{`
            @keyframes homeFadeUp {
              from {
                opacity: 0;
                transform: translateY(24px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes homeFloat {
              0%,
              100% {
                transform: translate3d(0, 0, 0);
              }
              50% {
                transform: translate3d(0, -14px, 0);
              }
            }
            @keyframes homePulse {
              0%,
              100% {
                opacity: 0.45;
              }
              50% {
                opacity: 0.8;
              }
            }
          `}</style>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(68,157,209,0.25),transparent_36%),radial-gradient(circle_at_88%_20%,rgba(244,159,4,0.18),transparent_34%),radial-gradient(circle_at_40%_86%,rgba(11,46,94,0.2),transparent_36%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(68,157,209,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,157,209,0.16)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black_20%,transparent_80%)]" />
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-secondary/35 blur-3xl [animation:homeFloat_12s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute right-[-5rem] top-[12rem] h-80 w-80 rounded-full bg-tertiary/25 blur-3xl [animation:homePulse_10s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full border-2 border-secondary/40 [animation:homeFloat_18s_ease-in-out_infinite]" />
          <div className="relative mx-auto max-w-6xl">
            <header className="max-w-4xl [animation:homeFadeUp_0.8s_ease-out_forwards]">
              <p className="inline-flex items-center gap-2 rounded-lg border border-secondary/40 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                SORIV Initiative
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
                Education, recovery, and community support
                <span className="block bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                  built with students in mind.
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                Funded by the Maryland Department of Behavioral Health and
                developed in collaboration with the UMES Counseling Education
                Program.
              </p>
            </header>

            <section className="mt-14 border-t border-secondary/25 pt-10 [animation:homeFadeUp_0.85s_ease-out_0.12s_forwards] [opacity:0] md:mt-16">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <LazyImage
                    src="/THE_OPIOID_EPIDEMIC.jpg"
                    alt="Opioid awareness campaign visual"
                    wrapperClassName="aspect-4/3 w-full overflow-hidden rounded-2xl shadow-[0_14px_40px_-30px_var(--color-primary)]"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <article className="md:col-span-7">
                  <h2 className="text-2xl font-semibold text-foreground md:text-4xl">
                    Supporting Opioid Recovery through Innovation & Visibility
                  </h2>
                  <p className="mt-4 text-lg text-primary">
                    Bringing awareness, trusted resources, and meaningful
                    connection both on campus and in the surrounding community.
                  </p>
                  <p className="mt-4 border-l-2 border-secondary/55 pl-4 text-base leading-7 text-muted-foreground">
                    The SORIV Project bridges behavioral health, student
                    leadership, and practical digital tools so individuals and
                    families can find support faster and make informed
                    decisions.
                  </p>
                </article>
              </div>
            </section>

            <section className="mt-14 border-t border-secondary/25 pt-10 [animation:homeFadeUp_0.85s_ease-out_0.24s_forwards] [opacity:0] md:mt-16">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                {/* Text */}
                <article className="order-2 md:order-1 md:col-span-7 md:col-start-1 md:row-start-1">
                  <h2 className="text-2xl font-semibold text-foreground md:text-4xl">
                    A Unique Collaboration
                  </h2>

                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    Counseling Education and Computer Science students are
                    building tools together to create practical,
                    community-facing impact.
                  </p>

                  <ul className="mt-5 space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>
                        Provide easy access to relevant behavioral health
                        resources.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>
                        Increase awareness and opioid education efforts.
                      </span>
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
                </article>

                {/* Image */}
                <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 md:row-start-1">
                  <LazyImage
                    src="/hands.jpeg"
                    alt="Students and community collaboration"
                    wrapperClassName="aspect-4/3 w-full overflow-hidden rounded-2xl shadow-[0_14px_40px_-30px_var(--color-primary)]"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
            </section>

            <section className="mt-14 border-t border-secondary/25 pt-10 [animation:homeFadeUp_0.85s_ease-out_0.36s_forwards] [opacity:0] md:mt-16">
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
            </section>

            <section className="mt-14 border-t border-secondary/25 pt-10 [animation:homeFadeUp_0.85s_ease-out_0.48s_forwards] [opacity:0] md:mt-16">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                {/* Text */}
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

                {/* Image */}
                <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 md:row-start-1">
                  <LazyImage
                    src="/impact.jpg"
                    alt="Community impact and outreach"
                    wrapperClassName="aspect-4/3 w-full overflow-hidden rounded-2xl shadow-[0_14px_40px_-30px_var(--color-primary)]"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </ScrollArea>
    </>
  );
}

export default About;
