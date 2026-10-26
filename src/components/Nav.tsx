import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const mainNavItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/survey", label: "Survey" },
  { to: "/contact", label: "Contact Us" },
];

const PILL_WIDTH = 28; // matches w-7

function isItemActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

function Nav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navListRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pillLeft, setPillLeft] = useState<number | null>(null);

  const updatePill = () => {
    const activeIndex = mainNavItems.findIndex((item) =>
      isItemActive(location.pathname, item.to),
    );
    const link = linkRefs.current[activeIndex];
    const container = navListRef.current;
    if (!link || !container || activeIndex < 0) {
      setPillLeft(null);
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setPillLeft(
      linkRect.left - containerRect.left + linkRect.width / 2 - PILL_WIDTH / 2,
    );
  };

  useLayoutEffect(() => {
    updatePill();
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [location.pathname]);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative flex h-full items-center px-3 font-semibold text-sm transition-colors ${
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:text-foreground"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `w-full rounded-lg px-3 py-2 font-medium transition-colors ${
      isActive
        ? "bg-secondary/30 text-primary"
        : "text-muted-foreground hover:bg-secondary/20"
    }`;

  return (
    <>
      {/* Primary navbar */}
      <nav className="fixed z-40 top-0 w-full border-b border-accent bg-background px-4">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          {/* Logo placeholder */}
          <div className="flex-shrink-0">
            <div className="text-sm md:text-base font-bold text-foreground">
              SOR <span className="text-red-500">IV</span>
            </div>
          </div>

          {/* Desktop main nav */}
          <div
            ref={navListRef}
            className="relative hidden h-full md:flex md:flex-row md:items-center md:gap-8"
          >
            {mainNavItems.map((item, index) => (
              <React.Fragment key={item.to}>
                <NavLink
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  to={item.to}
                  className={desktopLinkClass}
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
                {index < mainNavItems.length - 1 && (
                  <span aria-hidden className="h-4 w-px bg-border" />
                )}
              </React.Fragment>
            ))}
            {pillLeft !== null && (
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-2 h-1 rounded-full bg-primary transition-[left] duration-300 ease-out"
                style={{ left: pillLeft, width: PILL_WIDTH }}
              />
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary/20 md:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="border-t border-accent bg-background px-4 pb-4 pt-2 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={mobileLinkClass}
                  end={item.to === "/"}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="w-full h-16"></div>
    </>
  );
}

export default Nav;
