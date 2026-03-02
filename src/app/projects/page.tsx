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
        <div style={{ paddingTop: '68px' }}>
            {/* Page header */}
            <div
                style={{
                    background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
                    borderBottom: '1px solid var(--border-color)',
                    padding: '64px 0 48px',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <span className="tech-badge" style={{ marginBottom: '14px' }}>Portfolio</span>
                    <h1 className="section-title" style={{ marginTop: '12px' }}>
                        Featured <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
                        A selection of production-grade work spanning full-stack, DevOps, and backend engineering.
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    {/* Category filter — server-side via query param */}
                    <div
                        style={{
                            display: 'flex', justifyContent: 'center',
                            gap: '10px', flexWrap: 'wrap', marginBottom: '48px',
                        }}
                    >
                        {categories.map((cat) => (
                            <Link
                                key={cat}
                                href={cat === 'All' ? '/projects' : `/projects?category=${cat}`}
                                style={{
                                    padding: '8px 20px', borderRadius: '100px',
                                    border: '1px solid',
                                    borderColor: activeCategory === cat ? 'var(--accent-blue)' : 'var(--border-color)',
                                    background: activeCategory === cat ? 'rgba(59,130,246,0.15)' : 'transparent',
                                    color: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--text-muted)',
                                    fontWeight: '600', fontSize: '0.85rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                    display: 'inline-block',
                                }}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>

                    {/* Projects grid */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: '24px',
                        }}
                    >
                        {filtered.map((project) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                style={{ textDecoration: 'none' }}
                                aria-label={`View details for ${project.title}`}
                            >
                                <div className="project-card" style={{ height: '100%' }}>
                                    {/* Gradient header */}
                                    <div
                                        style={{
                                            height: '120px', background: project.gradient,
                                            display: 'flex', alignItems: 'center',
                                            justifyContent: 'space-between', padding: '24px',
                                            position: 'relative', overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute', top: '-20px', right: '-20px',
                                                width: '100px', height: '100px',
                                                background: 'rgba(255,255,255,0.08)', borderRadius: '50%',
                                            }}
                                        />
                                        <div
                                            style={{
                                                width: '52px', height: '52px',
                                                background: 'rgba(255,255,255,0.15)', borderRadius: '12px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '1.6rem',
                                            }}
                                        >
                                            {project.icon}
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '8px',
                                                background: 'rgba(0,0,0,0.25)', padding: '4px 12px',
                                                borderRadius: '20px', color: 'rgba(255,255,255,0.9)',
                                                fontSize: '0.75rem', fontWeight: '600',
                                            }}
                                        >
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="project-card-body">
                                        <h2
                                            style={{
                                                fontWeight: '700', fontSize: '1.05rem',
                                                marginBottom: '10px', color: 'var(--text-primary)', lineHeight: 1.3,
                                            }}
                                        >
                                            {project.title}
                                        </h2>
                                        <p
                                            style={{
                                                color: 'var(--text-secondary)', fontSize: '0.875rem',
                                                lineHeight: '1.7', marginBottom: '16px', flex: 1,
                                            }}
                                        >
                                            {project.shortDesc}
                                        </p>

                                        {/* Tech badges */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <span key={tech} className="tech-badge" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="tech-badge" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
                                                    +{project.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.83rem',
                                            }}
                                        >
                                            View Details
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
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
