import { useState, useEffect, useRef } from "react";
import CurvedMenu from "../ui/CurvedMenu";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > window.innerHeight * 0.5);
      if (Math.abs(y - lastY.current) > 5) {
        setScrollingDown(y > lastY.current && y > 80);
        lastY.current = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          open
            ? "border-transparent bg-transparent"
            : scrolled
              ? "border-neutral-800/80 bg-neutral-950/80 backdrop-blur"
              : "border-transparent bg-transparent",
          scrolled ? "md:translate-y-0" : "md:-translate-y-full",
          scrollingDown && !open
            ? "max-md:-translate-y-2 max-md:opacity-0 max-md:pointer-events-none"
            : "max-md:translate-y-0 max-md:opacity-100",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <a
            href="#hero"
            className="text-base font-semibold text-white tracking-tight"
          >
            Richie Kosasih
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={[
              "relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden transition-colors duration-300",
              open
                ? "border border-black/10 text-black hover:bg-black/5"
                : "border border-neutral-800 text-neutral-300 hover:bg-neutral-900",
            ].join(" ")}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative flex h-5 w-5 flex-col items-center justify-center">
              <span
                className={[
                  "absolute h-[1.5px] w-5 transition-all duration-300",
                  open ? "rotate-45 bg-black" : "bg-current -translate-y-1.5",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute h-[1.5px] w-5 transition-all duration-300",
                  open ? "opacity-0 bg-black" : "bg-current opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute h-[1.5px] w-5 transition-all duration-300",
                  open ? "-rotate-45 bg-black" : "bg-current translate-y-1.5",
                ].join(" ")}
              />
            </div>
          </button>
        </nav>
      </header>

      <CurvedMenu
        open={open}
        onClose={() => setOpen(false)}
        navItems={navLinks}
      />
    </>
  );
}
