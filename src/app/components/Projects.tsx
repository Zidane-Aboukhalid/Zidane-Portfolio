'use client';

import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'DevFlow — Project Management SaaS',
        description:
            'A full-featured project management tool with real-time collaboration, kanban boards, sprint planning, and analytics dashboards.',
        longDescription:
            'Built with Next.js 14, ASP.NET Core microservices, PostgreSQL, and SignalR for real-time updates. Deployed on Azure with Docker and GitHub Actions CI/CD.',
        technologies: ['Next.js', 'ASP.NET Core', 'PostgreSQL', 'Docker', 'Azure', 'SignalR'],
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
        category: 'Full Stack',
        icon: '📋',
        gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        featured: true,
    },
    {
        id: 2,
        title: 'ShopFlow — E-Commerce Platform',
        description:
            'A high-performance e-commerce platform with AI-powered product recommendations, stripe payments, and an admin dashboard.',
        longDescription:
            'Built with Next.js, TypeScript, Prisma ORM, and Stripe. Features include server-side rendering, optimized images, and a headless CMS integration.',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS'],
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
        category: 'Full Stack',
        icon: '🛒',
        gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
        featured: true,
    },
    {
        id: 3,
        title: 'CloudSync — DevOps Dashboard',
        description:
            'A unified DevOps monitoring dashboard that aggregates metrics from multiple cloud providers, CI/CD pipelines, and deployment logs.',
        longDescription:
            'Uses React + Recharts for data visualization, ASP.NET Core backend polling AWS, Azure, and GCP metrics. Containerized with Kubernetes.',
        technologies: ['React', '.NET Core', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
        category: 'DevOps',
        icon: '☁️',
        gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        featured: false,
    },
    {
        id: 4,
        title: 'AuthKit — Authentication Microservice',
        description:
            'A plug-and-play authentication microservice supporting OAuth2, JWT, MFA, and session management for enterprise applications.',
        longDescription:
            'Built with ASP.NET Core Identity, Redis for session caching, and SQL Server. Provides REST and gRPC endpoints.',
        technologies: ['.NET Core', 'Redis', 'PostgreSQL', 'Docker', 'JWT', 'OAuth2'],
        liveUrl: null,
        githubUrl: 'https://github.com',
        category: 'Backend',
        icon: '🔐',
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        featured: false,
    },
    {
        id: 5,
        title: 'BlogCMS — Headless Content Platform',
        description:
            'A modern headless CMS with rich text editing, image optimization, SEO management, and multi-language support.',
        longDescription:
            'Next.js App Router, Prisma + PostgreSQL database, TipTap rich text editor, Cloudinary for media, deployed on Vercel.',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudinary', 'TypeScript'],
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
        category: 'Full Stack',
        icon: '✍️',
        gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
        featured: false,
    },
    {
        id: 6,
        title: 'PipelineBot — GitHub Actions Automation',
        description:
            'A GitHub App that auto-generates CI/CD pipelines based on project type detection, saving hours of DevOps configuration.',
        longDescription:
            'Node.js + TypeScript GitHub App. Analyzes repo structure to generate optimized GitHub Actions workflows for Next.js, .NET, Python, and more.',
        technologies: ['Node.js', 'TypeScript', 'GitHub API', 'Docker', 'GitHub Actions'],
        liveUrl: null,
        githubUrl: 'https://github.com',
        category: 'DevOps',
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        featured: false,
    },
];

const categories = ['All', 'Full Stack', 'DevOps', 'Backend'];

interface ProjectModalProps {
    project: (typeof projects)[0] | null;
    onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(8px)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
            }}
            onClick={onClose}
        >
            <div
                onClick={e => e.stopPropagation()}
                className="card"
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    padding: '32px',
                    position: 'relative',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                }}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                    }}
                >
                    ✕
                </button>

                {/* Header */}
                <div style={{
                    width: '60px', height: '60px',
                    borderRadius: '14px',
                    background: project.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.8rem',
                    marginBottom: '20px',
                }}>
                    {project.icon}
                </div>

                <div style={{
                    display: 'inline-flex', alignItems: 'center',
                    background: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    color: 'var(--accent-cyan)',
                    padding: '3px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginBottom: '12px',
                }}>
                    {project.category}
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                    {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px', fontSize: '0.95rem' }}>
                    {project.longDescription}
                </p>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                    {project.technologies.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Live Demo
                        </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <>
            <section id="projects" className="section">
                <div className="container">
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span className="tech-badge" style={{ marginBottom: '16px' }}>Portfolio</span>
                        <h2 className="section-title" style={{ marginTop: '12px' }}>
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="section-subtitle">
                            A selection of my recent work spanning full-stack, DevOps, and backend engineering.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '100px',
                                    border: '1px solid',
                                    borderColor: activeCategory === cat ? 'var(--accent-blue)' : 'var(--border-color)',
                                    background: activeCategory === cat ? 'rgba(59,130,246,0.15)' : 'transparent',
                                    color: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--text-muted)',
                                    fontWeight: '600',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    fontFamily: 'inherit',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                        gap: '24px',
                    }}>
                        {filtered.map((project) => (
                            <div
                                key={project.id}
                                className="project-card"
                                onClick={() => setSelectedProject(project)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={e => e.key === 'Enter' && setSelectedProject(project)}
                                style={{ cursor: 'pointer' }}
                                aria-label={`View details for ${project.title}`}
                            >
                                {/* Gradient header */}
                                <div style={{
                                    height: '120px',
                                    background: project.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '24px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-20px', right: '-20px',
                                        width: '100px', height: '100px',
                                        background: 'rgba(255,255,255,0.08)',
                                        borderRadius: '50%',
                                    }} />
                                    <div style={{
                                        width: '52px', height: '52px',
                                        background: 'rgba(255,255,255,0.15)',
                                        borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.6rem',
                                    }}>
                                        {project.icon}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: 'rgba(0,0,0,0.25)',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        color: 'rgba(255,255,255,0.9)',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                    }}>
                                        {project.category}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="project-card-body">
                                    <h3 style={{
                                        fontWeight: '700',
                                        fontSize: '1.05rem',
                                        marginBottom: '10px',
                                        color: 'var(--text-primary)',
                                        lineHeight: 1.3,
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.875rem',
                                        lineHeight: '1.7',
                                        marginBottom: '16px',
                                        flex: 1,
                                    }}>
                                        {project.description}
                                    </p>

                                    {/* Tech badges */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                                        {project.technologies.slice(0, 4).map(tech => (
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

                                    {/* Links */}
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '5px',
                                                    color: 'var(--accent-cyan)', fontSize: '0.82rem', fontWeight: '600',
                                                    textDecoration: 'none',
                                                    transition: 'opacity 0.2s',
                                                }}
                                                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                                                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                                            >
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                                Demo
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '5px',
                                                color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: '600',
                                                textDecoration: 'none',
                                                transition: 'opacity 0.2s',
                                            }}
                                            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                                            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                            Code
                                        </a>
                                        <span style={{
                                            marginLeft: 'auto',
                                            color: 'var(--accent-blue)',
                                            fontSize: '0.82rem',
                                            fontWeight: '600',
                                            display: 'flex', alignItems: 'center', gap: '4px',
                                        }}>
                                            View Details
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    );
}
