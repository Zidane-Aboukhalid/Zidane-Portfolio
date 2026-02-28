'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        setStatus('sending');
        await new Promise((r) => setTimeout(r, 1500));
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <div className="card" style={{ padding: '32px' }}>
            {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🎉</div>
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
                        <label
                            htmlFor="contact-name"
                            style={{
                                display: 'block', marginBottom: '8px',
                                color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600',
                            }}
                        >
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
                        <label
                            htmlFor="contact-email"
                            style={{
                                display: 'block', marginBottom: '8px',
                                color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600',
                            }}
                        >
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
                        <label
                            htmlFor="contact-message"
                            style={{
                                display: 'block', marginBottom: '8px',
                                color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600',
                            }}
                        >
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project or opportunity..."
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
                                <svg
                                    width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5"
                                    style={{ animation: 'rotate 1s linear infinite' }}
                                >
                                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                </svg>
                                Sending…
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
    );
}
