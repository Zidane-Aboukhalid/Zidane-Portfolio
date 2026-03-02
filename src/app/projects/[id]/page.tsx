import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../../lib/data';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.id !== id)
    .slice(0, 2);

  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div
        className="relative overflow-hidden px-6 py-16"
        style={{ background: project.gradient }}
      >
        <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5" />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link
              href="/projects"
              className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Projects
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/90">{project.title.split(' — ')[0]}</span>
          </div>

          <div className="flex flex-wrap items-end gap-5">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur-sm">
              {project.icon}
            </div>
            <div>
              <span className="mb-2 inline-block rounded-full bg-black/25 px-3 py-0.5 text-xs font-semibold text-white/90">
                {project.category}
              </span>
              <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-16">
        <div
          className="mx-auto max-w-5xl grid gap-10 items-start project-detail-grid"
          style={{ gridTemplateColumns: 'minmax(0, 1fr) 300px' }}
        >
          {/* Main content */}
          <div>
            <section className="mb-10">
              <h2 className="mb-3 border-b border-border pb-3 text-base font-semibold text-foreground">
                Overview
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.longDesc}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-3 border-b border-border pb-3 text-base font-semibold text-foreground">
                Key Challenge
              </h2>
              <div className="rounded-xl border-l-2 border-accent bg-card p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.challenges}
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="mb-3 border-b border-border pb-3 text-base font-semibold text-foreground">
                Outcome
              </h2>
              <div className="rounded-xl border-l-2 border-accent bg-card p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.outcome}
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 border-b border-border pb-3 text-base font-semibold text-foreground">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            {/* Links */}
            <div className="rounded-xl border border-border bg-card p-5 mb-4">
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Project Links
              </h3>
              <div className="flex flex-col gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-background transition-all hover:bg-accent/90"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-card-hover hover:border-border-hover"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Meta */}
            <div className="rounded-xl border border-border bg-card p-5 mb-4">
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Details
              </h3>
              {[
                { label: 'Category', value: project.category },
                {
                  label: 'Type',
                  value: project.featured ? 'Featured' : 'Side Project',
                },
                {
                  label: 'Stack',
                  value: `${project.technologies.length} technologies`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-border py-2.5 last:border-b-0"
                >
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-xs font-medium text-foreground">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Related Projects
                </h3>
                <div className="flex flex-col gap-2">
                  {related.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/projects/${rp.id}`}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-all hover:border-border-hover hover:bg-card-hover"
                    >
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-base"
                        style={{ background: rp.gradient }}
                      >
                        {rp.icon}
                      </div>
                      <span className="flex-1 text-xs font-medium text-foreground leading-snug">
                        {rp.title.split(' — ')[0]}
                      </span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
