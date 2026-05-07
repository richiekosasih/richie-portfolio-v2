import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "../components/ui/WordsPullUp";

const CREAM = "#E1E0CC";
const CREAM_70 = "rgba(225, 224, 204, 0.8)";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const heroTech = ["React", "JavaScript", "Tailwind CSS", "Vite", "GitHub"];

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-svh sm:p-2 md:p-3">
      <div className="relative w-full min-h-svh sm:min-h-[calc(100svh-1rem)] md:min-h-[calc(100svh-1.5rem)] overflow-hidden rounded-none sm:rounded-2xl md:rounded-3xl">
        {/* Background video — placeholder, replace src with your own asset later */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise / film-grain texture */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay" />

        {/* Gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

        {/* Prisma-style pill nav — desktop only */}
        <nav className="hidden md:block absolute left-1/2 top-0 z-20 -translate-x-1/2 max-w-[90vw]">
          <div className="flex items-center gap-6 rounded-b-2xl bg-black px-6 py-2.5 lg:gap-12 lg:rounded-b-3xl lg:px-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-xs transition-colors duration-200 lg:text-sm"
                style={{ color: CREAM_70 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = CREAM)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = CREAM_70)
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile top bar — location pill */}
        <div className="md:hidden absolute inset-x-0 top-0 z-20 flex items-center justify-center px-4 pt-4">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium backdrop-blur"
            style={{ color: CREAM_70 }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
            </span>
            Melbourne, Australia
          </span>
        </div>

        {/* Bottom-anchored hero content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10">
          <div className="grid grid-cols-1 items-end gap-4 lg:grid-cols-12 lg:gap-6">
            {/* Giant name */}
            <div className="lg:col-span-7 xl:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.06em]"
                style={{
                  color: CREAM,
                  fontSize: "clamp(4rem, 16vw, 14rem)",
                }}
              >
                <WordsPullUp text="Richie" showAsterisk />
              </h1>
            </div>

            {/* Copy + CTAs */}
            <div className="flex flex-col gap-4 lg:col-span-5 xl:col-span-4 lg:pb-4">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-md text-sm leading-snug sm:text-base md:text-base"
                style={{ color: CREAM_70, lineHeight: 1.35 }}
              >
                Frontend Developer building modern interfaces for real
                business problems. I create responsive web applications with
                React, JavaScript, and Tailwind CSS, with a focus on clarity,
                usability, and practical workflows.
              </motion.p>

              {/* Tech badges */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap gap-1.5"
              >
                {heroTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] font-medium backdrop-blur sm:text-xs"
                    style={{ color: CREAM_70 }}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap items-center gap-2.5"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full py-1 pl-5 pr-1 text-sm font-medium transition-all hover:gap-3 sm:text-base"
                  style={{ background: CREAM, color: "#000" }}
                >
                  View Projects
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-9 sm:w-9">
                    <ArrowRight
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      style={{ color: CREAM }}
                    />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/10"
                  style={{ color: CREAM }}
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
