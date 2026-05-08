import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <Section id="stack">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          Stack
        </h2>
        <p className="mt-3 text-cream/50">
          Tools and technologies I use to build clean, practical web
          interfaces.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <Card key={group.category}>
            <h3 className="text-lg font-semibold text-cream">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
