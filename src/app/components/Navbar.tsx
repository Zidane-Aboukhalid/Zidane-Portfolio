'use client';

import { startTransition, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'Home', href: '/' },
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

    // Close menu on route change
    useEffect(() => {
        startTransition(() => setMenuOpen(false));
    }, [pathname]);

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div
                    className="container"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '68px',
                    }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            fontSize: '1.3rem',
                            fontWeight: '800',
                            textDecoration: 'none',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        <span className="gradient-text">Z</span>
                        <span style={{ color: 'var(--text-primary)' }}>idane.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div
                        style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="nav-link"
                                style={{
                                    color: isActive(link.href) ? 'var(--accent-cyan)' : undefined,
                                }}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <span
                                        style={{
                                            position: 'absolute',
                                            bottom: '-2px',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))',
                                            borderRadius: '1px',
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="btn-primary"
                            style={{ padding: '9px 20px', fontSize: '0.85rem' }}
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        id="mobile-menu-btn"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="hamburger-btn"
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            flexDirection: 'column',
                            gap: '5px',
                        }}
                    >
                        <span
                            style={{
                                display: 'block',
                                width: '24px',
                                height: '2px',
                                background: 'var(--text-primary)',
                                borderRadius: '1px',
                                transition: 'all 0.3s ease',
                                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                            }}
                        />
                        <span
                            style={{
                                display: 'block',
                                width: '24px',
                                height: '2px',
                                background: 'var(--text-primary)',
                                borderRadius: '1px',
                                transition: 'all 0.3s ease',
                                opacity: menuOpen ? 0 : 1,
                            }}
                        />
                        <span
                            style={{
                                display: 'block',
                                width: '24px',
                                height: '2px',
                                background: 'var(--text-primary)',
                                borderRadius: '1px',
                                transition: 'all 0.3s ease',
                                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                            }}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <button
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '24px',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                    }}
                >
                    ✕
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="mobile-nav-link"
                        style={{
                            color: isActive(link.href) ? 'var(--accent-cyan)' : undefined,
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link href="/contact" className="btn-primary" style={{ marginTop: '16px' }}>
                    Hire Me
                </Link>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
        </>
    );
}
