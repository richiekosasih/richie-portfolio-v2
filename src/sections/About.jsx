import Section from "../components/ui/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          About
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
          <p>
            I'm Richie — a Master of Information Technology student based in
            Melbourne, transitioning into IT after years of operational and
            logistics experience.
          </p>
          <p>
            I focus on frontend development with React, JavaScript, and
            Tailwind CSS. I learn best by building, so I work on practical
            projects like internal dashboards and tools that solve real
            business problems rather than just demos.
          </p>
          <p>
            I care about clean code, clear UI, and shipping things that
            actually work — and I'm steadily growing into a well-rounded
            developer.
          </p>
        </div>
      </div>
    </Section>
  );
}
