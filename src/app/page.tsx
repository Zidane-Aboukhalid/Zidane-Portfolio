import type { Metadata } from 'next';
import Link from 'next/link';
import { projects, blogPosts } from './lib/data';

export const metadata: Metadata = { title: 'Home' };

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: '3+', label: 'Years Experience', icon: '📅' },
  { value: '20+', label: 'Projects Shipped', icon: '🚀' },
  { value: '10+', label: 'Technologies', icon: '⚙️' },
  { value: '100%', label: 'Passion for Code', icon: '❤️' },
];

const services = [
  {
    icon: '🖥️',
    title: 'Full Stack Development',
    desc: 'End-to-end web apps with .NET Core APIs on the backend and React / Next.js on the frontend. Clean architecture, type-safe, production-ready.',
    tags: ['.NET', 'React', 'Next.js', 'PostgreSQL'],
    color: '#3b82f6',
  },
  {
    icon: '🐳',
    title: 'DevOps & CI/CD',
    desc: 'Dockerised deployments, Kubernetes orchestration, GitHub Actions pipelines, and cloud infrastructure on Azure & AWS.',
    tags: ['Docker', 'GitHub Actions', 'Azure', 'Kubernetes'],
    color: '#06b6d4',
  },
  {
    icon: '🔐',
    title: 'API & Backend Systems',
    desc: 'Scalable REST and gRPC APIs with JWT auth, rate limiting, Redis caching, and comprehensive test coverage.',
    tags: ['ASP.NET', 'JWT', 'Redis', 'gRPC'],
    color: '#8b5cf6',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div style={{ paddingTop: '68px' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="grid-bg"
        style={{
          minHeight: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Ambient orbs */}
        <div style={{ position: 'absolute', top: '12%', left: '6%', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(55px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '4%', width: '440px', height: '440px', background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', right: '20%', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* Available badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '100px', padding: '6px 18px', marginBottom: '36px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
            <span style={{ color: '#22c55e', fontSize: '0.83rem', fontWeight: '600' }}>Open to opportunities</span>
          </div>

          {/* Name */}
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '900', lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '20px' }}>
            Hi, I&apos;m{' '}
            <span className="gradient-text">Zidane</span>
          </h1>

          {/* Title */}
          <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Full Stack Developer
          </h2>

          {/* Role badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
            {['.NET', 'React', 'Next.js', 'TypeScript', 'DevOps'].map((r) => (
              <span key={r} className="tech-badge">{r}</span>
            ))}
          </div>

          {/* Tagline */}
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.18rem)', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.85 }}>
            I build <strong style={{ color: 'var(--text-secondary)' }}>scalable, production-ready web applications</strong> from database to deployment — fast, clean, and maintainable.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
            <Link href="/projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              View Projects
            </Link>
            <Link href="/about" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
              About Me
            </Link>
            <Link href="/contact" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              Hire Me
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(28px, 5vw, 64px)', flexWrap: 'wrap', padding: '28px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{s.icon}</div>
                <div className="gradient-text-blue" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '500', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.78rem', opacity: 0.5 }}>
            <span>Scroll to explore</span>
            <div style={{ width: '22px', height: '36px', border: '1px solid var(--border-color)', borderRadius: '11px', display: 'flex', justifyContent: 'center', paddingTop: '5px' }}>
              <div style={{ width: '3px', height: '7px', background: 'var(--accent-cyan)', borderRadius: '2px', animation: 'float 1.5s ease-in-out infinite' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-secondary)', padding: '100px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="tech-badge" style={{ marginBottom: '14px' }}>What I Do</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              Services I <span className="gradient-text">Offer</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              From idea to production — I cover the full development lifecycle.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {services.map((svc) => (
              <div
                key={svc.title}
                className="card"
                style={{ padding: '28px 24px', borderTop: `3px solid ${svc.color}`, borderRadius: '12px' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{svc.icon}</div>
                <h3 style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '10px' }}>{svc.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.75', marginBottom: '16px' }}>{svc.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {svc.tags.map((t) => (
                    <span key={t} className="tech-badge" style={{ fontSize: '0.73rem', padding: '3px 10px', borderColor: `${svc.color}40`, color: svc.color }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="tech-badge" style={{ marginBottom: '10px' }}>Portfolio</span>
              <h2 className="section-title" style={{ marginTop: '10px', marginBottom: '6px' }}>
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {projects.length} projects total — here are the highlights.
              </p>
            </div>
            <Link
              href="/projects"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              View all {projects.length} projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '22px' }}>
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                <div className="project-card" style={{ height: '100%' }}>
                  {/* Gradient header */}
                  <div style={{ height: '110px', background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 22px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }} />
                    <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                      {project.icon}
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.25)', padding: '3px 10px', borderRadius: '20px', color: 'rgba(255,255,255,0.9)', fontSize: '0.72rem', fontWeight: '700' }}>
                      {project.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="project-card-body">
                    <h3 style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '8px', color: 'var(--text-primary)', lineHeight: 1.3 }}>{project.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.855rem', lineHeight: '1.7', marginBottom: '14px', flex: 1 }}>{project.shortDesc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                      {project.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="tech-badge" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>{t}</span>
                      ))}
                      {project.technologies.length > 4 && <span className="tech-badge" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>+{project.technologies.length - 4}</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.82rem' }}>
                      View Details
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tech-badge" style={{ marginBottom: '10px' }}>Tech Stack</span>
            <h2 className="section-title" style={{ marginTop: '10px' }}>
              Tools I <span className="gradient-text">Work With</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            {[
              { name: '.NET / C#', emoji: '⚡', color: '#a855f7' },
              { name: 'React', emoji: '⚛️', color: '#06b6d4' },
              { name: 'Next.js', emoji: '▲', color: '#e2e8f0' },
              { name: 'TypeScript', emoji: '🔷', color: '#3b82f6' },
              { name: 'Docker', emoji: '🐳', color: '#06b6d4' },
              { name: 'PostgreSQL', emoji: '🗄️', color: '#f59e0b' },
              { name: 'Tailwind CSS', emoji: '🎨', color: '#38bdf8' },
              { name: 'Git / CI/CD', emoji: '🔀', color: '#f97316' },
              { name: 'Azure', emoji: '☁️', color: '#3b82f6' },
              { name: 'Redis', emoji: '🔴', color: '#ef4444' },
              { name: 'Kubernetes', emoji: '☸️', color: '#3b82f6' },
              { name: 'GitHub Actions', emoji: '🤖', color: '#8b5cf6' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="card"
                style={{
                  padding: '12px 18px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  borderRadius: '10px', cursor: 'default',
                  border: `1px solid ${tech.color}22`,
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{tech.emoji}</span>
                <span style={{ color: tech.color, fontWeight: '600', fontSize: '0.85rem' }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST BLOG ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-primary)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="tech-badge" style={{ marginBottom: '10px' }}>Writing</span>
              <h2 className="section-title" style={{ marginTop: '10px', marginBottom: '6px' }}>
                Latest <span className="gradient-text">Articles</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Deep dives, tutorials, and thoughts on modern development.
              </p>
            </div>
            <Link href="/blog" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              See all articles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '22px' }}>
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Header */}
                  <div style={{ height: '90px', background: post.gradient, display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 20px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-25px', right: '-25px', width: '110px', height: '110px', background: 'rgba(255,255,255,0.07)', borderRadius: '50%' }} />
                    <div style={{ fontSize: '2rem', position: 'relative' }}>{post.icon}</div>
                    <span style={{ background: 'rgba(0,0,0,0.25)', color: 'rgba(255,255,255,0.9)', padding: '3px 10px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '700', position: 'relative' }}>{post.category}</span>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '8px', lineHeight: 1.35, color: 'var(--text-primary)' }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.855rem', lineHeight: '1.7', flex: 1, marginBottom: '16px' }}>{post.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.82rem' }}>
                      Read Article
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 50%, rgba(6,182,212,0.06) 100%)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
          padding: '100px 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Status pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '100px', padding: '6px 18px', marginBottom: '28px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block' }} />
            <span style={{ color: '#22c55e', fontSize: '0.83rem', fontWeight: '600' }}>Available for hire</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px', color: 'var(--text-primary)' }}>
            Ready to Build<br />
            <span className="gradient-text">Something Great?</span>
          </h2>

          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.8 }}>
            Whether you have a project in mind, need a full-time developer, or just want to chat about tech — my inbox is open.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              Get In Touch
            </Link>
            <Link href="/about" className="btn-outline" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
