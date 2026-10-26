import React, { useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ScrollArea } from "@/components/ui/scroll-area";

type ProfileImageProps = {
  src?: string;
  name: string;
};

function ProfileImage({ src, name }: ProfileImageProps) {
  const [error, setError] = useState(false);

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="aspect-square w-full self-start overflow-hidden rounded-2xl bg-muted">
      {!error && src ? (
        <img
          src={src}
          alt={name}
          onError={() => setError(true)}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-2xl font-semibold tracking-wide text-primary">
          {initials}
        </div>
      )}
    </div>
  );
}

type PersonCardProps = {
  src?: string;
  name: string;
  title: string;
  department: string;
  children: React.ReactNode;
};

function PersonRow({ src, name, title, department, children }: PersonCardProps) {
  return (
    <div className="grid items-start gap-6 border-b border-border py-10 last:border-b-0 md:grid-cols-[160px_minmax(0,1fr)] md:gap-10">
      <ProfileImage src={src} name={name} />
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          {name}
        </h2>
        <div className="mt-3 h-1 max-w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary" />
        <p className="mt-4 text-sm font-medium text-primary">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{department}</p>
        <div className="mt-5 space-y-1.5 text-sm text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <>
      <ScrollArea className="w-full">
        <main className="bg-background">
          <HeroSection
            badge="SOR IV Team"
            headline="Meet the Team"
            description="Contact our leadership and program support staff to learn more about the SOR IV initiative, partnerships, and student services."
          />

          <section className="px-4 py-12 md:py-16">
            <div className="mx-auto max-w-3xl">
              <PersonRow
                src="/DrKimberlyPooleSykes.webp"
                name="Dr. Kimberly Poole-Sykes"
                title="Chair and Professor"
                department="Department of Education"
              >
                <p>
                  <span className="font-medium text-foreground">Phone:</span>{" "}
                  <a
                    href="tel:4106516220"
                    className="hover:text-primary transition-colors"
                  >
                    410-651-6220
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <a
                    href="mailto:Kjpoolesykes@umes.edu"
                    className="hover:text-primary transition-colors"
                  >
                    Kjpoolesykes@umes.edu
                  </a>
                </p>
              </PersonRow>

              <PersonRow
                src="/Dr.Lakeisha-Harris.webp"
                name="LaKeisha Harris, Ph.D., CRC"
                title="Dean"
                department="Graduate Studies"
              >
                <p>
                  <span className="font-medium text-foreground">Phone:</span>{" "}
                  <a
                    href="tel:4106516080"
                    className="hover:text-primary transition-colors"
                  >
                    410-651-6080
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">Fax:</span>{" "}
                  410-651-7571
                </p>
                <p>
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <a
                    href="mailto:llharris@umes.edu"
                    className="hover:text-primary transition-colors"
                  >
                    llharris@umes.edu
                  </a>
                </p>
              </PersonRow>

              <PersonRow
                src="/images/cooper.jpg"
                name="Angel Cooper"
                title="M.S. Rehabilitation Counseling"
                department="Counselor Education Program"
              >
                <p>
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <a
                    href="mailto:ancooper1@umes.edu"
                    className="hover:text-primary transition-colors"
                  >
                    ancooper1@umes.edu
                  </a>
                </p>
              </PersonRow>
            </div>
          </section>

          <Footer />
        </main>
      </ScrollArea>
    </>
  );
}

export default Contact;
