import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          Experience
        </h2>
        <p className="mt-3 text-cream/50">
          My journey across study, IT, and operational work.
        </p>
      </div>

      <div className="space-y-5">
        {experience.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-cream">
                {item.role}
              </h3>
              <span className="text-sm text-violet-400">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-cream/50">
              {item.company} · {item.location}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
