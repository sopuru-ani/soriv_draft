import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ScrollArea } from "@/components/ui/scroll-area";

function Contact() {
  const contacts = [
    {
      name: "Dr. Kimberly Poole-Sykes",
      title: "Chair and Professor",
      department: "Department of Education",
      phone: "410-651-6220",
      email: "Kjpoolesykes@umes.edu",
      highlight: "Primary contact",
    },
    {
      name: "LaKeisha Harris, Ph.D., CRC",
      title: "Dean",
      department: "Graduate Studies",
      phone: "410-651-6080",
      fax: "410-651-7571",
      email: "llharris@umes.edu",
      highlight: "Primary contact",
    },
    {
      name: "Angel Cooper",
      title: "M.S. Rehabilitation Counseling",
      department: "Counselor Education Program",
      email: "ancooper1@umes.edu",
      highlight: "Program support",
    },
  ];

  return (
    <>
      <Nav />

      <ScrollArea className="w-full">
        <main className="bg-background">
          {/* Hero Section */}
          <HeroSection
            badge="SORIV Team"
            headline="Meet the Team"
            description="Contact our leadership and program support staff to learn more about the SORIV initiative, partnerships, and student services."
          />

          <section className="py-12 md:py-16 px-4">
            <div className="mx-auto max-w-7xl space-y-10">
              {contacts.map((contact) => {
                const initials = contact.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("");

                return (
                  <div
                    key={contact.email}
                    className="grid gap-6 rounded-[2rem] border border-secondary/25 bg-card/60 p-6 shadow-[0_22px_60px_-40px_var(--color-primary)] md:grid-cols-[minmax(280px,34%)_1fr] md:p-8"
                  >
                    <div>
                      <div className="overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-[0_14px_40px_-30px_rgba(0,0,0,0.4)]">
                        <div className="aspect-4/5 flex items-center justify-center bg-linear-to-br from-primary/80 via-secondary/80 to-primary/40 text-7xl font-black uppercase tracking-[0.16em] text-white">
                          {initials}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] bg-secondary/95 p-8 text-white shadow-[0_18px_40px_-30px_rgba(0,0,0,0.4)]">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h2 className="text-3xl font-semibold text-white">
                            {contact.name}
                          </h2>
                          <p className="mt-2 text-sm font-semibold text-primary">
                            {contact.title}
                          </p>
                          <p className="mt-1 text-sm text-white/80">
                            {contact.department}
                          </p>
                        </div>
                        <span className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 sm:mt-0">
                          {contact.highlight}
                        </span>
                      </div>

                      <div className="mt-8 grid gap-4 text-sm text-white/90">
                        {contact.phone ? (
                          <p>
                            <span className="font-semibold text-white">
                              Phone:
                            </span>{" "}
                            <a
                              href={`tel:${contact.phone}`}
                              className="text-white hover:text-primary"
                            >
                              {contact.phone}
                            </a>
                          </p>
                        ) : null}
                        {contact.fax ? (
                          <p>
                            <span className="font-semibold text-white">
                              Fax:
                            </span>{" "}
                            {contact.fax}
                          </p>
                        ) : null}
                        <p>
                          <span className="font-semibold text-white">
                            Email:
                          </span>{" "}
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-white hover:text-primary underline"
                          >
                            {contact.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="border-t border-secondary/25 bg-card/30 py-12 md:py-16 px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-semibold text-foreground">
                General Inquiries
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                For general questions about the SORIV initiative, partnerships,
                or events, send us a direct email and we’ll connect you with the
                right person.
              </p>
              <a
                href="mailto:soriv@umes.edu"
                className="mt-6 inline-flex items-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition duration-300 hover:-translate-y-0.5 shadow-[0_12px_28px_-16px_var(--color-primary)]"
              >
                Email the SORIV Team
              </a>
            </div>
          </section>

          <Footer />
        </main>
      </ScrollArea>
    </>
  );
}

export default Contact;
