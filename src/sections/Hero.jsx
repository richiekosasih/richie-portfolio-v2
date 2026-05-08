import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "../components/ui/WordsPullUp";

function useMelbourneTime() {
  const fmt = () =>
    new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Melbourne",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());

  const [time, setTime] = useState(fmt);

  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

const CREAM = "#E1E0CC";
const CREAM_70 = "rgba(225, 224, 204, 0.8)";

const heroTech = ["React", "JavaScript", "Tailwind CSS", "Vite", "GitHub", "AI-assisted workflow"];

export default function Hero() {
  const melbTime = useMelbourneTime();

  return (
    <section id="hero" className="sticky top-0 w-full min-h-svh sm:p-2 md:p-3">
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

        {/* Location + live time pill — top-right on all sizes */}
        <div className="absolute right-0 top-0 z-20 px-4 pt-4 md:px-6 md:pt-5">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-black/30 px-2.5 py-1 text-[10px] font-normal tracking-wide uppercase backdrop-blur-sm"
            style={{ color: "rgba(225, 224, 204, 0.45)" }}
          >
            <span className="relative flex h-1 w-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400/40" />
              <span className="relative inline-flex h-1 w-1 rounded-full bg-violet-400/70" />
            </span>
            Melbourne &middot; {melbTime}
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
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-xs font-medium uppercase tracking-widest sm:text-sm"
                style={{ color: "rgba(225, 224, 204, 0.5)" }}
              >
                Frontend &amp; Business Systems Builder
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-md text-sm leading-snug sm:text-base"
                style={{ color: CREAM_70, lineHeight: 1.35 }}
              >
                I combine frontend development, business process thinking,
                and AI-assisted tools to turn messy ideas into clean, usable
                web applications.
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
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full py-1 pl-5 pr-1 text-sm font-medium transition-all hover:gap-3 sm:text-base"
                  style={{ background: CREAM, color: "#000" }}
                >
                  View Work
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
