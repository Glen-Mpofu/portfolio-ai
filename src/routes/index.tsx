import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import {
  certifications,
  education,
  experience,
  profile,
  projects,
  softSkills,
  technicalSkills,
} from "@/data/portfolio";

const title = "Tshepo Mpofu — Junior Software Developer Portfolio";
const description =
  "Portfolio of Tshepo Mpofu, cum laude Computer Science graduate from TUT: projects, skills, education, certifications and contact details.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.2em] text-sky">{text}</p>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-ink antialiased">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb absolute -top-24 -left-16 size-72 rounded-full bg-sky/25 blur-3xl" />
        <div
          className="orb absolute top-40 -right-20 size-80 rounded-full bg-skysoft blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="orb absolute bottom-0 left-1/3 size-72 rounded-full bg-sky/15 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <header className="no-print sticky top-0 z-50 border-b border-ink/5">
        <div className="glass-strong flex items-center justify-between px-4 py-3 md:px-8">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-ink font-mono text-xs text-background">
              {profile.initials}
            </span>
            <span className="font-mono text-[11px] text-inkmuted">{profile.handle}</span>
          </div>
          <nav className="flex items-center gap-3">
            <a href="#projects" className="hidden font-mono text-[11px] text-inkmuted sm:inline">
              projects
            </a>
            <a href="#contact" className="font-mono text-[11px] text-inkmuted">
              contact
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-background"
            >
              CV
            </button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[390px] px-4 pb-10 md:max-w-3xl md:px-8 lg:max-w-5xl">
        <section className="pt-10 pb-8 md:pt-16 md:pb-12">
          <p className="rise font-mono text-[11px] tracking-[0.2em] text-sky">
            ( 01 / available )
          </p>
          <h1
            className="rise mt-4 text-balance text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl"
            style={{ animationDelay: "60ms" }}
          >
            Tshepo
            <br />
            Mpofu
          </h1>
          <p
            className="rise mt-3 font-mono text-xs text-inkmuted"
            style={{ animationDelay: "120ms" }}
          >
            {profile.qualification}
          </p>
          <p className="rise mt-1 text-base font-semibold" style={{ animationDelay: "120ms" }}>
            {profile.role}
          </p>
          <p
            className="rise mt-4 max-w-[30ch] text-pretty text-sm leading-relaxed text-inkmuted md:max-w-[46ch] md:text-base"
            style={{ animationDelay: "180ms" }}
          >
            {profile.intro}
          </p>
          <div className="rise no-print mt-6 flex flex-wrap gap-2" style={{ animationDelay: "240ms" }}>
            <button
              type="button"
              onClick={() => window.print()}
              className="relative overflow-hidden rounded-full bg-ink px-5 py-3 text-sm font-medium text-background"
            >
              <span className="relative z-10">Download CV</span>
              <span className="sheen absolute inset-y-0 left-0 z-0 w-16 bg-background/20" />
            </button>
            <a
              href="#contact"
              className="rounded-full border border-ink/10 bg-background/50 px-5 py-3 text-sm font-medium text-ink backdrop-blur"
            >
              Contact
            </a>
          </div>
        </section>

        <div className="md:grid md:grid-cols-2 md:gap-4">
          <section className="pb-4">
            <div className="glass h-full overflow-hidden rounded-2xl p-5 ring-1 ring-ink/5">
              <div className="flex items-center justify-between">
                <SectionLabel text="( 02 / about )" />
                <span className="font-mono text-[10px] text-inkmuted">02</span>
              </div>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-ink/80">
                {profile.about}
              </p>
            </div>
          </section>

          <section className="pb-4">
            <div className="glass h-full overflow-hidden rounded-2xl p-5 ring-1 ring-ink/5">
              <SectionLabel text="( 03 / skills )" />
              <div className="mt-4">
                <p className="text-xs font-semibold text-ink">Technical</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {technicalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-background/70 px-2.5 py-1 text-[11px] text-ink/80 ring-1 ring-ink/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold text-ink">Soft</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-skysoft/40 px-2.5 py-1 text-[11px] text-ink/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="projects" className="pb-4">
          <div className="px-1">
            <SectionLabel text="( 04 / projects )" />
          </div>
          <div className="mt-3 space-y-3 md:grid md:grid-cols-3 md:gap-3 md:space-y-0">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group glass relative overflow-hidden rounded-2xl p-4 ring-1 ring-ink/5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{project.name}</h3>
                  <span className="font-mono text-[10px] text-inkmuted">{project.year}</span>
                </div>
                <p className="mt-1.5 text-pretty text-[13px] leading-relaxed text-inkmuted">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-ink/5 px-2 py-0.5 font-mono text-[10px] text-ink/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="no-print mt-4 inline-flex items-center gap-1 text-[11px] font-medium text-sky hover:underline"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="md:grid md:grid-cols-2 md:gap-4">
          <section className="pb-4">
            <div className="glass h-full overflow-hidden rounded-2xl p-5 ring-1 ring-ink/5">
              <SectionLabel text="( 05 / education )" />
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold">{education.qualification}</p>
                    <span className="font-mono text-[10px] text-inkmuted">{education.period}</span>
                  </div>
                  <p className="mt-0.5 text-[13px] text-inkmuted">{education.institution}</p>
                </div>
                <div className="border-t border-ink/5 pt-4">
                  <p className="text-xs font-semibold text-ink">Certifications</p>
                  <div className="mt-2 space-y-2">
                    {certifications.map((cert) => (
                      <div key={cert.name} className="flex items-start justify-between gap-3">
                        <p className="text-[13px] text-ink/80">{cert.name}</p>
                        <span className="font-mono text-[10px] text-inkmuted">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-4">
            <div className="glass h-full overflow-hidden rounded-2xl p-5 ring-1 ring-ink/5">
              <SectionLabel text="( 06 / experience )" />
              <div className="mt-4 space-y-4">
                {experience.map((role) => (
                  <div key={role.title}>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold">{role.title}</p>
                      <span className="font-mono text-[10px] text-inkmuted">{role.year}</span>
                    </div>
                    <p className="mt-0.5 text-[13px] font-medium text-ink/70">{role.company}</p>
                    <p className="mt-1 text-pretty text-[13px] leading-relaxed text-inkmuted">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section id="contact" className="pb-2">
          <div className="glass overflow-hidden rounded-2xl p-5 ring-1 ring-ink/5">
            <SectionLabel text="( 07 / contact )" />
            <div className="mt-4 space-y-2 md:grid md:grid-cols-3 md:gap-2 md:space-y-0">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between gap-2 rounded-xl bg-background/60 px-4 py-3 text-sm ring-1 ring-ink/5"
              >
                <span className="truncate text-ink/80">{profile.email}</span>
                <span className="font-mono text-[10px] text-inkmuted">email</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl bg-background/60 px-4 py-3 text-sm ring-1 ring-ink/5"
              >
                <span className="truncate text-ink/80">{profile.githubLabel}</span>
                <span className="font-mono text-[10px] text-inkmuted">github</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl bg-background/60 px-4 py-3 text-sm ring-1 ring-ink/5"
              >
                <span className="truncate text-ink/80">{profile.linkedinLabel}</span>
                <span className="font-mono text-[10px] text-inkmuted">linkedin</span>
              </a>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="no-print mt-4 block w-full rounded-xl bg-ink px-4 py-3 text-center text-sm font-medium text-background"
            >
              Download full CV
            </button>
          </div>
        </section>

        <footer className="pt-8 text-center">
          <p className="font-mono text-[10px] text-inkmuted">
            © 2026 {profile.name} — built with intent
          </p>
        </footer>
      </main>
    </div>
  );
}
