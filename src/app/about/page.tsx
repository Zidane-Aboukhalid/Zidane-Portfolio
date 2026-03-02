import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About' };

const skills = [
    { name: '.NET / C#', level: 90, icon: '⚡', color: '#a855f7' },
    { name: 'React.js', level: 88, icon: '⚛️', color: '#06b6d4' },
    { name: 'Next.js', level: 85, icon: '▲', color: '#e2e8f0' },
    { name: 'TypeScript', level: 83, icon: '🔷', color: '#3b82f6' },
    { name: 'DevOps / Docker', level: 78, icon: '🐳', color: '#06b6d4' },
    { name: 'Tailwind CSS', level: 90, icon: '🎨', color: '#38bdf8' },
    { name: 'PostgreSQL / SQL', level: 80, icon: '🗄️', color: '#f59e0b' },
    { name: 'Git / CI/CD', level: 85, icon: '🔀', color: '#f97316' },
];

const experiences = [
    {
        title: 'Full Stack Developer Intern',
        company: 'Tech Innovations Co.',
        period: '2023 – 2024',
        desc: 'Built REST APIs with ASP.NET Core and React dashboards. Deployed to Azure with Docker and GitHub Actions CI/CD pipelines.',
        color: '#3b82f6',
    },
    {
        title: 'Frontend Developer',
        company: 'Startup Labs',
        period: '2022 – 2023',
        desc: 'Developed responsive UIs with React + TypeScript. Implemented state management with Zustand and unit testing with Vitest.',
        color: '#06b6d4',
    },
    {
        title: 'Freelance Developer',
        company: 'Self-employed',
        period: '2021 – Present',
        desc: 'Delivered 10+ client projects: e-commerce sites, SaaS dashboards, REST APIs, and CI/CD pipeline setup.',
        color: '#8b5cf6',
    },
];

const highlights = [
    { icon: '🚀', label: 'Performance-first', sub: 'Optimised solutions' },
    { icon: '🛡️', label: 'Security-focused', sub: 'Best practices' },
    { icon: '📱', label: 'Responsive', sub: 'All screen sizes' },
    { icon: '🔄', label: 'CI/CD', sub: 'Continuous delivery' },
];

export default function AboutPage() {
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
                    <span className="tech-badge" style={{ marginBottom: '14px' }}>About Me</span>
                    <h1 className="section-title" style={{ marginTop: '12px' }}>
                        Passionate About <span className="gradient-text">Building Things</span>
                    </h1>
                    <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
                        Full Stack Developer with 3+ years crafting production-ready web applications.
                    </p>
                </div>
            </div>

            {/* Main content */}
            <div
                className="section"
                style={{ background: 'var(--bg-secondary)' }}
            >
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '48px',
                            alignItems: 'start',
                        }}
                    >
                        {/* Left column */}
                        <div>
                            {/* Bio card */}
                            <div className="card" style={{ padding: '32px', marginBottom: '28px' }}>
                                <div
                                    style={{
                                        width: '72px', height: '72px', borderRadius: '16px',
                                        background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '2rem', marginBottom: '20px',
                                    }}
                                >
                                    👨‍💻
                                </div>
                                <h2 style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                                    My Background
                                </h2>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.85', marginBottom: '14px', fontSize: '0.95rem' }}>
                                    I&apos;m a Full Stack Developer with 3+ years of experience delivering production-ready
                                    web applications. My expertise spans backend (.NET Core, Node.js), frontend (React,
                                    Next.js), and infrastructure (Docker, Kubernetes, Azure).
                                </p>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.85', fontSize: '0.95rem' }}>
                                    I thrive on complex engineering challenges, enjoy contributing to open source, and
                                    stay current with the ever-evolving web ecosystem.
                                </p>
                            </div>

                            {/* Experience */}
                            <h2 style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
                                Experience
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {experiences.map((exp) => (
                                    <div
                                        key={exp.title}
                                        className="card"
                                        style={{ padding: '20px', borderLeft: `3px solid ${exp.color}`, borderRadius: '8px' }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex', justifyContent: 'space-between',
                                                alignItems: 'flex-start', marginBottom: '6px', flexWrap: 'wrap', gap: '6px',
                                            }}
                                        >
                                            <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                                                {exp.title}
                                            </span>
                                            <span
                                                style={{
                                                    background: 'rgba(59,130,246,0.1)', color: 'var(--accent-cyan)',
                                                    padding: '2px 10px', borderRadius: '20px',
                                                    fontSize: '0.75rem', whiteSpace: 'nowrap',
                                                }}
                                            >
                                                {exp.period}
                                            </span>
                                        </div>
                                        <div style={{ color: exp.color, fontSize: '0.85rem', fontWeight: '600', marginBottom: '8px' }}>
                                            {exp.company}
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                                            {exp.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right column — skills */}
                        <div>
                            <h2 style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '24px', color: 'var(--text-primary)' }}>
                                Technical Skills
                            </h2>
                            <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
                                {skills.map((skill, i) => (
                                    <div key={skill.name} style={{ marginBottom: i < skills.length - 1 ? '24px' : 0 }}>
                                        <div
                                            style={{
                                                display: 'flex', justifyContent: 'space-between',
                                                alignItems: 'center', marginBottom: '8px',
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span style={{ fontSize: '1rem' }}>{skill.icon}</span>
                                                <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '600' }}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Highlights grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                {highlights.map((item) => (
                                    <div key={item.label} className="card" style={{ padding: '18px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{item.icon}</div>
                                        <div style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
                                            {item.label}
                                        </div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{item.sub}</div>
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
