import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact Us" },
  { to: "/survey", label: "Survey" },
];

function Nav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `h-full font-semibold border-t-4 flex items-center transition-colors ${
      isActive ? "border-t-app-blue text-app-blue-dark" : "border-t-transparent"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `w-full rounded-lg px-3 py-2 font-medium transition-colors ${
      isActive
        ? "bg-app-blue-light/40 text-app-blue-dark"
        : "text-gray-700 hover:bg-app-blue-light/25"
    }`;

  return (
    <>
      <nav className="fixed z-20 h-15 w-full border-b-2 border-b-accent bg-white px-4">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
          <i className="h-full md:text-lg font-bold border-t-4 border-t-transparent flex items-center">
            SOR-IV
          </i>

          <div className="hidden h-full w-[50%] max-w-150 md:flex md:flex-row md:justify-around">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={desktopLinkClass}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors hover:bg-app-blue-light/25 md:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileOpen && (
          <div className="border-b-2 border-b-accent bg-white px-4 pb-4 pt-2 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {navItems.map((item) => (
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
      <div className="w-full h-15"></div>
    </>
  );
}

export default Nav;
