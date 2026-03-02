import type { Metadata } from 'next';
import Link from 'next/link';
import { projects, blogPosts } from './lib/data';

export const metadata: Metadata = { title: 'Home' };

/* ─── Data ───────────────────────────────────────────────────── */

const services = [
  {
    title: 'Full Stack Development',
    desc: 'End-to-end web applications with .NET Core APIs and React / Next.js frontends. Clean architecture, type-safe, production-ready.',
    tags: ['.NET', 'React', 'Next.js', 'PostgreSQL'],
  },
  {
    title: 'DevOps & CI/CD',
    desc: 'Dockerised deployments, Kubernetes orchestration, GitHub Actions pipelines, and cloud infrastructure on Azure & AWS.',
    tags: ['Docker', 'GitHub Actions', 'Azure', 'Kubernetes'],
  },
  {
    title: 'API & Backend Systems',
    desc: 'Scalable REST and gRPC APIs with JWT auth, rate limiting, Redis caching, and comprehensive test coverage.',
    tags: ['ASP.NET', 'JWT', 'Redis', 'gRPC'],
  },
];

const techStack = [
  '.NET / C#', 'React', 'Next.js', 'TypeScript', 'Docker',
  'PostgreSQL', 'Tailwind CSS', 'Git / CI/CD', 'Azure',
  'Redis', 'Kubernetes', 'GitHub Actions',
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div className="pt-16">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-3xl">
          {/* Status badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-accent">
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-delay-1 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {"Hi, I'm "}
            <span className="text-accent">Zidane</span>
          </h1>

          {/* Title */}
          <p className="animate-fade-in-delay-2 mt-4 text-xl font-medium text-muted sm:text-2xl">
            Full Stack Developer
          </p>

          {/* Description */}
          <p className="animate-fade-in-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I build{' '}
            <span className="text-foreground font-medium">
              scalable, production-ready web applications
            </span>{' '}
            from database to deployment &mdash; fast, clean, and maintainable.
          </p>

          {/* Tech pills */}
          <div className="animate-fade-in-delay-3 mt-8 flex flex-wrap items-center justify-center gap-2">
            {['.NET', 'React', 'Next.js', 'TypeScript', 'DevOps'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-delay-3 mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              View Projects
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-card hover:border-border-hover"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-card hover:border-border-hover"
            >
              Hire Me
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-delay-4 mx-auto mt-16 flex max-w-md items-center justify-center gap-12 border-t border-border pt-8">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '20+', label: 'Projects Shipped' },
              { value: '10+', label: 'Technologies' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold tracking-tight text-foreground">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              What I Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Services I Offer
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              From idea to production &mdash; I cover the full development
              lifecycle.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-border-hover hover:bg-card-hover"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {svc.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {projects.length} projects total &mdash; here are the
                highlights.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              View all projects
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-border-hover hover:bg-card-hover"
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
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {project.shortDesc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted"
                      >
                        {t}
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
      </section>

      {/* ── TECH STACK ───────────────────────────────────────── */}
      <section className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Tech Stack
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tools I Work With
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-border-hover hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST BLOG ──────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Writing
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Latest Articles
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Deep dives, tutorials, and thoughts on modern development.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              See all articles
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-border-hover hover:bg-card-hover"
              >
                <div
                  className="relative flex h-24 items-center gap-3 overflow-hidden px-5"
                  style={{ background: post.gradient }}
                >
                  <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-white/10" />
                  <span className="relative z-10 text-2xl">{post.icon}</span>
                  <span className="relative z-10 rounded-full bg-black/25 px-2.5 py-0.5 text-xs font-semibold text-white/90">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="text-border">{'/'}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent">
                    Read Article
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
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="border-t border-border bg-surface px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-accent">
              Available for hire
            </span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Build Something Great?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Whether you have a project in mind, need a full-time developer, or
            just want to chat about tech &mdash; my inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Get In Touch
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-card hover:border-border-hover"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
