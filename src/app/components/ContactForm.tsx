'use client';

import { useState, useRef, useEffect } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const SUBJECTS = [
    { icon: '💼', label: 'Hire Me — Full-Time Role' },
    { icon: '🚀', label: 'Hire Me — Freelance Project' },
    { icon: '⚡', label: 'Backend Development (.NET / ASP.NET)' },
    { icon: '⚛️', label: 'Frontend Development (React / Blazor)' },
    { icon: '🔧', label: 'Full-Stack Project' },
    { icon: '💡', label: 'Technical Consultation' },
    { icon: '✉️', label: 'Other' },
];

// ── Custom dark multi-select dropdown ────────────────────────────────────────
function SubjectDropdown({
    value,
    onChange,
    disabled,
}: {
    value: string[];
    onChange: (v: string[]) => void;
    disabled: boolean;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const toggle = (label: string) => {
        if (value.includes(label)) {
            onChange(value.filter((v) => v !== label));
        } else {
            onChange([...value, label]);
        }
    };

    const displayText =
        value.length === 0
            ? null
            : value.length === 1
                ? value[0]
                : `${value.length} subjects selected`;

    return (
        <div ref={ref} style={{ position: 'relative', userSelect: 'none' }}>
            {/* Trigger */}
            <div
                role="button"
                tabIndex={0}
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => !disabled && setOpen((o) => !o)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        !disabled && setOpen((o) => !o);
                    }
                }}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '13px 16px',
                    background: '#131a2e',
                    border: `1px solid ${open ? '#3b82f6' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: open ? '10px 10px 0 0' : '10px',
                    color: displayText ? '#f1f5f9' : '#64748b',
                    fontSize: '0.9rem',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    transition: 'border-color 0.2s',
                    boxShadow: open ? '0 0 0 3px rgba(59,130,246,0.15)' : 'none',
                    opacity: disabled ? 0.6 : 1,
                }}
            >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
                    {displayText ? (
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {displayText}
                        </span>
                    ) : (
                        <span>Select subjects… (multi-select)</span>
                    )}
                </span>
                {/* Count badge */}
                {value.length > 0 && (
                    <span style={{
                        background: 'rgba(59,130,246,0.2)', color: '#60a5fa',
                        borderRadius: '20px', padding: '1px 9px',
                        fontSize: '0.72rem', fontWeight: '700', flexShrink: 0, marginRight: '6px',
                    }}>
                        {value.length}
                    </span>
                )}
                {/* Chevron */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="#64748b" strokeWidth="2.5" style={{
                        transition: 'transform 0.2s',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        flexShrink: 0,
                    }}>
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>

            {/* Options panel — SOLID background, high z-index */}
            {open && (
                <ul
                    role="listbox"
                    aria-multiselectable="true"
                    style={{
                        position: 'absolute', top: '100%', left: 0, right: 0,
                        zIndex: 9999,                         /* high enough to cover everything */
                        background: '#131a2e',                /* solid — no bleed-through */
                        border: '1px solid #3b82f6',
                        borderTop: '1px solid rgba(59,130,246,0.3)',
                        borderRadius: '0 0 12px 12px',
                        margin: 0, padding: '8px 0',
                        listStyle: 'none',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                        maxHeight: '300px', overflowY: 'auto',
                    }}
                >
                    {SUBJECTS.map((s) => {
                        const checked = value.includes(s.label);
                        return (
                            <li
                                key={s.label}
                                role="option"
                                aria-selected={checked}
                                onClick={() => toggle(s.label)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '12px',
                                    padding: '11px 16px',
                                    fontSize: '0.88rem',
                                    color: checked ? '#60a5fa' : '#cbd5e1',
                                    background: checked ? 'rgba(59,130,246,0.1)' : 'transparent',
                                    cursor: 'pointer',
                                    transition: 'background 0.15s, color 0.15s',
                                }}
                                onMouseEnter={(e) => {
                                    if (!checked) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background =
                                        checked ? 'rgba(59,130,246,0.1)' : 'transparent';
                                }}
                            >
                                {/* Checkbox */}
                                <div style={{
                                    width: '18px', height: '18px', borderRadius: '5px', flexShrink: 0,
                                    border: `2px solid ${checked ? '#3b82f6' : 'rgba(255,255,255,0.2)'}`,
                                    background: checked ? '#3b82f6' : 'transparent',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'all 0.15s',
                                }}>
                                    {checked && (
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                                            stroke="#fff" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                </div>
                                <span style={{ fontSize: '1rem', flexShrink: 0 }}>{s.icon}</span>
                                <span>{s.label}</span>
                            </li>
                        );
                    })}

                    {/* Done button */}
                    <li style={{ padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '4px' }}>
                        <button
                            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                            style={{
                                width: '100%', padding: '9px',
                                background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                                border: 'none', borderRadius: '8px',
                                color: '#fff', fontWeight: '700', fontSize: '0.83rem',
                                cursor: 'pointer',
                            }}
                        >
                            ✓ Done {value.length > 0 ? `(${value.length} selected)` : ''}
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
}


// ── Main form ─────────────────────────────────────────────────────────────────
export default function ContactForm() {
    const [formData, setFormData] = useState<{ name: string; email: string; subject: string[]; message: string }>({ name: '', email: '', subject: [], message: '' });
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        if (!name || !email || subject.length === 0 || !message) return;
        const subjectStr = subject.join(', ');

        setStatus('sending');
        setErrorMsg('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, subject: subjectStr }),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Something went wrong.');
            }
            setStatus('sent');
            setFormData({ name: '', email: '', subject: [], message: '' });
            setTimeout(() => setStatus('idle'), 8000);
        } catch (err: unknown) {
            setStatus('error');
            setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
            setTimeout(() => setStatus('idle'), 7000);
        }
    };

    const inputStyle: React.CSSProperties = {
        width: '100%', padding: '13px 16px',
        background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)',
        borderRadius: '10px', color: 'var(--text-primary)',
        fontSize: '0.9rem', outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxSizing: 'border-box', fontFamily: 'inherit',
    };

    const labelStyle: React.CSSProperties = {
        display: 'block', marginBottom: '8px',
        color: 'var(--text-secondary)', fontSize: '0.83rem',
        fontWeight: '600', letterSpacing: '0.02em',
    };

    // ── Success state ────────────────────────────────────────────────────────
    if (status === 'sent') {
        return (
            <div className="card" style={{ padding: '48px 36px', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
                <h3 style={{ fontWeight: '800', fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                    Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                    Thanks for reaching out — I&apos;ll reply within{' '}
                    <strong style={{ color: 'var(--accent-cyan)' }}>24 hours</strong>.
                    <br />Check your inbox — I also sent you a confirmation ✅
                </p>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: '50px', padding: '8px 18px',
                    color: '#22c55e', fontSize: '0.83rem', fontWeight: '700',
                }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                    Email delivered successfully
                </div>
            </div>
        );
    }

    // ── Form ─────────────────────────────────────────────────────────────────
    return (
        <div className="card" style={{ padding: '32px' }}>
            <div style={{ marginBottom: '26px' }}>
                <h2 style={{ fontWeight: '800', fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                    Send a Message
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                    All fields are required. I&apos;ll reply within 24 h.
                </p>
            </div>

            {/* Error banner */}
            {status === 'error' && (
                <div style={{
                    background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)',
                    borderRadius: '10px', padding: '12px 16px', marginBottom: '20px',
                    color: '#f87171', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px',
                }}>
                    <span style={{ fontSize: '1.1rem' }}>⚠️</span>
                    {errorMsg}
                </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} noValidate>

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                        <label htmlFor="cf-name" style={labelStyle}>Full Name</label>
                        <input
                            id="cf-name" type="text" name="name"
                            value={formData.name} onChange={handleChange}
                            placeholder="John Doe" style={inputStyle}
                            required disabled={status === 'sending'} autoComplete="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="cf-email" style={labelStyle}>Email Address</label>
                        <input
                            id="cf-email" type="email" name="email"
                            value={formData.email} onChange={handleChange}
                            placeholder="john@example.com" style={inputStyle}
                            required disabled={status === 'sending'} autoComplete="email"
                        />
                    </div>
                </div>

                {/* Custom Subject dropdown */}
                <div>
                    <label style={labelStyle}>Subject</label>
                    <SubjectDropdown
                        value={formData.subject}
                        onChange={(v: string[]) => setFormData((p) => ({ ...p, subject: v }))}
                        disabled={status === 'sending'}
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="cf-message" style={labelStyle}>Message</label>
                    <textarea
                        id="cf-message" name="message"
                        value={formData.message} onChange={handleChange}
                        placeholder="Tell me about your project, timeline, budget, or opportunity…"
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '140px', lineHeight: '1.7' }}
                        rows={5} required disabled={status === 'sending'}
                    />
                </div>

                {/* Submit */}
                <button
                    id="submit-contact" type="submit"
                    disabled={status === 'sending'}
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                        background: status === 'sending'
                            ? 'rgba(99,102,241,0.5)'
                            : 'linear-gradient(135deg, #a855f7, #3b82f6)',
                        color: '#ffffff', border: 'none', borderRadius: '50px',
                        padding: '14px 32px', fontSize: '0.95rem', fontWeight: '700',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease', width: '100%',
                    }}
                >
                    {status === 'sending' ? (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                                style={{ animation: 'spin 1s linear infinite' }}>
                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                            </svg>
                            Sending…
                        </>
                    ) : (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            Send Message
                        </>
                    )}
                </button>

                <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', margin: 0 }}>
                    🔒 Your details are only used to reply to your message.
                </p>
            </form>

            <style>{`
                @keyframes spin { to { transform: rotate(360deg); } }
                input:focus, textarea:focus {
                    border-color: var(--accent-blue) !important;
                    box-shadow: 0 0 0 3px rgba(59,130,246,0.15) !important;
                }
            `}</style>
        </div>
    );
}
