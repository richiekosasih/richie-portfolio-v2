import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

const heroTech = ["React", "JavaScript", "Tailwind CSS", "Vite", "GitHub"];

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="mb-4 text-sm font-medium text-violet-400">
          Melbourne, Australia
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Richie Kosasih
        </h1>

        <p className="mt-4 text-lg text-neutral-300 sm:text-xl">
          Frontend Developer & Master of IT Student
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          I build clean, responsive web applications using React, JavaScript,
          and Tailwind CSS, with a focus on practical business dashboards and
          user-friendly interfaces.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {heroTech.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
