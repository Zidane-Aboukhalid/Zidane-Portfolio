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

    // Related projects (same category, different id)
    const related = projects
        .filter((p) => p.category === project.category && p.id !== id)
        .slice(0, 2);

    return (
        <div style={{ paddingTop: '68px' }}>
            {/* Hero banner */}
            <div
                style={{
                    background: project.gradient,
                    padding: '64px 0 48px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '320px', height: '320px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Breadcrumb */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                        <Link
                            href="/projects"
                            style={{
                                color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                                fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px',
                                transition: 'color 0.2s',
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                            All Projects
                        </Link>
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
                        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem' }}>{project.title}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap' }}>
                        <div
                            style={{
                                width: '72px', height: '72px',
                                background: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '16px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '2.2rem', flexShrink: 0,
                            }}
                        >
                            {project.icon}
                        </div>
                        <div>
                            <div
                                style={{
                                    display: 'inline-block', background: 'rgba(0,0,0,0.25)',
                                    color: 'rgba(255,255,255,0.9)', padding: '4px 14px',
                                    borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700',
                                    marginBottom: '10px',
                                }}
                            >
                                {project.category}
                            </div>
                            <h1
                                style={{
                                    fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: '900',
                                    color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1,
                                }}
                            >
                                {project.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div style={{ background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ padding: '56px 24px' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0, 1fr) 320px',
                            gap: '40px',
                            alignItems: 'start',
                        }}
                        className="project-detail-grid"
                    >
                        {/* Main content */}
                        <div>
                            {/* Overview */}
                            <section style={{ marginBottom: '40px' }}>
                                <h2
                                    style={{
                                        fontWeight: '700', fontSize: '1.15rem',
                                        color: 'var(--text-primary)', marginBottom: '14px',
                                        paddingBottom: '10px', borderBottom: '1px solid var(--border-color)',
                                    }}
                                >
                                    Overview
                                </h2>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.85', fontSize: '0.98rem' }}>
                                    {project.longDesc}
                                </p>
                            </section>

                            {/* Challenges */}
                            <section style={{ marginBottom: '40px' }}>
                                <h2
                                    style={{
                                        fontWeight: '700', fontSize: '1.15rem',
                                        color: 'var(--text-primary)', marginBottom: '14px',
                                        paddingBottom: '10px', borderBottom: '1px solid var(--border-color)',
                                    }}
                                >
                                    Key Challenge
                                </h2>
                                <div
                                    className="card"
                                    style={{
                                        padding: '20px 24px',
                                        borderLeft: '3px solid var(--accent-blue)',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                                        {project.challenges}
                                    </p>
                                </div>
                            </section>

                            {/* Outcome */}
                            <section style={{ marginBottom: '40px' }}>
                                <h2
                                    style={{
                                        fontWeight: '700', fontSize: '1.15rem',
                                        color: 'var(--text-primary)', marginBottom: '14px',
                                        paddingBottom: '10px', borderBottom: '1px solid var(--border-color)',
                                    }}
                                >
                                    Outcome
                                </h2>
                                <div
                                    className="card"
                                    style={{
                                        padding: '20px 24px',
                                        borderLeft: '3px solid #22c55e',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                                        {project.outcome}
                                    </p>
                                </div>
                            </section>

                            {/* Tech Stack */}
                            <section>
                                <h2
                                    style={{
                                        fontWeight: '700', fontSize: '1.15rem',
                                        color: 'var(--text-primary)', marginBottom: '16px',
                                        paddingBottom: '10px', borderBottom: '1px solid var(--border-color)',
                                    }}
                                >
                                    Technology Stack
                                </h2>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="tech-badge" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <aside>
                            {/* Links card */}
                            <div className="card" style={{ padding: '24px', marginBottom: '20px' }}>
                                <h3 style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
                                    Project Links
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                            style={{ justifyContent: 'center' }}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline"
                                        style={{ justifyContent: 'center' }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                        View on GitHub
                                    </a>
                                </div>
                            </div>

                            {/* Meta card */}
                            <div className="card" style={{ padding: '24px', marginBottom: '20px' }}>
                                <h3 style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
                                    Details
                                </h3>
                                {[
                                    { label: 'Category', value: project.category },
                                    { label: 'Type', value: project.featured ? 'Featured' : 'Side Project' },
                                    { label: 'Stack', value: `${project.technologies.length} technologies` },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        style={{
                                            display: 'flex', justifyContent: 'space-between',
                                            padding: '10px 0', borderBottom: '1px solid var(--border-color)',
                                        }}
                                    >
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.label}</span>
                                        <span style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600' }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Related */}
                            {related.length > 0 && (
                                <div>
                                    <h3 style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                                        Related Projects
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {related.map((rp) => (
                                            <Link
                                                key={rp.id}
                                                href={`/projects/${rp.id}`}
                                                className="card"
                                                style={{
                                                    padding: '14px 16px', display: 'flex',
                                                    alignItems: 'center', gap: '12px',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: '36px', height: '36px', borderRadius: '8px',
                                                        background: rp.gradient, flexShrink: 0,
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        fontSize: '1rem',
                                                    }}
                                                >
                                                    {rp.icon}
                                                </div>
                                                <span style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600', lineHeight: 1.3 }}>
                                                    {rp.title.split('—')[0].trim()}
                                                </span>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" style={{ marginLeft: 'auto', flexShrink: 0 }}>
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
        </div>
    );
}
