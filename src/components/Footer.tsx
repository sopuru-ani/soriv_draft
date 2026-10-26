import React from "react";

const quickLinks = [
  {
    label: "UMES Graduate Studies",
    href: "https://www.umes.edu/grad/",
  },
  {
    label: "UMES Department of Education",
    href: "https://www.umes.edu/education/",
  },
  {
    label: "UMES Counselor Education",
    href: "https://www.umes.edu/education/counselor-education/",
  },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-colors hover:text-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
