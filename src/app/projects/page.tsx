import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../lib/data';

export const metadata: Metadata = { title: 'Projects' };

const categories = ['All', 'Full Stack', 'DevOps', 'Backend'] as const;

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category ?? 'All';
  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="border-b border-border bg-surface px-6 py-16 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            A selection of production-grade work spanning full-stack, DevOps,
            and backend engineering.
          </p>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Category filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === 'All' ? '/projects' : `/projects?category=${cat}`}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border text-muted-foreground hover:border-border-hover hover:text-foreground'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-border-hover hover:bg-card-hover"
                aria-label={`View details for ${project.title}`}
              >
                {/* Gradient header */}
                <div
                  className="relative flex h-28 items-center justify-between overflow-hidden px-5"
                  style={{ background: project.gradient }}
                >
                  <div className="absolute -top-5 -right-5 h-24 w-24 rounded-full bg-white/10" />
                  <span className="relative z-10 text-2xl">
                    {project.icon}
                  </span>
                  <span className="relative z-10 rounded-full bg-black/25 px-2.5 py-0.5 text-xs font-semibold text-white/90">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-sm font-semibold text-foreground leading-snug">
                    {project.title}
                  </h2>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {project.shortDesc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent">
                    View Details
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
