import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me',
    description:
        'Learn about Zidane Aboukhalid — Full Stack Developer based in Casablanca, Morocco. 3+ years experience with ASP.NET Core, React, Blazor, Docker, and CI/CD across 4 companies.',
    keywords: ['Zidane Aboukhalid About', 'Full Stack Developer Morocco', 'ASP.NET Core Developer', 'React Developer Casablanca'],
    alternates: { canonical: 'https://aboukhalid-zidane.com/about' },
    openGraph: {
        title: 'About Zidane Aboukhalid — Full Stack Developer',
        description: '3+ years experience with ASP.NET Core, React, Blazor, Docker, and CI/CD across 4 companies in Casablanca.',
        url: 'https://aboukhalid-zidane.com/about',
    },
};

const skills = [
    { name: 'ASP.NET Core / C#', level: 92, icon: '⚡', color: '#a855f7' },
    { name: 'React.js / JavaScript', level: 88, icon: '⚛️', color: '#06b6d4' },
    { name: 'Blazor Server', level: 80, icon: '🔵', color: '#3b82f6' },
    { name: 'SQL Server / MySQL', level: 82, icon: '🗄️', color: '#f59e0b' },
    { name: 'Docker / Jenkins', level: 80, icon: '🐳', color: '#06b6d4' },
    { name: 'Microservices / CQRS', level: 85, icon: '🏗️', color: '#8b5cf6' },
    { name: 'Azure DevOps / CI/CD', level: 78, icon: '☁️', color: '#3b82f6' },
    { name: 'Git / GitHub', level: 90, icon: '🔀', color: '#f97316' },
];

const experiences = [
    {
        title: '.NET Developer — Back-End Developer',
        company: 'Unibitsoft · Casablanca',
        period: 'Aug 2025 – Present',
        desc: 'Developed a CMMS (Computerized Maintenance Management System) using ASP.NET Core 8 Web API. Designed RESTful endpoints following Clean Architecture. Built core modules: work orders, asset management, and preventive maintenance scheduling.',
        color: '#a855f7',
    },
    {
        title: 'Full-Stack Developer — .NET Core · React · Blazor Server',
        company: 'Telco Solution · Casablanca',
        period: 'Jun 2024 – Aug 2025',
        desc: 'Built Web APIs synchronized with Odoo ERP. Implemented microservices with CQRS pattern. Created a real-time recruitment platform (Blazor Server + SignalR). Developed a call-center app with React.js + MUI. Deployed with Docker + Jenkins CI/CD on VPS.',
        color: '#3b82f6',
    },
    {
        title: 'Full-Stack Developer — .NET Core · Razor Pages',
        company: 'Perfect Shore (Pixel IQ – CRM CEE) · Casablanca',
        period: 'Feb 2024 – May 2024',
        desc: 'Developed and maintained a CRM system. Created dynamic pages with ASP.NET Razor Pages. Designed and optimized databases using SQL Server 2019. Collaborated on feature implementation and bug fixes based on user feedback.',
        color: '#06b6d4',
    },
    {
        title: 'Full-Stack Developer — .NET / React',
        company: 'JobInTech Bootcamp · UIR, Maroc',
        period: 'Oct 2023 – Feb 2024',
        desc: 'Contributed to the Moroccan Microsoft Community platform (ASP.NET Core + React). Applied Clean Architecture, CQRS with MediatR, and microservices. CI/CD deployment on Azure DevOps. Also built UIR Shop e-commerce app and Trip Buddy mobile app.',
        color: '#10b981',
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
                        Full Stack Developer specializing in React &amp; .NET, with nearly 3 years of experience building high-performance web interfaces and back-end systems.
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
                                    I&apos;m a Full Stack Developer specializing in React and .NET, with nearly 3 years
                                    of experience building high-performance web interfaces and integrating back-end systems.
                                    Experienced in demanding technical environments including industrial and microservices contexts.
                                </p>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.85', fontSize: '0.95rem' }}>
                                    Serious, autonomous, and quality-oriented — I thrive on complex engineering challenges
                                    and stay current with the ever-evolving web ecosystem.
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
