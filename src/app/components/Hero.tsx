'use client';

import { useEffect, useRef, useState } from 'react';

const TYPING_ROLES = [
    'Full Stack Developer',
    '.NET Engineer',
    'React Developer',
    'DevOps Enthusiast',
    'TypeScript Advocate',
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
        setVisible(true);
    }, []);

    useEffect(() => {
        const currentRole = TYPING_ROLES[roleIndex];
        const speed = isDeleting ? 50 : 90;

        timeoutRef.current = setTimeout(() => {
            if (!isDeleting && displayedRole === currentRole) {
                setTimeout(() => setIsDeleting(true), 1800);
                return;
            }
            if (isDeleting && displayedRole === '') {
                setIsDeleting(false);
                setRoleIndex(prev => (prev + 1) % TYPING_ROLES.length);
                return;
            }
            setDisplayedRole(prev =>
                isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
            );
        }, speed);

        return () => clearTimeout(timeoutRef.current);
    }, [displayedRole, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="grid-bg"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px',
            }}
        >
            {/* Ambient orbs */}
            <div style={{
                position: 'absolute',
                top: '15%',
                left: '10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                filter: 'blur(40px)',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                filter: 'blur(40px)',
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '25%',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                filter: 'blur(30px)',
            }} />

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {/* Badge */}
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '100px',
                        padding: '6px 16px',
                        marginBottom: '32px',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.6s ease',
                    }}
                >
                    <span style={{
                        width: '8px', height: '8px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        boxShadow: '0 0 8px #22c55e',
                        display: 'inline-block',
                    }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '500' }}>
                        Available for work
                    </span>
                </div>

                {/* Name */}
                <h1
                    style={{
                        fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                        fontWeight: '900',
                        lineHeight: 1.05,
                        letterSpacing: '-0.03em',
                        marginBottom: '16px',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.6s ease 0.1s',
                    }}
                >
                    Hi, I&apos;m{' '}
                    <span className="gradient-text">Zidane</span>
                </h1>

                {/* Typing Role */}
                <h2
                    style={{
                        fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
                        fontWeight: '600',
                        color: 'var(--text-secondary)',
                        marginBottom: '28px',
                        lineHeight: 1.3,
                        minHeight: '3rem',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.6s ease 0.2s',
                    }}
                >
                    {displayedRole}
                    <span className="typing-cursor">|</span>
                </h2>

                {/* Tagline */}
                <p
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                        color: 'var(--text-muted)',
                        maxWidth: '600px',
                        margin: '0 auto 44px',
                        lineHeight: 1.8,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.6s ease 0.3s',
                    }}
                >
                    Crafting scalable, high-performance web apps with modern technologies.
                    Passionate about clean code, great UX, and continuous delivery.
                </p>

                {/* CTA Buttons */}
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '64px',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.6s ease 0.4s',
                    }}
                >
                    <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        View Projects
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="btn-outline"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download CV
                    </a>
                </div>

                {/* Stats */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'clamp(24px, 5vw, 60px)',
                        flexWrap: 'wrap',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.6s ease 0.5s',
                    }}
                >
                    {[
                        { value: '3+', label: 'Years Experience' },
                        { value: '20+', label: 'Projects Built' },
                        { value: '10+', label: 'Technologies' },
                    ].map(stat => (
                        <div key={stat.label} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.02em',
                                lineHeight: 1,
                                marginBottom: '6px',
                            }} className="gradient-text-blue">
                                {stat.value}
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '500' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div
                    style={{
                        marginTop: '72px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--text-muted)',
                        fontSize: '0.8rem',
                        opacity: visible ? 0.6 : 0,
                        transition: 'opacity 0.6s ease 0.8s',
                        cursor: 'pointer',
                    }}
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <span>Scroll down</span>
                    <div style={{
                        width: '24px',
                        height: '38px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '6px',
                    }}>
                        <div style={{
                            width: '3px',
                            height: '8px',
                            background: 'var(--accent-cyan)',
                            borderRadius: '2px',
                            animation: 'float 1.5s ease-in-out infinite',
                        }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
