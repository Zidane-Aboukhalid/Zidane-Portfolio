import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../lib/data';

export const metadata: Metadata = { title: 'Blog' };

export default function BlogPage() {
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
                    <span className="tech-badge" style={{ marginBottom: '14px' }}>Writing</span>
                    <h1 className="section-title" style={{ marginTop: '12px' }}>
                        Latest <span className="gradient-text">Articles</span>
                    </h1>
                    <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
                        Sharing what I learn — deep dives, tutorials, and thoughts on modern software engineering.
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    {/* Featured post (first) */}
                    <Link
                        href={`/blog/${blogPosts[0].slug}`}
                        style={{ textDecoration: 'none', display: 'block', marginBottom: '32px' }}
                        aria-label={`Read: ${blogPosts[0].title}`}
                    >
                        <article
                            className="card blog-featured-card"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '200px 1fr',
                                overflow: 'hidden',
                                borderRadius: '16px',
                                minHeight: '180px',
                            }}
                            role="article"
                        >
                            <div
                                style={{
                                    background: blogPosts[0].gradient,
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', justifyContent: 'center',
                                    gap: '12px', padding: '24px',
                                    position: 'relative', overflow: 'hidden',
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute', top: '-20px', right: '-20px',
                                        width: '100px', height: '100px',
                                        background: 'rgba(255,255,255,0.08)', borderRadius: '50%',
                                    }}
                                />
                                <div style={{ fontSize: '2.8rem', position: 'relative' }}>{blogPosts[0].icon}</div>
                                <span
                                    style={{
                                        background: 'rgba(0,0,0,0.25)',
                                        color: 'rgba(255,255,255,0.9)',
                                        padding: '3px 12px', borderRadius: '20px',
                                        fontSize: '0.75rem', fontWeight: '700',
                                        position: 'relative',
                                    }}
                                >
                                    Featured
                                </span>
                            </div>

                            <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                    <span className="tech-badge">{blogPosts[0].category}</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{blogPosts[0].date}</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>·</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{blogPosts[0].readTime}</span>
                                </div>
                                <h2
                                    style={{
                                        fontWeight: '800', fontSize: '1.3rem',
                                        color: 'var(--text-primary)', lineHeight: 1.3,
                                        marginBottom: '10px', letterSpacing: '-0.01em',
                                    }}
                                >
                                    {blogPosts[0].title}
                                </h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '18px' }}>
                                    {blogPosts[0].description}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.85rem' }}>
                                    Read Article
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Remaining posts */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: '24px',
                        }}
                    >
                        {blogPosts.slice(1).map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                style={{ textDecoration: 'none' }}
                                aria-label={`Read: ${post.title}`}
                            >
                                <article
                                    className="card"
                                    style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
                                >
                                    {/* Top gradient */}
                                    <div
                                        style={{
                                            height: '100px', background: post.gradient,
                                            display: 'flex', alignItems: 'center',
                                            padding: '20px 24px', gap: '16px',
                                            position: 'relative', overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute', top: '-30px', right: '-30px',
                                                width: '120px', height: '120px',
                                                background: 'rgba(255,255,255,0.06)', borderRadius: '50%',
                                            }}
                                        />
                                        <div style={{ fontSize: '2.2rem', position: 'relative' }}>{post.icon}</div>
                                        <span
                                            style={{
                                                background: 'rgba(0,0,0,0.25)',
                                                color: 'rgba(255,255,255,0.9)',
                                                padding: '4px 12px', borderRadius: '20px',
                                                fontSize: '0.75rem', fontWeight: '700', position: 'relative',
                                            }}
                                        >
                                            {post.category}
                                        </span>
                                    </div>

                                    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.date}</span>
                                            <span style={{ color: 'var(--border-color)' }}>·</span>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.readTime}</span>
                                        </div>
                                        <h2
                                            style={{
                                                fontWeight: '700', fontSize: '1.05rem',
                                                marginBottom: '10px', lineHeight: 1.3,
                                                color: 'var(--text-primary)',
                                            }}
                                        >
                                            {post.title}
                                        </h2>
                                        <p
                                            style={{
                                                color: 'var(--text-secondary)', fontSize: '0.875rem',
                                                lineHeight: '1.7', marginBottom: '20px', flex: 1,
                                            }}
                                        >
                                            {post.description}
                                        </p>
                                        <div
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.85rem',
                                            }}
                                        >
                                            Read More
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
