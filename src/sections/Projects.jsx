import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { projects } from "../data/projects";

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

function ProjectCard({ project }) {
  // Featured project gets a stronger accent border and gradient background
  const wrapper = project.featured
    ? "rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/60 via-violet-500/20 to-transparent"
    : "";

  const cardExtra = project.featured
    ? "bg-neutral-950 hover:border-transparent"
    : "";

  return (
    <div className={wrapper}>
      <Card className={`flex h-full flex-col ${cardExtra}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            {project.featured && (
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-violet-400">
                Featured Project
              </p>
            )}
          </div>
          <StatusPill status={project.status} />
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-neutral-800 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>
        </div>
      </Card>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 text-neutral-400">
          A selection of projects I'm building as I grow as a frontend
          developer.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
