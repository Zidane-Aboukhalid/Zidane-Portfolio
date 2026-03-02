import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About' };

const skills = [
  { name: '.NET / C#', level: 90 },
  { name: 'React.js', level: 88 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 83 },
  { name: 'DevOps / Docker', level: 78 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'PostgreSQL / SQL', level: 80 },
  { name: 'Git / CI/CD', level: 85 },
];

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Tech Innovations Co.',
    period: '2023 - 2024',
    desc: 'Built REST APIs with ASP.NET Core and React dashboards. Deployed to Azure with Docker and GitHub Actions CI/CD pipelines.',
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Labs',
    period: '2022 - 2023',
    desc: 'Developed responsive UIs with React + TypeScript. Implemented state management with Zustand and unit testing with Vitest.',
  },
  {
    title: 'Freelance Developer',
    company: 'Self-employed',
    period: '2021 - Present',
    desc: 'Delivered 10+ client projects: e-commerce sites, SaaS dashboards, REST APIs, and CI/CD pipeline setup.',
  },
];

const highlights = [
  { label: 'Performance-first', sub: 'Optimised solutions' },
  { label: 'Security-focused', sub: 'Best practices' },
  { label: 'Responsive', sub: 'All screen sizes' },
  { label: 'CI/CD', sub: 'Continuous delivery' },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="border-b border-border bg-surface px-6 py-16 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            About Me
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Passionate About Building Things
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Full Stack Developer with 3+ years crafting production-ready web
            applications.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left column */}
            <div>
              {/* Bio card */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  My Background
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {"I'm a Full Stack Developer with 3+ years of experience delivering production-ready web applications. My expertise spans backend (.NET Core, Node.js), frontend (React, Next.js), and infrastructure (Docker, Kubernetes, Azure)."}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  I thrive on complex engineering challenges, enjoy contributing
                  to open source, and stay current with the ever-evolving web
                  ecosystem.
                </p>
              </div>

              {/* Experience */}
              <h2 className="mt-10 text-lg font-semibold text-foreground">
                Experience
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                {experiences.map((exp) => (
                  <div
                    key={exp.title}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        {exp.title}
                      </span>
                      <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-accent">
                      {exp.company}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Skills */}
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Technical Skills
              </h2>
              <div className="mt-4 rounded-xl border border-border bg-card p-6">
                {skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className={i < skills.length - 1 ? 'mb-5' : ''}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-accent transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border bg-card p-4 text-center"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
