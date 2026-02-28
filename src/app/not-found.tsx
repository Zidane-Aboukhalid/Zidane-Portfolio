import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            style={{
                minHeight: '100vh', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', paddingTop: '68px',
                background: 'var(--bg-primary)',
            }}
        >
            <div>
                <div
                    style={{
                        fontSize: '7rem', fontWeight: '900',
                        letterSpacing: '-0.04em', lineHeight: 1,
                        marginBottom: '12px',
                    }}
                    className="gradient-text"
                >
                    404
                </div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                    Page Not Found
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '400px' }}>
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" className="btn-primary">Go Home</Link>
                    <Link href="/projects" className="btn-outline">View Projects</Link>
                </div>
            </div>
        </div>
    );
}
