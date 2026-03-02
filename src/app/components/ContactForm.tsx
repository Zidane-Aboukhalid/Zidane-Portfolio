'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <div className="rounded-xl border border-border bg-card p-6">
      {status === 'sent' ? (
        <div className="py-10 text-center">
          <h3 className="text-lg font-bold text-foreground">Message Sent!</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Thanks for reaching out. I'll get back to you within 24 hours."}
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-muted"
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
              className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
              required
              disabled={status === 'sending'}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium text-muted"
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
              className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
              required
              disabled={status === 'sending'}
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-muted"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              className="w-full resize-y rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent min-h-[120px]"
              rows={5}
              required
              disabled={status === 'sending'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="animate-spin"
                  style={{ animation: 'rotate 1s linear infinite' }}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
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
