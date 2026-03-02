'use client';

import { useState } from 'react';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
        color: '#e2e8f0',
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        color: '#0a66c2',
    },
    {
        name: 'Email',
        href: 'mailto:hello@zidane.dev',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        color: '#06b6d4',
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        setStatus('sending');
        // Simulate send
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                {/* Ambient glow */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }} />

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative' }}>
                    <span className="tech-badge" style={{ marginBottom: '16px' }}>Get In Touch</span>
                    <h2 className="section-title" style={{ marginTop: '12px' }}>
                        Let&apos;s <span className="gradient-text">Work Together</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '48px',
                    alignItems: 'start',
                    maxWidth: '900px',
                    margin: '0 auto',
                }}>
                    {/* Left — Info */}
                    <div>
                        <h3 style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
                            Say Hello 👋
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '32px', fontSize: '0.95rem' }}>
                            I&apos;m currently open to full-time roles, freelance projects, and exciting collaborations.
                            Whether you have a question or just want to connect — my inbox is always open!
                        </p>

                        {/* Social Links */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {socialLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.name !== 'Email' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="card"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '14px',
                                        padding: '16px 20px',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        borderRadius: '10px',
                                        transition: 'all 0.3s ease',
                                    }}
                                    aria-label={`Connect on ${link.name}`}
                                >
                                    <div style={{
                                        width: '40px', height: '40px',
                                        borderRadius: '10px',
                                        background: `${link.color}18`,
                                        border: `1px solid ${link.color}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: link.color,
                                        flexShrink: 0,
                                    }}>
                                        {link.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{link.name}</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                            {link.name === 'Email' ? 'hello@zidane.dev' : `/${link.name.toLowerCase()}.com/zidane`}
                                        </div>
                                    </div>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ marginLeft: 'auto' }}>
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Availability badge */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            background: 'rgba(34, 197, 94, 0.08)',
                            border: '1px solid rgba(34, 197, 94, 0.2)',
                            borderRadius: '10px',
                            padding: '14px 18px',
                            marginTop: '24px',
                        }}>
                            <div style={{
                                width: '10px', height: '10px', borderRadius: '50%',
                                background: '#22c55e',
                                boxShadow: '0 0 10px #22c55e',
                                animation: 'pulse-glow 2s ease-in-out infinite',
                                flexShrink: 0,
                            }} />
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#22c55e' }}>Available for hire</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Open to full-time & freelance</div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="card" style={{ padding: '32px' }}>
                        {status === 'sent' ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
                                <h3 style={{ fontWeight: '800', fontSize: '1.3rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                                    Message Sent!
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                <div>
                                    <label htmlFor="contact-name" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>
                                        Full Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="form-input"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>
                                        Email Address
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="form-input"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-message" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        className="form-input"
                                        rows={5}
                                        required
                                        disabled={status === 'sending'}
                                        style={{ resize: 'vertical', minHeight: '120px' }}
                                    />
                                </div>

                                <button
                                    id="submit-contact"
                                    type="submit"
                                    className="btn-primary"
                                    disabled={status === 'sending'}
                                    style={{
                                        justifyContent: 'center',
                                        opacity: status === 'sending' ? 0.7 : 1,
                                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                    }}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'rotate 1s linear infinite' }}>
                                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
