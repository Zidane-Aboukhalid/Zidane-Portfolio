'use client';

import { useState, useEffect, startTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  useEffect(() => {
    startTransition(() => setMenuOpen(false));
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors"
          >
            Zidane<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hide-mobile flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-foreground bg-card'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="hide-desktop flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          >
            <span
              className="block w-5 h-0.5 bg-foreground rounded transition-all duration-300"
              style={{
                transform: menuOpen
                  ? 'rotate(45deg) translate(3px, 3px)'
                  : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 bg-foreground rounded transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-foreground rounded transition-all duration-300"
              style={{
                transform: menuOpen
                  ? 'rotate(-45deg) translate(3px, -3px)'
                  : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 text-muted hover:text-foreground text-xl bg-transparent border-none cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-2xl font-bold transition-colors ${
              isActive(link.href) ? 'text-accent' : 'text-muted hover:text-foreground'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-background"
        >
          Hire Me
        </Link>
      </div>
    </>
  );
}
