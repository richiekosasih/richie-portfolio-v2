import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "the stack.";
const characters = text.split("");
const centerCharIdx = Math.floor(characters.length / 2);

const stackIcons = [
  { name: "React", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg" },
  { name: "Vite", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vite.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/css3.svg" },
];
const centerIconIdx = Math.floor(stackIcons.length / 2);

function AnimatedChar({ char, index, scrollYProgress }) {
  const distanceFromCenter = index - centerCharIdx;
  const isSpace = char === " ";
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 60, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);

  return (
    <motion.span
      className={`inline-block ${isSpace ? "w-4" : ""}`}
      style={{ x, rotateX }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

function AnimatedIcon({ icon, index, scrollYProgress }) {
  const distanceFromCenter = index - centerIconIdx;
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 80, 0]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 30, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.2, 1]);

  return (
    <motion.div
      className="flex h-14 w-14 shrink-0 flex-col items-center gap-2 will-change-transform sm:h-16 sm:w-16"
      style={{ x, y, scale, opacity, transformOrigin: "center" }}
    >
      <img
        src={icon.src}
        alt={icon.name}
        className="h-full w-full object-contain"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
      <span className="text-[10px] font-medium tracking-wide text-cream/40">
        {icon.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const textRef = useRef(null);
  const iconsRef = useRef(null);

  const { scrollYProgress: textScroll } = useScroll({ target: textRef });
  const { scrollYProgress: iconsScroll } = useScroll({ target: iconsRef });

  return (
    <section id="stack" className="w-full bg-[#0a0a0a]">
      {/* Animated title block */}
      <div
        ref={textRef}
        className="relative box-border flex h-[180vh] items-center justify-center overflow-hidden p-[2vw]"
      >
        <div className="sticky top-1/2 -translate-y-1/2">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-cream/40">
            Stack
          </p>
          <div
            className="w-full text-center text-5xl font-semibold uppercase tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ perspective: "500px" }}
          >
            {characters.map((char, i) => (
              <AnimatedChar
                key={i}
                char={char}
                index={i}
                scrollYProgress={textScroll}
              />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-cream/50">
            Tools and technologies I use to build clean, practical web
            interfaces.
          </p>
        </div>
      </div>

      {/* Animated icons block */}
      <div
        ref={iconsRef}
        className="relative -mt-[80vh] box-border flex h-[180vh] flex-col items-center justify-center overflow-hidden p-[2vw]"
      >
        <div className="sticky top-1/2 flex -translate-y-1/2 flex-col items-center gap-8">
          <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/40 sm:text-sm">
            <span className="h-px w-10 bg-cream/20" />
            What I work with
            <span className="h-px w-10 bg-cream/20" />
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            style={{ perspective: "500px" }}
          >
            {stackIcons.map((icon, i) => (
              <AnimatedIcon
                key={icon.name}
                icon={icon}
                index={i}
                scrollYProgress={iconsScroll}
              />
            ))}
          </div>

          <p className="mt-2 max-w-md text-center text-xs text-cream/40 sm:text-sm">
            Currently expanding into API integration, backend fundamentals, and
            cybersecurity foundations.
          </p>
        </div>
      </div>
    </section>
  );
}
