import React from "react";
import Nav from "@/components/Nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LazyImage } from "@/components/LazyImage";

function Home() {
  return (
    <>
      <Nav />
      <ScrollArea className="h-[calc(100dvh-3.75rem)] w-full">
        <main className="relative overflow-hidden bg-background px-4 pb-20 pt-10 md:px-8 md:pt-16">
          <style>{`
            @keyframes homeRise {
              from {
                opacity: 0;
                transform: translateY(26px) scale(0.98);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            @keyframes homeDrift {
              0%,
              100% {
                transform: translate3d(0, 0, 0);
              }
              50% {
                transform: translate3d(0, -16px, 0);
              }
            }
            @keyframes homeSpin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            @keyframes homePulse {
              0%,
              100% {
                opacity: 0.45;
              }
              50% {
                opacity: 0.85;
              }
            }
          `}</style>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(68,157,209,0.25),transparent_36%),radial-gradient(circle_at_88%_20%,rgba(244,159,4,0.18),transparent_34%),radial-gradient(circle_at_40%_86%,rgba(11,46,94,0.2),transparent_36%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(68,157,209,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,157,209,0.16)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black_20%,transparent_80%)]" />
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-secondary/35 blur-3xl [animation:homeDrift_11s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute right-[-5rem] top-[12rem] h-80 w-80 rounded-full bg-tertiary/25 blur-3xl [animation:homePulse_10s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full border-2 border-secondary/40 [animation:homeSpin_30s_linear_infinite]" />

          <div className="relative mx-auto max-w-6xl font-['Outfit',sans-serif]">
            <section className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <header className="lg:col-span-8 [animation:homeRise_0.7s_ease-out_forwards]">
                <p className="inline-flex items-center gap-2 rounded-lg border border-secondary/40 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                  SORIV Education Hub
                </p>
                <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
                  Real talk about opioids,
                  <span className="block bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                    risk, and how to protect your people.
                  </span>
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                  Quick, clear, and student-friendly info for spotting warning
                  signs early, reducing harm, and getting support fast on campus
                  and in your community.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_28px_-16px_var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary">
                    Explore Resources
                  </button>
                  <button className="rounded-xl border border-secondary/45 bg-background/70 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-secondary hover:bg-background">
                    Take the Survey
                  </button>
                </div>
              </header>

              <aside className="lg:col-span-4 [animation:homeRise_0.85s_ease-out_0.1s_forwards] [opacity:0]">
                <div className="rounded-xl border border-secondary/30 bg-card/80 p-5 shadow-[0_18px_44px_-30px_var(--color-primary)] backdrop-blur-sm">
                  <p className="text-sm font-semibold text-primary">
                    Maryland Snapshot
                  </p>
                  <p className="mt-2 text-5xl font-black leading-none text-foreground">
                    2,500+
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    annual intoxication deaths
                  </p>
                  <div className="mt-4 rounded-lg bg-tertiary px-4 py-4 text-tertiary-foreground">
                    <p className="text-2xl font-bold">80-90%</p>
                    <p className="mt-1 text-sm">
                      involve synthetic opioids, mostly fentanyl.
                    </p>
                  </div>
                </div>
              </aside>
            </section>

            <section className="mt-8 grid gap-4 [animation:homeRise_0.9s_ease-out_0.18s_forwards] [opacity:0] md:grid-cols-3">
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
            </section>

            <section className="mt-14 grid gap-8 border-t border-secondary/25 pt-10 md:grid-cols-12 md:items-center [animation:homeRise_0.9s_ease-out_0.26s_forwards] [opacity:0]">
              <div className="md:col-span-5">
                <LazyImage
                  src="/drugneedle.jpg"
                  alt="Substance use and needles"
                  wrapperClassName="aspect-4/3 w-full overflow-hidden rounded-xl shadow-[0_20px_40px_-28px_var(--color-primary)]"
                  className="h-full w-full object-cover"
                />
              </div>
              <article className="md:col-span-7">
                <h2 className="text-2xl font-bold text-foreground md:text-4xl">
                  Why this matters right now
                </h2>
                <p className="mt-4 text-lg font-medium text-primary">
                  The crisis hits students, families, and friend groups directly.
                </p>
                <p className="mt-4 border-l-4 border-secondary/70 pl-4 text-base leading-7 text-muted-foreground">
                  SORIV gives practical guidance so people can recognize risk,
                  respond with confidence, and connect to support before a
                  situation becomes fatal.
                </p>
              </article>
            </section>

            <section className="mt-14 grid gap-8 border-t border-secondary/25 pt-10 md:grid-cols-12 md:items-center [animation:homeRise_0.9s_ease-out_0.34s_forwards] [opacity:0]">
              <article className="md:col-span-7">
                <h2 className="text-2xl font-bold text-foreground md:text-4xl">
                  What are opioids?
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  Opioids include prescription pain medicines and illegal
                  substances. Misuse can quickly lead to dependence, overdose,
                  and death, especially with fentanyl in the drug supply.
                </p>
              </article>
              <div className="md:col-span-5">
                <LazyImage
                  src="/opioidtypes.png"
                  alt="Types of opioids"
                  wrapperClassName="aspect-4/3 w-full overflow-hidden rounded-xl shadow-[0_20px_40px_-28px_var(--color-primary)]"
                  className="h-full w-full object-cover"
                />
              </div>
            </section>

            <section className="mt-14 grid gap-6 border-t border-secondary/25 pt-10 [animation:homeRise_0.9s_ease-out_0.42s_forwards] [opacity:0] md:grid-cols-2">
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

              <article className="rounded-xl border border-secondary/25 bg-card/80 p-6 shadow-[0_18px_40px_-30px_var(--color-primary)] transition-transform duration-300">
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
            </section>

            <section className="mt-14 border-t border-secondary/25 pt-10 [animation:homeRise_0.9s_ease-out_0.5s_forwards] [opacity:0]">
              <article className="rounded-xl bg-gradient-to-r from-secondary/20 via-background to-tertiary/20 p-6 md:p-8">
                <p className="text-lg font-semibold italic text-primary md:text-xl">
                  Prevention beats panic.
                </p>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Only trust reliable health information sources.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Take medication exactly as prescribed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Use drug take-back programs for unused medication.</span>
                  </li>
                </ul>
              </article>
            </section>
          </div>
        </main>
      </ScrollArea>
    </>
  );
}

export default Home;
