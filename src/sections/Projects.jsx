import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/ui/Section";
import Badge from "../components/ui/Badge";
import { projects } from "../data/projects";

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
};

function StatusPill({ status }) {
  const isInProgress = status?.toLowerCase().includes("progress");
  const color = isInProgress
    ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
    : "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${color}`}
    >
      {status}
    </span>
  );
}

function Placeholder({ title }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-800/60 p-8">
      <span className="text-lg font-semibold tracking-tight text-cream/20">
        {title}
      </span>
    </div>
  );
}

function ArrowButton({ direction, onClick }) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Previous project" : "Next project"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/80 text-cream/50 backdrop-blur transition-colors hover:border-neutral-600 hover:text-cream"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={isLeft ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
      </svg>
    </button>
  );
}

function WorkCard({ project }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center gap-0">
        <div
          className={`w-[400px] h-[300px] lg:w-[460px] lg:h-[340px] rounded-2xl overflow-hidden bg-neutral-800 shrink-0 ${
            project.featured ? "ring-1 ring-violet-500/30" : ""
          }`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              draggable={false}
            />
          ) : (
            <Placeholder title={project.title} />
          )}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-7 ml-[-60px] z-10 w-[380px] lg:w-[420px] shrink-0">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-cream">
                {project.title}
              </h3>
              {project.featured && (
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-violet-400">
                  Featured
                </p>
              )}
            </div>
            <StatusPill status={project.status} />
          </div>

          <p className="text-sm leading-relaxed text-cream/70 mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              View on GitHub
            </a>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div
          className={`w-full aspect-video rounded-2xl overflow-hidden bg-neutral-800 mb-4 ${
            project.featured ? "ring-1 ring-violet-500/30" : ""
          }`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              draggable={false}
            />
          ) : (
            <Placeholder title={project.title} />
          )}
        </div>

        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-cream">
              {project.title}
            </h3>
            {project.featured && (
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-violet-400">
                Featured
              </p>
            )}
          </div>
          <StatusPill status={project.status} />
        </div>

        <p className="text-sm leading-relaxed text-cream/70 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            View on GitHub
          </a>
        )}
      </div>
    </>
  );
}

export default function Projects() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const go = (newIndex) => {
    setCurrent([newIndex, newIndex > current ? 1 : -1]);
  };

  const prev = () => go(current === 0 ? projects.length - 1 : current - 1);
  const next = () => go(current === projects.length - 1 ? 0 : current + 1);

  return (
    <Section id="work" className="bg-[#0c0a07]">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          Work
        </h2>
        <p className="mt-3 text-cream/50">
          Practical web projects focused on dashboards, workflows, and clean
          user interfaces.
        </p>
      </div>

      {/* Carousel with side arrows */}
      <div className="relative flex items-center justify-center">
        {/* Left arrow — desktop side, mobile bottom */}
        <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20">
          <ArrowButton direction="left" onClick={prev} />
        </div>

        {/* Card area */}
        <div className="w-full overflow-hidden px-0 md:px-14">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={projects[current].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <WorkCard project={projects[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow — desktop side */}
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20">
          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>

      {/* Bottom controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        {/* Mobile arrows */}
        <div className="md:hidden">
          <ArrowButton direction="left" onClick={prev} />
        </div>

        <div className="flex items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => go(i)}
              aria-label={`Go to ${p.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-cream/70"
                  : "w-2 bg-cream/20 hover:bg-cream/40"
              }`}
            />
          ))}
        </div>

        <div className="md:hidden">
          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>
    </Section>
  );
}
