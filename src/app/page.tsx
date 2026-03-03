import type { Metadata } from 'next';
import Link from 'next/link';
import { projects, blogPosts } from './lib/data';

export const metadata: Metadata = { title: 'Zidane Aboukhalid – Full Stack .NET Developer' };

// ─── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: '3+', label: 'Years Experience', icon: '📅' },
  { value: '10+', label: 'Projects Delivered', icon: '🚀' },
  { value: '4+', label: 'Companies', icon: '🏢' },
  { value: '100%', label: 'Passion for Code', icon: '❤️' },
];

const services = [
  {
    icon: '⚡',
    title: 'ASP.NET Core APIs',
    desc: 'Production-ready REST APIs with Clean Architecture, CQRS, MediatR, Entity Framework, and SQL Server. Secure, tested, scalable.',
    tags: ['ASP.NET Core 8', 'CQRS', 'EF Core', 'SQL Server'],
    color: '#a855f7',
  },
  {
    icon: '⚛️',
    title: 'React & Blazor UIs',
    desc: 'Responsive, high-performance frontends with React.js and Blazor Server — including real-time features via SignalR.',
    tags: ['React.js', 'Blazor Server', 'SignalR', 'MUI'],
    color: '#06b6d4',
  },
  {
    icon: '🐳',
    title: 'DevOps & CI/CD',
    desc: 'Dockerised deployments with Jenkins pipelines, VPS hosting on Linux (Ubuntu), and Azure DevOps for cloud deployments.',
    tags: ['Docker', 'Jenkins', 'Azure DevOps', 'Linux VPS'],
    color: '#f97316',
  },
];

const timeline = [
  {
    period: 'Aug 2025 – Present',
    role: '.NET Developer',
    company: 'Unibitsoft',
    location: 'Casablanca',
    desc: 'Building a CMMS with ASP.NET Core 8 Web API — work orders, asset management & preventive maintenance.',
    color: '#a855f7',
    dot: '🏭',
  },
  {
    period: 'Jun 2024 – Aug 2025',
    role: 'Full-Stack Developer',
    company: 'Telco Solution',
    location: 'Casablanca',
    desc: 'Blazor Server + SignalR recruitment platform, React call-center app, Odoo ERP sync, Docker + Jenkins CI/CD.',
    color: '#3b82f6',
    dot: '📡',
  },
  {
    period: 'Feb 2024 – May 2024',
    role: 'Full-Stack Developer',
    company: 'Perfect Shore (Pixel IQ CRM)',
    location: 'Casablanca',
    desc: 'CRM development with ASP.NET Razor Pages, SQL Server 2019 optimisation, feature implementation.',
    color: '#06b6d4',
    dot: '🗂️',
  },
  {
    period: 'Oct 2023 – Feb 2024',
    role: 'Full-Stack Developer',
    company: 'JobInTech Bootcamp',
    location: 'UIR, Maroc',
    desc: 'Moroccan Microsoft Community platform, UIR Shop e-commerce, Azure DevOps CI/CD, microservices with CQRS.',
    color: '#10b981',
    dot: '🎓',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div style={{ paddingTop: '68px' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="grid-bg"
        style={{
          minHeight: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Ambient orbs */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '3%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(55px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '45%', right: '18%', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(45px)', pointerEvents: 'none' }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1, paddingTop: '60px', paddingBottom: '60px' }}>

          {/* Location + availability badge row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '100px', padding: '6px 18px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
              <span style={{ color: '#22c55e', fontSize: '0.83rem', fontWeight: '600' }}>Open to opportunities</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '100px', padding: '6px 16px' }}>
              <span style={{ fontSize: '0.8rem' }}>📍</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.83rem', fontWeight: '500' }}>Casablanca, Maroc</span>
            </div>
          </div>

          {/* Name */}
          <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: '900', lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '16px' }}>
            Hi, I&apos;m{' '}
            <span className="gradient-text">Zidane</span>
            <br />
            <span style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.03em' }}>
              Aboukhalid
            </span>
          </h1>

          {/* Title */}
          <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '20px', letterSpacing: '-0.01em' }}>
            Full Stack Developer &nbsp;·&nbsp;
            <span style={{ color: 'var(--accent-blue)' }}>.NET</span>
            {' '}&amp;{' '}
            <span style={{ color: 'var(--accent-cyan)' }}>React</span>
          </h2>

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '28px' }}>
            {['ASP.NET Core', 'React.js', 'Blazor', 'CQRS', 'Docker', 'SQL Server'].map((r) => (
              <span key={r} className="tech-badge">{r}</span>
            ))}
          </div>

          {/* Tagline */}
          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 20px', lineHeight: 1.85 }}>
            Full Stack Developer specializing in <strong style={{ color: 'var(--text-secondary)' }}>React & .NET</strong>, with nearly 3 years of experience building
            high-performance web interfaces and integrating back-end systems in demanding industrial and microservices environments.
          </p>

          {/* Contact line */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '44px' }}>
            <a href="mailto:zidane.aboukhalid@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.83rem', textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              zidane.aboukhalid@gmail.com
            </a>
            <a href="https://linkedin.com/in/zidane-aboukhalid" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.83rem', textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              linkedin.com/in/zidane-aboukhalid
            </a>
            <a href="tel:+212693105498" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.83rem', textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.44 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6.29 6.29l1.1-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +212 693 105 498
            </a>
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '72px' }}>
            <Link href="/projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              View Projects
            </Link>
            <Link href="/blog" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
              Read Articles
            </Link>
            <Link href="/contact" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              Hire Me
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(24px, 5vw, 64px)', flexWrap: 'wrap', padding: '28px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{s.icon}</div>
                <div className="gradient-text-blue" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '500', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.78rem', opacity: 0.5 }}>
            <span>Scroll to explore</span>
            <div style={{ width: '22px', height: '36px', border: '1px solid var(--border-color)', borderRadius: '11px', display: 'flex', justifyContent: 'center', paddingTop: '5px' }}>
              <div style={{ width: '3px', height: '7px', background: 'var(--accent-cyan)', borderRadius: '2px', animation: 'float 1.5s ease-in-out infinite' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ──────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-secondary)', padding: '100px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="tech-badge" style={{ marginBottom: '14px' }}>What I Do</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              Services I <span className="gradient-text">Offer</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              From API design to deployment — I cover the full stack.
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

      {/* ── EXPERIENCE ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="tech-badge" style={{ marginBottom: '14px' }}>Journey</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              3+ years across 4 companies — building real-world systems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            {timeline.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '24px 26px',
                  borderTop: `3px solid ${item.color}`,
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                    background: `${item.color}18`, border: `1px solid ${item.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}>
                    {item.dot}
                  </div>
                  <span style={{
                    background: `${item.color}15`, color: item.color,
                    padding: '3px 12px', borderRadius: '20px',
                    fontSize: '0.72rem', fontWeight: '700', whiteSpace: 'nowrap',
                    border: `1px solid ${item.color}30`,
                  }}>
                    {item.period}
                  </span>
                </div>

                {/* Role */}
                <div>
                  <div style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '0.98rem', marginBottom: '4px' }}>
                    {item.role}
                  </div>
                  <div style={{ color: item.color, fontWeight: '600', fontSize: '0.83rem' }}>
                    {item.company} · {item.location}
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── FEATURED PROJECTS ───────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="tech-badge" style={{ marginBottom: '10px' }}>Portfolio</span>
              <h2 className="section-title" style={{ marginTop: '10px', marginBottom: '6px' }}>
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {projects.length} real-world projects from my CV — here are the highlights.
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

      {/* ── TECH STACK ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-primary)', padding: '100px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="tech-badge" style={{ marginBottom: '14px' }}>Tech Stack</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              Skills &amp; <span className="gradient-text">Technologies</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              Everything I use to build, ship, and maintain production systems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              {
                icon: '⚛️',
                label: 'Frontend',
                color: '#06b6d4',
                gradient: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.03))',
                skills: [
                  { name: 'React.js', icon: '⚛️' },
                  { name: 'Blazor Server', icon: '🔵' },
                  { name: 'JavaScript ES6+', icon: '📜' },
                  { name: 'HTML5 / CSS3', icon: '🎨' },
                  { name: 'MUI', icon: '🧩' },
                  { name: 'Bootstrap', icon: '🎭' },
                ],
              },
              {
                icon: '⚡',
                label: 'Backend',
                color: '#a855f7',
                gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))',
                skills: [
                  { name: 'ASP.NET Core 8', icon: '⚡' },
                  { name: 'ASP.NET Framework', icon: '🏗️' },
                  { name: 'C#', icon: '💜' },
                  { name: 'SignalR', icon: '📡' },
                  { name: 'Razor Pages', icon: '📄' },
                  { name: 'PHP', icon: '🐘' },
                ],
              },
              {
                icon: '🗄️',
                label: 'Databases',
                color: '#f59e0b',
                gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.03))',
                skills: [
                  { name: 'SQL Server 2019', icon: '🗄️' },
                  { name: 'MySQL', icon: '🐬' },
                  { name: 'Entity Framework', icon: '🔗' },
                ],
              },
              {
                icon: '🐳',
                label: 'DevOps & Tools',
                color: '#f97316',
                gradient: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.03))',
                skills: [
                  { name: 'Docker', icon: '🐳' },
                  { name: 'Jenkins', icon: '⚙️' },
                  { name: 'Azure DevOps CI/CD', icon: '☁️' },
                  { name: 'GitHub', icon: '🐙' },
                  { name: 'VPS / Linux Ubuntu', icon: '🐧' },
                ],
              },
              {
                icon: '🏛️',
                label: 'Architecture',
                color: '#8b5cf6',
                gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))',
                skills: [
                  { name: 'Microservices', icon: '🔀' },
                  { name: 'CQRS / MediatR', icon: '🔄' },
                  { name: 'Clean Architecture', icon: '🏛️' },
                  { name: 'Repository Pattern', icon: '📦' },
                  { name: 'REST API', icon: '🌐' },
                ],
              },
            ].map((cat) => (
              <div
                key={cat.label}
                className="card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  borderTop: `3px solid ${cat.color}`,
                  borderRadius: '14px',
                }}
              >
                {/* Card Header */}
                <div style={{
                  padding: '20px 22px 16px',
                  background: cat.gradient,
                  borderBottom: `1px solid ${cat.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: `${cat.color}20`, border: `1px solid ${cat.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                    boxShadow: `0 4px 16px ${cat.color}20`,
                  }}>
                    {cat.icon}
                  </div>
                  <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '1rem', letterSpacing: '-0.01em' }}>
                    {cat.label}
                  </span>
                  <span style={{
                    marginLeft: 'auto', background: `${cat.color}15`, color: cat.color,
                    padding: '2px 10px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '700',
                    border: `1px solid ${cat.color}30`,
                  }}>
                    {cat.skills.length} skills
                  </span>
                </div>

                {/* Skills */}
                <div style={{ padding: '18px 22px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        background: 'var(--bg-tertiary)',
                        border: `1px solid ${cat.color}25`,
                        borderRadius: '8px', padding: '5px 12px',
                        fontSize: '0.8rem', color: 'var(--text-secondary)',
                        fontWeight: '500',
                      }}
                    >
                      <span style={{ fontSize: '0.85rem' }}>{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── LATEST BLOG ────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-secondary)', padding: '100px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="tech-badge" style={{ marginBottom: '10px' }}>Writing</span>
              <h2 className="section-title" style={{ marginTop: '10px', marginBottom: '6px' }}>
                Latest <span className="gradient-text">Articles</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Deep dives into .NET, CQRS, Blazor, SignalR and DevOps.
              </p>
            </div>
            <Link href="/blog" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              See all 5 articles
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

      {/* ── FINAL CTA ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(59,130,246,0.08) 50%, rgba(6,182,212,0.06) 100%)',
          borderTop: '1px solid var(--border-color)',
          padding: '100px 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

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
            Whether you need a .NET backend, a Blazor or React UI, or a full CI/CD pipeline — I&apos;m ready. Let&apos;s talk.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              Get In Touch
            </Link>
            <Link href="/about" className="btn-outline" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
              More About Me
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
