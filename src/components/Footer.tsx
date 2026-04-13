import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-secondary/25 bg-background py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Quick Office Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Quick Office Links
            </h3>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Student Services */}
              <div>
                <p className="text-sm font-semibold text-primary">
                  Student Services
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Admission Info
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Financial Aid
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Student Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Campus Life
                    </a>
                  </li>
                </ul>
              </div>

              {/* Research & Programs */}
              <div>
                <p className="text-sm font-semibold text-primary">
                  Research & Programs
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Graduate Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Research Centers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Faculty Directory
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Publications
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Event/Flyer area */}
          <div className="flex items-center justify-center rounded-lg border border-secondary/25 bg-card/40 p-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-muted-foreground">
                Featured Event
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                Upcoming Seminar
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Check back for details
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-secondary/25" />

        {/* Bottom footer */}
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/20 text-primary hover:bg-secondary/40 transition-colors"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/20 text-primary hover:bg-secondary/40 transition-colors"
              aria-label="Twitter"
            >
              𝕏
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/20 text-primary hover:bg-secondary/40 transition-colors"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/20 text-primary hover:bg-secondary/40 transition-colors"
              aria-label="Instagram"
            >
              📷
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>123 University Drive, City, ST 12345</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>info@university.edu</span>
            </div>
          </div>
        </div>

        {/* Copyright & Accreditation */}
        <div className="mt-6 border-t border-secondary/25 pt-6">
          <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>&copy; 2025 University Name. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">
                Accessibility
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Accreditation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
