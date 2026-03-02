'use client';

import { useState } from 'react';

const posts = [
    {
        id: 1,
        slug: 'mastering-aspnet-core-apis',
        title: 'Mastering ASP.NET Core APIs: From Zero to Production',
        description:
            'A comprehensive guide covering REST API design, authentication with JWT, rate limiting, caching strategies, and deploying to Azure in a production-ready .NET 8 setup.',
        date: 'Feb 12, 2026',
        readTime: '12 min read',
        category: '.NET',
        icon: '⚡',
        gradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
        content: `
# Mastering ASP.NET Core APIs: From Zero to Production

Building production-ready REST APIs with ASP.NET Core 8 requires a solid foundation in several key areas.

## 1. Project Setup & Architecture

Start with a clean **Clean Architecture** approach:

\`\`\`
MySolution/
├── API/          (HTTP layer, Controllers, Middleware)
├── Application/  (Use Cases, DTOs, Validators)
├── Domain/       (Entities, Value Objects, Interfaces)
└── Infrastructure/ (Repositories, EF Core, External Services)
\`\`\`

## 2. JWT Authentication

Secure your endpoints with JWT using \`Microsoft.AspNetCore.Authentication.JwtBearer\`:

\`\`\`csharp
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = config["Jwt:Issuer"],
            ValidAudience = config["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(config["Jwt:Key"]!))
        };
    });
\`\`\`

## 3. Rate Limiting

Use the built-in rate limiting in .NET 8:

\`\`\`csharp
builder.Services.AddRateLimiter(options => {
    options.AddFixedWindowLimiter("api", o => {
        o.PermitLimit = 100;
        o.Window = TimeSpan.FromMinutes(1);
    });
});
\`\`\`

## 4. Response Caching with Redis

Cache expensive responses for better performance:

\`\`\`csharp
builder.Services.AddStackExchangeRedisCache(options => {
    options.Configuration = config["Redis:ConnectionString"];
});
\`\`\`

## 5. Production Deployment on Azure

Use GitHub Actions to build and deploy your Docker container to Azure Container Apps:

\`\`\`yaml
- name: Deploy to Azure
  uses: azure/container-apps-deploy-action@v1
  with:
    appSourcePath: \${{ github.workspace }}
    acrName: myRegistry
    containerAppName: my-api
\`\`\`

By combining Clean Architecture, proper security, caching, and automated deployments, your ASP.NET Core API will be rock-solid in production.
    `,
    },
    {
        id: 2,
        slug: 'react-performance-optimization',
        title: 'React Performance Deep Dive: Memoization & Virtualization',
        description:
            'Explore advanced React optimization techniques including React.memo, useMemo, useCallback, virtual lists with react-window, and Profiler-driven debugging.',
        date: 'Jan 28, 2026',
        readTime: '9 min read',
        category: 'React',
        icon: '⚛️',
        gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
        content: `
# React Performance Deep Dive

Large React apps can suffer from unnecessary re-renders. Here are the most impactful optimization strategies.

## 1. React.memo – Prevent Unnecessary Re-renders

\`\`\`tsx
const ExpensiveComponent = React.memo(({ data }: { data: Item[] }) => {
  return <div>{data.map(item => <Row key={item.id} item={item} />)}</div>;
});
\`\`\`

## 2. useMemo & useCallback

Memoize expensive computations and stable function references:

\`\`\`tsx
const sortedData = useMemo(
  () => [...data].sort((a, b) => a.name.localeCompare(b.name)),
  [data]
);

const handleClick = useCallback((id: string) => {
  setSelected(id);
}, []);
\`\`\`

## 3. Virtual Lists with react-window

For large lists (1000+ items), only render visible rows:

\`\`\`tsx
import { FixedSizeList as List } from 'react-window';

<List
  height={600}
  itemCount={items.length}
  itemSize={50}
  width="100%"
>
  {({ index, style }) => <Row item={items[index]} style={style} />}
</List>
\`\`\`

## 4. Code Splitting with Suspense

Lazy-load heavy components:

\`\`\`tsx
const HeavyChart = lazy(() => import('./HeavyChart'));

<Suspense fallback={<Skeleton />}>
  <HeavyChart data={chartData} />
</Suspense>
\`\`\`

## 5. Using React Profiler

Always measure before optimizing. The React DevTools Profiler shows you exactly which components are slow and why.

By applying these techniques selectively — only where you measure a real performance issue — your app will feel snappy even at scale.
    `,
    },
    {
        id: 3,
        slug: 'cicd-github-actions-nextjs',
        title: 'CI/CD for Next.js: GitHub Actions + Docker + Zero Downtime',
        description:
            'Set up a professional CI/CD pipeline for Next.js: automated testing, Docker multi-stage builds, container registry, and rolling deployments on a VPS.',
        date: 'Jan 10, 2026',
        readTime: '15 min read',
        category: 'DevOps',
        icon: '🚀',
        gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
        content: `
# CI/CD for Next.js with GitHub Actions

Automating your deployment pipeline eliminates manual errors and speeds up delivery. Here's a complete setup.

## 1. Multi-Stage Dockerfile

\`\`\`dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
CMD ["npm", "start"]
\`\`\`

## 2. GitHub Actions Workflow

\`\`\`yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Build Docker image
        run: docker build -t myapp:\${{ github.sha }} .
      
      - name: Push to Registry
        run: |
          docker tag myapp:\${{ github.sha }} ghcr.io/user/myapp:latest
          docker push ghcr.io/user/myapp:latest
      
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.HOST }}
          username: \${{ secrets.USER }}
          key: \${{ secrets.SSH_KEY }}
          script: |
            docker pull ghcr.io/user/myapp:latest
            docker stop myapp || true
            docker rm myapp || true
            docker run -d --name myapp -p 3000:3000 ghcr.io/user/myapp:latest
\`\`\`

## 3. Zero Downtime with Nginx

Use an Nginx upstream with two containers and a rolling restart to achieve zero downtime deployments.

With this pipeline, every merge to main automatically tests, builds, and deploys your Next.js app in under 3 minutes.
    `,
    },
];

interface BlogDetailProps {
    post: (typeof posts)[0];
    onBack: () => void;
}

function BlogDetail({ post, onBack }: BlogDetailProps) {
    return (
        <section id="blog" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <button
                    onClick={onBack}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        background: 'none', border: 'none', color: 'var(--accent-cyan)',
                        cursor: 'pointer', fontWeight: '600', marginBottom: '32px',
                        fontFamily: 'inherit', fontSize: '0.9rem',
                        transition: 'gap 0.2s ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget.style.gap) = '12px'; }}
                    onMouseLeave={e => { (e.currentTarget.style.gap) = '8px'; }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                    Back to Blog
                </button>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                    <span className="tech-badge">{post.category}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{post.date}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>·</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{post.readTime}</span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: '800',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '24px',
                }}>
                    {post.title}
                </h1>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '40px', borderBottom: '1px solid var(--border-color)', paddingBottom: '32px' }}>
                    {post.description}
                </p>

                {/* Simple Markdown-like renderer */}
                <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.98rem' }}>
                    {post.content.split('\n').map((line, i) => {
                        if (line.startsWith('# ')) return <h1 key={i} style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px', letterSpacing: '-0.02em' }}>{line.replace('# ', '')}</h1>;
                        if (line.startsWith('## ')) return <h2 key={i} style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '36px', marginBottom: '14px' }}>{line.replace('## ', '')}</h2>;
                        if (line.startsWith('```')) return null;
                        if (line.startsWith('`') && line.endsWith('`')) return <code key={i} style={{ background: 'rgba(59,130,246,0.1)', color: 'var(--accent-cyan)', padding: '2px 8px', borderRadius: '4px' }}>{line.slice(1, -1)}</code>;
                        if (line.trim() === '') return <div key={i} style={{ height: '12px' }} />;
                        return <p key={i} style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: line.replace(/`([^`]+)`/g, '<code style="background:rgba(59,130,246,0.1);color:#06b6d4;padding:2px 8px;border-radius:4px;">$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(null);

    if (selectedPost) {
        return <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
    }

    return (
        <section id="blog" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="tech-badge" style={{ marginBottom: '16px' }}>Writing</span>
                    <h2 className="section-title" style={{ marginTop: '12px' }}>
                        Latest <span className="gradient-text">Articles</span>
                    </h2>
                    <p className="section-subtitle">
                        Sharing what I learn — deep dives, tutorials, and thoughts on modern software engineering.
                    </p>
                </div>

                {/* Blog Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '24px',
                }}>
                    {posts.map(post => (
                        <article
                            key={post.id}
                            className="card"
                            style={{ cursor: 'pointer', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            onClick={() => setSelectedPost(post)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={e => e.key === 'Enter' && setSelectedPost(post)}
                            aria-label={`Read article: ${post.title}`}
                        >
                            {/* Top gradient */}
                            <div style={{
                                height: '100px',
                                background: post.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '20px 24px',
                                gap: '16px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
                                <div style={{ fontSize: '2.2rem' }}>{post.icon}</div>
                                <span style={{
                                    background: 'rgba(0,0,0,0.25)',
                                    color: 'rgba(255,255,255,0.9)',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                }}>
                                    {post.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.date}</span>
                                    <span style={{ color: 'var(--border-color)' }}>·</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.readTime}</span>
                                </div>
                                <h3 style={{
                                    fontWeight: '700',
                                    fontSize: '1.05rem',
                                    marginBottom: '10px',
                                    lineHeight: 1.3,
                                    color: 'var(--text-primary)',
                                }}>
                                    {post.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.875rem',
                                    lineHeight: '1.7',
                                    marginBottom: '20px',
                                    flex: 1,
                                }}>
                                    {post.description}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.85rem' }}>
                                    Read More
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
