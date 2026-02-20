function About() {
  return (
    <main className="relative overflow-hidden bg-background px-4 pb-20 pt-10 md:px-8 md:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-app-blue-light/25 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-app-blue-dark">
            SORIV Initiative
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-gray-900 md:text-6xl dark:text-gray-100">
            Supporting Opioid Recovery Through Education, Technology, and
            Community
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-700 md:text-lg dark:text-gray-300">
            Funded by the Maryland Department of Behavioral Health and developed
            in collaboration with the UMES Counseling Education Program.
          </p>
        </header>

        <section className="mt-14 border-t border-app-blue/20 pt-10 md:mt-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <img
                src="/THE_OPIOID_EPIDEMIC.jpg"
                alt="Opioid awareness campaign visual"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_14px_40px_-30px_var(--color-app-blue-dark)]"
              />
            </div>
            <article className="md:col-span-7">
              <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl dark:text-gray-100">
                Supporting Opioid Recovery through Innovation & Visibility
              </h2>
              <p className="mt-4 text-lg text-app-blue-dark">
                Bringing awareness, trusted resources, and meaningful connection
                both on campus and in the surrounding community.
              </p>
              <p className="mt-4 border-l-2 border-app-blue/45 pl-4 text-base leading-7 text-gray-700 dark:text-gray-300">
                The SORIV Project bridges behavioral health, student leadership,
                and practical digital tools so individuals and families can find
                support faster and make informed decisions.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-14 border-t border-app-blue/20 pt-10 md:mt-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            {/* Text */}
            <article className="order-2 md:order-1 md:col-span-7 md:col-start-1 md:row-start-1">
              <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl dark:text-gray-100">
                A Unique Collaboration
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-700 dark:text-gray-300">
                Counseling Education and Computer Science students are building
                tools together to create practical, community-facing impact.
              </p>

              <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                  <span>
                    Provide easy access to relevant behavioral health resources.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                  <span>Increase awareness and opioid education efforts.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                  <span>
                    Measure outcomes and improve effectiveness over time.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-app-blue" />
                  <span>Strengthen campus-community partnerships.</span>
                </li>
              </ul>
            </article>

            {/* Image */}
            <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 md:row-start-1">
              <img
                src="/hands.jpeg"
                alt="Students and community collaboration"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_14px_40px_-30px_var(--color-app-blue-dark)]"
              />
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-app-blue/20 pt-10 md:mt-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <img
                src="/opportunity.jpg"
                alt="Counseling students opportunities"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_14px_40px_-30px_var(--color-app-blue-dark)]"
              />
            </div>
            <article className="md:col-span-7">
              <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl dark:text-gray-100">
                Opportunity for Counseling Education Students
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-700 dark:text-gray-300">
                Counseling Education students are encouraged to apply for the
                SORIV Grant Initiative.
              </p>
              <ul className="mt-5 grid gap-2 text-gray-700 dark:text-gray-300 sm:grid-cols-2">
                <li className="rounded-lg bg-app-blue-light/35 px-3 py-2">
                  Professional development experiences
                </li>
                <li className="rounded-lg bg-app-blue-light/35 px-3 py-2">
                  Service-learning project completion
                </li>
                <li className="rounded-lg bg-app-blue-light/35 px-3 py-2">
                  Community outreach support
                </li>
                <li className="rounded-lg bg-app-blue-light/35 px-3 py-2">
                  Awareness event facilitation
                </li>
              </ul>
              <p className="mt-5 inline-block rounded-full border border-app-blue/30 px-4 py-1.5 text-sm font-medium text-app-blue-dark">
                A stipend is provided for participation.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-14 border-t border-app-blue/20 pt-10 md:mt-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            {/* Text */}
            <article className="order-2 md:order-1 md:col-span-7 md:col-start-1 md:row-start-1">
              <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl dark:text-gray-100">
                Get Involved. Make an Impact. Be Part of the Solution.
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-700 dark:text-gray-300">
                Our goal is a stronger, more informed community through
                behavioral health knowledge, student innovation, and local
                engagement.
              </p>

              <p className="mt-5 text-base font-medium text-app-blue-dark">
                Contact the SORIV Team through the UMES Counselor Education
                Program.
              </p>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Dr. Kimberly Poole-Sykes, Dept Chair | Angel Cooper, Program
                Assistant
              </p>

              <span className="mt-6 inline-flex w-fit items-center rounded-full bg-app-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-app-blue-dark">
                Contact The Team
              </span>
            </article>

            {/* Image */}
            <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 md:row-start-1">
              <img
                src="/impact.jpg"
                alt="Community impact and outreach"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_14px_40px_-30px_var(--color-app-blue-dark)]"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
