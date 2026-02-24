import React from "react";
import Nav from "@/components/Nav";
import { ScrollArea } from "@/components/ui/scroll-area";

function Home() {
  return (
    <>
      <Nav />
      <ScrollArea className="h-[calc(100dvh-3.75rem)] w-full">
        <main className="relative overflow-hidden bg-background px-4 pb-20 pt-10 md:px-8 md:pt-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-linear-to-b from-app-blue-light/25 to-transparent" />
          <div className="mx-auto max-w-6xl">
            <header className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-app-blue-dark">
                SORIV Education Hub
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight text-gray-900 md:text-6xl dark:text-gray-100">
                Understanding the Opioid Crisis
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-gray-700 md:text-lg dark:text-gray-300">
                A public health emergency marked by increased misuse, overdose
                risk, and preventable loss of life in communities across
                Maryland and beyond.
              </p>
            </header>

            <section className="mt-14 border-t border-app-blue/20 pt-10 md:mt-16">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <img
                    src="/drugneedle.jpg"
                    alt="Substance use and needles"
                    className="aspect-4/3 w-full rounded-2xl object-cover shadow-[0_14px_40px_-30px_var(--color-app-blue-dark)]"
                  />
                </div>
                <article className="md:col-span-7">
                  <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl dark:text-gray-100">
                    Why This Matters Right Now
                  </h2>
                  <p className="mt-4 text-lg text-app-blue-dark">
                    The opioid crisis affects students, families, and whole
                    neighborhoods.
                  </p>
                  <p className="mt-4 border-l-2 border-app-blue/45 pl-4 text-base leading-7 text-gray-700 dark:text-gray-300">
                    SORIV focuses on clear education and practical response so
                    people can recognize warning signs early and connect to help
                    quickly.
                  </p>
                </article>
              </div>
            </section>

            <section className="mt-14 border-t border-app-blue/20 pt-10 md:mt-16">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <article className="order-2 md:order-1 md:col-span-7 md:col-start-1 md:row-start-1">
                  <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl dark:text-gray-100">
                    What Are Opioids?
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-700 dark:text-gray-300">
                    Opioids are a class of drugs that include prescription pain
                    relievers and illegal substances. Misuse of either can cause
                    dependence, overdose, and death.
                  </p>
                </article>
                <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 md:row-start-1">
                  <img
                    src="/opioidtypes.png"
                    alt="Types of opioids"
                    className="aspect-4/3 w-full rounded-2xl object-cover shadow-[0_14px_40px_-30px_var(--color-app-blue-dark)]"
                  />
                </div>
              </div>
            </section>

            <section className="mt-14 border-t border-app-blue/20 pt-10 md:mt-16">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <article className="md:col-span-7">
                  <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl dark:text-gray-100">
                    Maryland Overdose Snapshot
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-700 dark:text-gray-300">
                    In Maryland, there are 2,500+ annual intoxication deaths,
                    and 80-90% of these deaths now involve synthetic opioids,
                    especially fentanyl.
                  </p>
                  <p className="mt-5 inline-block rounded-full border border-app-blue/30 px-4 py-1.5 text-sm font-medium text-app-blue-dark">
                    Fast action and prevention save lives.
                  </p>
                </article>
                <div className="md:col-span-5">
                  <div className="overflow-hidden rounded-3xl border-2 border-app-blue shadow-[0_14px_40px_-30px_var(--color-app-blue-dark)]">
                    <div className="bg-[#5b1f35] px-6 py-5 text-center text-white">
                      <p className="text-2xl font-semibold leading-tight">
                        In Maryland
                      </p>
                      <p className="mt-2 text-lg font-medium">
                        2,500+ annual intoxication deaths
                      </p>
                    </div>
                    <div className="bg-[#e53943] px-6 py-7 text-center text-white">
                      <p className="text-5xl font-bold leading-none">80-90%</p>
                      <p className="mt-3 text-xl font-semibold leading-tight">
                        now involve synthetic opioids, fentanyl
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-14 border-t border-app-blue/20 pt-10 md:mt-16">
              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-app-blue/25 bg-white/60 p-6 shadow-[0_14px_40px_-36px_var(--color-app-blue-dark)] dark:bg-gray-900/30">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Opioid Misuse Signs
                  </h2>
                  <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                      <span>Unresponsiveness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                      <span>Pinpoint pupils</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                      <span>Fevers and body aches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                      <span>
                        Failure to meet work or school responsibilities
                      </span>
                    </li>
                  </ul>
                  <span className="mt-6 inline-flex w-fit items-center rounded-full bg-app-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-app-blue-dark">
                    Get Help Now
                  </span>
                </article>

                <article className="rounded-2xl border border-app-blue/25 bg-white/60 p-6 shadow-[0_14px_40px_-36px_var(--color-app-blue-dark)] dark:bg-gray-900/30">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    How Can You Respond?
                  </h2>
                  <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                      <span>Recognize the signs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                      <span>Contact 911 immediately</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                      <span>Administer Narcan if available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                      <span>Stay with the person until help arrives</span>
                    </li>
                  </ul>
                  <span className="mt-6 inline-flex w-fit items-center rounded-full bg-app-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-app-blue-dark">
                    Learn More
                  </span>
                </article>
              </div>
            </section>

            <section className="mt-14 border-t border-app-blue/20 pt-10 md:mt-16">
              <article className="max-w-4xl rounded-2xl bg-app-blue-light/35 p-6 md:p-8">
                <p className="text-lg font-medium italic text-app-blue-dark md:text-xl">
                  Prevention is better than cure.
                </p>
                <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                    <span>Let your source be the right source.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                    <span>Take medication only as prescribed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                    <span>
                      Use a drug take-back program to dispose of unused
                      medication safely.
                    </span>
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
