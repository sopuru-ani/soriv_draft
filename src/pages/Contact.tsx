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
      name: "LaKeisha Harris, Ph.D, CRC",
      title: "Dean",
      department: "Graduate Studies",
      phone: "410-651-6080",
      fax: "410-651-7571",
      email: "llharris@umes.edu",
      highlight: "Primary contact",
    },
    {
      name: "Angel Cooper",
      title: "M.S Rehabilitation Counseling",
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
            badge="Contact SORIV"
            headline="Contact Us"
            description="Reach out to the SORIV team for resources, collaborations, or support. We respond to inquiries during standard university business hours."
          />

          {/* Contact Cards */}
          <section className="py-12 md:py-16 px-4">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {contacts.map((contact) => (
                  <article
                    key={contact.email}
                    className="rounded-2xl border border-secondary/25 bg-card/80 p-6 shadow-[0_18px_40px_-30px_var(--color-primary)] backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold text-foreground">
                          {contact.name}
                        </h2>
                        <p className="mt-1 text-sm font-semibold text-primary">
                          {contact.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contact.department}
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-tertiary/40 bg-tertiary/15 px-3 py-1 text-xs font-semibold text-tertiary-foreground">
                        {contact.highlight}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {contact.phone ? (
                        <p>
                          <span className="font-semibold text-foreground">
                            Phone:
                          </span>{" "}
                          <a
                            href={`tel:${contact.phone}`}
                            className="hover:text-primary"
                          >
                            {contact.phone}
                          </a>
                        </p>
                      ) : null}
                      {contact.fax ? (
                        <p>
                          <span className="font-semibold text-foreground">
                            Fax:
                          </span>{" "}
                          {contact.fax}
                        </p>
                      ) : null}
                      <p>
                        <span className="font-semibold text-foreground">
                          Email:
                        </span>{" "}
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-primary hover:underline"
                        >
                          {contact.email}
                        </a>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* General Inquiries Section */}
          <section className="py-12 md:py-16 px-4 border-t border-secondary/25 bg-card/30">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-semibold text-foreground">
                General Inquiries
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a question? Send us an email and we'll get back to you as
                soon as possible.
              </p>
              <a
                href="mailto:soriv@umes.edu"
                className="mt-6 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all duration-300 shadow-[0_12px_28px_-16px_var(--color-primary)]"
              >
                Email SORIV Team
              </a>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </ScrollArea>
    </>
  );
}

export default Contact;
