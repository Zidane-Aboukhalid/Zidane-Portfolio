'use client';

import Link from 'next/link';
import type { BlogPost } from '../lib/data';

// ── Minimal markdown renderer ──────────────────────────────────────────────────
function renderContent(content: string) {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeLines: string[] = [];
    let codeLang = '';
    let key = 0;

    const renderInline = (text: string) =>
        text
            .replace(/`([^`]+)`/g, '<code style="background:rgba(59,130,246,0.12);color:#06b6d4;padding:2px 8px;border-radius:4px;font-family:monospace;font-size:0.9em">$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>')
            .replace(/\*([^*]+)\*/g, '<em>$1</em>');

    for (const line of lines) {
        if (line.startsWith('```')) {
            if (!inCodeBlock) {
                inCodeBlock = true;
                codeLang = line.slice(3).trim();
                codeLines = [];
            } else {
                inCodeBlock = false;
                elements.push(
                    <div key={key++} style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid var(--border-color)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0' }}>
                        {codeLang && (
                            <div style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--border-color)', padding: '6px 16px', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'monospace', fontWeight: '600' }}>
                                {codeLang}
                            </div>
                        )}
                        <pre style={{ margin: 0, padding: '18px 20px', overflowX: 'auto', fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--text-primary)', fontFamily: 'monospace' }}>
                            <code>{codeLines.join('\n')}</code>
                        </pre>
                    </div>
                );
                codeLines = [];
                codeLang = '';
            }
            continue;
        }

        if (inCodeBlock) { codeLines.push(line); continue; }

        if (line.startsWith('## ')) {
            elements.push(
                <h2 key={key++} style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '14px', letterSpacing: '-0.01em' }}>
                    {line.replace('## ', '')}
                </h2>
            );
        } else if (line.startsWith('# ')) {
            elements.push(
                <h1 key={key++} style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                    {line.replace('# ', '')}
                </h1>
            );
        } else if (line.startsWith('| ') && line.endsWith(' |')) {
            const cells = line.split('|').filter((c) => c.trim() !== '');
            const isHeader = lines[lines.indexOf(line) + 1]?.includes('---');
            elements.push(
                <tr key={key++}>
                    {cells.map((cell, ci) =>
                        isHeader ? (
                            <th key={ci} style={{ padding: '10px 16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.85rem', borderBottom: '1px solid var(--border-color)' }}>
                                {cell.trim()}
                            </th>
                        ) : (
                            <td key={ci} style={{ padding: '10px 16px', color: 'var(--text-secondary)', fontSize: '0.85rem', borderBottom: '1px solid var(--border-color)' }}>
                                {cell.trim()}
                            </td>
                        )
                    )}
                </tr>
            );
        } else if (line.startsWith('|---')) {
            // separator row — skip
        } else if (line.startsWith('- ')) {
            elements.push(
                <li key={key++} style={{ color: 'var(--text-secondary)', marginBottom: '6px', fontSize: '0.97rem', lineHeight: '1.75' }}
                    dangerouslySetInnerHTML={{ __html: renderInline(line.slice(2)) }}
                />
            );
        } else if (line.trim() === '') {
            elements.push(<div key={key++} style={{ height: '8px' }} />);
        } else {
            elements.push(
                <p key={key++} style={{ color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '4px', fontSize: '0.97rem' }}
                    dangerouslySetInnerHTML={{ __html: renderInline(line) }}
                />
            );
        }
    }
    return elements;
}

export default function BlogArticle({ post, related }: { post: BlogPost; related: BlogPost[] }) {
    const rendered = renderContent(post.content);

    return (
        <div style={{ paddingTop: '68px' }}>
            {/* Header banner */}
            <div style={{ background: post.gradient, padding: '56px 0 44px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '280px', height: '280px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                        <Link href="/blog" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
                            All Articles
                        </Link>
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
                        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem' }}>{post.category}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '2.2rem' }}>{post.icon}</span>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <span style={{ background: 'rgba(0,0,0,0.25)', color: 'rgba(255,255,255,0.9)', padding: '3px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700' }}>
                                {post.category}
                            </span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>{post.date}</span>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>·</span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>{post.readTime}</span>
                        </div>
                    </div>

                    <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '760px' }}>
                        {post.title}
                    </h1>
                </div>
            </div>

            {/* Article body */}
            <div style={{ background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: '48px', padding: '56px 24px', alignItems: 'start' }} role="main">
                    {/* Article content */}
                    <article>
                        <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '36px', paddingBottom: '32px', borderBottom: '1px solid var(--border-color)', fontStyle: 'italic' }}>
                            {post.description}
                        </p>
                        {rendered}
                    </article>

                    {/* Sidebar */}
                    <aside>
                        <div className="card" style={{ padding: '20px', marginBottom: '20px' }}>
                            <h3 style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '14px' }}>Article Info</h3>
                            {[
                                { label: 'Published', value: post.date },
                                { label: 'Read time', value: post.readTime },
                                { label: 'Category', value: post.category },
                            ].map((item) => (
                                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{item.label}</span>
                                    <span style={{ color: 'var(--text-primary)', fontSize: '0.82rem', fontWeight: '600' }}>{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {related.length > 0 && (
                            <div className="card" style={{ padding: '20px' }}>
                                <h3 style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '14px' }}>More Articles</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {related.map((rp) => (
                                        <Link
                                            key={rp.slug}
                                            href={`/blog/${rp.slug}`}
                                            style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', textDecoration: 'none', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }}
                                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                                        >
                                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: rp.gradient, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
                                                {rp.icon}
                                            </div>
                                            <div>
                                                <div style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600', lineHeight: 1.3, marginBottom: '2px' }}>{rp.title}</div>
                                                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{rp.readTime}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </div>
    );
}
