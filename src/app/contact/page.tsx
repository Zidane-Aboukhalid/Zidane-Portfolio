import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = { title: 'Contact' };

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/zidane-aboukhalid',
        detail: 'linkedin.com/in/zidane-aboukhalid',
        color: '#0a66c2',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'Email',
        href: 'mailto:zidane.aboukhalid@gmail.com',
        detail: 'zidane.aboukhalid@gmail.com',
        color: '#06b6d4',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        name: 'Phone',
        href: 'tel:+212693105498',
        detail: '+212 693 105 498',
        color: '#22c55e',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.44 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6.29 6.29l1.1-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        name: 'Location',
        href: 'https://maps.google.com/?q=Casablanca,Morocco',
        detail: 'Casablanca, Maroc',
        color: '#f59e0b',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
];

export default function ContactPage() {
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
                    <span className="tech-badge" style={{ marginBottom: '14px' }}>Get In Touch</span>
                    <h1 className="section-title" style={{ marginTop: '12px' }}>
                        Let&apos;s <span className="gradient-text">Work Together</span>
                    </h1>
                    <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
                        Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '48px',
                            alignItems: 'start',
                            maxWidth: '960px',
                            margin: '0 auto',
                        }}
                    >
                        {/* Left — social links + info */}
                        <div>
                            <h2
                                style={{
                                    fontWeight: '700', fontSize: '1.2rem',
                                    marginBottom: '20px', color: 'var(--text-primary)',
                                }}
                            >
                                Say Hello 👋
                            </h2>
                            <p
                                style={{
                                    color: 'var(--text-secondary)', lineHeight: '1.85',
                                    marginBottom: '32px', fontSize: '0.95rem',
                                }}
                            >
                                I&apos;m currently open to full-time roles, freelance projects, and exciting
                                collaborations. Whether you have a question or just want to connect — my inbox is
                                always open!
                            </p>

                            {/* Social links */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target={link.name !== 'Email' ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="card"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '14px',
                                            padding: '16px 20px', textDecoration: 'none',
                                            color: 'var(--text-primary)',
                                            borderRadius: '10px', transition: 'all 0.3s ease',
                                        }}
                                        aria-label={`Connect on ${link.name}`}
                                    >
                                        <div
                                            style={{
                                                width: '44px', height: '44px', borderRadius: '10px',
                                                background: `${link.color}18`,
                                                border: `1px solid ${link.color}30`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: link.color, flexShrink: 0,
                                            }}
                                        >
                                            {link.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{link.name}</div>
                                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{link.detail}</div>
                                        </div>
                                        <svg
                                            width="14" height="14" viewBox="0 0 24 24"
                                            fill="none" stroke="var(--text-muted)" strokeWidth="2"
                                            style={{ marginLeft: 'auto' }}
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                ))}
                            </div>

                            {/* Availability */}
                            <div
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    background: 'rgba(34,197,94,0.08)',
                                    border: '1px solid rgba(34,197,94,0.2)',
                                    borderRadius: '10px', padding: '14px 18px',
                                }}
                            >
                                <div
                                    style={{
                                        width: '10px', height: '10px', borderRadius: '50%',
                                        background: '#22c55e', boxShadow: '0 0 10px #22c55e',
                                        flexShrink: 0,
                                    }}
                                />
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#22c55e' }}>
                                        Available for hire
                                    </div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                                        Open to full-time & freelance
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — contact form (client component) */}
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
