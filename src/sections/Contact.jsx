import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

export default function Contact() {
  return (
    <Section id="contact" className="bg-[#08090c]">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-900/40 p-10 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          Contact
        </h2>
        <p className="mt-4 text-cream/70">
          Interested in practical frontend work, internships, junior web
          development opportunities, or business-focused web tools?
          Let's connect.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="mailto:richiekosasih@gmail.com" variant="primary">
            Email Me
          </Button>
          <Button
            href="https://github.com/richiekosasih"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            href="https://linkedin.com"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </div>

        <p className="mt-6 text-sm text-cream/40">
          richiekosasih@gmail.com
        </p>
      </div>
    </Section>
  );
}
