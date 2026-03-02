import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = { title: 'Contact' };

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    detail: 'github.com/zidane',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    detail: 'linkedin.com/in/zidane',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:hello@zidane.dev',
    detail: 'hello@zidane.dev',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="border-b border-border bg-surface px-6 py-16 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Get In Touch
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Let's Work Together"}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Have a project in mind or want to discuss opportunities? {"I'd"} love
            to hear from you.
          </p>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left - info */}
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Say Hello
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {"I'm currently open to full-time roles, freelance projects, and exciting collaborations. Whether you have a question or just want to connect -- my inbox is always open!"}
            </p>

            {/* Social links */}
            <div className="mt-8 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-border-hover hover:bg-card-hover"
                  aria-label={`Connect on ${link.name}`}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors group-hover:text-foreground">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {link.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {link.detail}
                    </p>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <div>
                <p className="text-sm font-semibold text-accent">
                  Available for hire
                </p>
                <p className="text-xs text-muted-foreground">
                  {'Open to full-time & freelance'}
                </p>
              </div>
            </div>
          </div>

          {/* Right - form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
