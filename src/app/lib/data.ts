// ─── Projects ────────────────────────────────────────────────────────────────

export interface Project {
    id: string;
    title: string;
    shortDesc: string;
    longDesc: string;
    technologies: string[];
    liveUrl: string | null;
    githubUrl: string;
    category: 'Full Stack' | 'DevOps' | 'Backend';
    icon: string;
    gradient: string;
    featured: boolean;
    challenges: string;
    outcome: string;
}

export const projects: Project[] = [
    {
        id: 'devflow',
        title: 'DevFlow — Project Management SaaS',
        shortDesc:
            'A full-featured project management tool with real-time collaboration, kanban boards, sprint planning, and analytics dashboards.',
        longDesc:
            'DevFlow is an enterprise-grade project management platform built with a microservices architecture. It features real-time collaboration via SignalR WebSockets, a fully customisable Kanban board with drag-and-drop, sprint planning with velocity tracking, and richly rendered analytics dashboards using Recharts.',
        technologies: ['Next.js', 'ASP.NET Core', 'SignalR', 'PostgreSQL', 'Docker', 'Azure', 'Redis', 'TypeScript'],
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
        category: 'Full Stack',
        icon: '📋',
        gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        featured: true,
        challenges:
            'Designing a real-time concurrency model that handles simultaneous card moves by multiple users without race conditions. Solved using optimistic UI updates backed by event-sourcing on the server.',
        outcome:
            'Achieved <50ms latency on card updates, supporting 200+ concurrent users per workspace in staging load tests.',
    },
    {
        id: 'shopflow',
        title: 'ShopFlow — E-Commerce Platform',
        shortDesc:
            'High-performance e-commerce platform with AI-powered recommendations, Stripe payments, and a full admin dashboard.',
        longDesc:
            'ShopFlow delivers a blazing-fast shopping experience powered by Next.js server components for SEO-optimised product pages. The platform integrates Stripe Checkout with webhook fulfilment, Cloudinary for optimised product images, and a TipTap-powered product description editor in the admin panel.',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Cloudinary', 'Tailwind CSS'],
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
        category: 'Full Stack',
        icon: '🛒',
        gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
        featured: true,
        challenges:
            'Implementing incremental static regeneration (ISR) for thousands of product pages while keeping inventory data fresh. Used on-demand revalidation triggered by a CMS webhook.',
        outcome:
            'Core Web Vitals score of 98/100. Page load under 1.2 s for product pages. Checkout conversion improved by 23% versus the legacy platform.',
    },
    {
        id: 'cloudsync',
        title: 'CloudSync — DevOps Dashboard',
        shortDesc:
            'Unified DevOps monitoring dashboard aggregating metrics from AWS, Azure, GCP, and CI/CD pipelines.',
        longDesc:
            'CloudSync polls metrics from multiple cloud providers via their SDKs and normalises them into a unified data model. A React frontend built with Recharts provides time-series charts, alert timelines, and deployment heat-maps. The backend is a .NET 8 Web API containerised with Docker and orchestrated by Kubernetes.',
        technologies: ['React', '.NET Core', 'Docker', 'Kubernetes', 'AWS SDK', 'Azure SDK', 'Recharts'],
        liveUrl: null,
        githubUrl: 'https://github.com',
        category: 'DevOps',
        icon: '☁️',
        gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        featured: false,
        challenges:
            'Normalising heterogeneous metric schemas from three cloud providers into a single query model without losing provider-specific semantics.',
        outcome:
            'Reduced mean time to detect (MTTD) for infrastructure incidents from 18 min to under 4 min in a 12-team pilot.',
    },
    {
        id: 'authkit',
        title: 'AuthKit — Authentication Microservice',
        shortDesc:
            'Plug-and-play authentication microservice: OAuth2, JWT, MFA, and session management for enterprise apps.',
        longDesc:
            'AuthKit is a production-ready identity microservice built on ASP.NET Core Identity. It ships with PKCE-enabled OAuth2 flows, short-lived JWTs with Redis-backed refresh token rotation, TOTP/FIDO2 MFA, and a self-service admin console. Exposes both REST and gRPC endpoints.',
        technologies: ['.NET Core', 'ASP.NET Identity', 'Redis', 'PostgreSQL', 'Docker', 'JWT', 'OAuth2', 'gRPC'],
        liveUrl: null,
        githubUrl: 'https://github.com',
        category: 'Backend',
        icon: '🔐',
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        featured: false,
        challenges:
            'Implementing token rotation in a distributed environment without introducing session fixation vulnerabilities.',
        outcome:
            'Successfully handles 5 000 auth requests/sec under load testing with p99 latency of 12 ms.',
    },
    {
        id: 'blogcms',
        title: 'BlogCMS — Headless Content Platform',
        shortDesc:
            'Modern headless CMS with rich-text editing, image optimisation, SEO management, and multi-language support.',
        longDesc:
            'BlogCMS provides content teams with a great editing experience (TipTap rich-text, drag-and-drop media) while giving developers a clean REST + GraphQL API. Built with the Next.js App Router, Prisma ORM, and deployable to Vercel in one click.',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudinary', 'TypeScript', 'TipTap', 'GraphQL'],
        liveUrl: 'https://github.com',
        githubUrl: 'https://github.com',
        category: 'Full Stack',
        icon: '✍️',
        gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
        featured: false,
        challenges:
            'Designing a permission model flexible enough for multi-tenant content ownership without per-row SQL overhead.',
        outcome:
            'Adopted by 3 internal teams; reduced time-to-publish for new articles by 60% compared to the previous Wordpress setup.',
    },
    {
        id: 'pipelinebot',
        title: 'PipelineBot — GitHub Actions Automation',
        shortDesc:
            'A GitHub App that auto-generates optimised CI/CD pipelines based on project-type detection.',
        longDesc:
            'PipelineBot analyses repository structure (package.json, .csproj, pyproject.toml, etc.) and emits tailored GitHub Actions YAML files for Next.js, .NET, Python, and Go projects. Built as a Node.js + TypeScript GitHub App using the Octokit SDK.',
        technologies: ['Node.js', 'TypeScript', 'GitHub API', 'Octokit', 'Docker', 'GitHub Actions'],
        liveUrl: null,
        githubUrl: 'https://github.com',
        category: 'DevOps',
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        featured: false,
        challenges:
            'Gracefully handling monorepos with mixed technology stacks and ensuring generated pipelines do not conflict with existing workflow files.',
        outcome:
            'Saves an average of 2–4 hours of DevOps setup per new repository in a 50-repo organisation.',
    },
];

export function getProject(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
    icon: string;
    gradient: string;
    content: string; // simplified plain-text / markdown-like content
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'mastering-aspnet-core-apis',
        title: 'Mastering ASP.NET Core APIs: From Zero to Production',
        description:
            'A comprehensive guide covering REST API design, JWT auth, rate limiting, caching, and deploying to Azure with a production-ready .NET 8 setup.',
        date: 'Feb 12, 2026',
        readTime: '12 min read',
        category: '.NET',
        icon: '⚡',
        gradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
        content: `## Overview

Building production-ready REST APIs with ASP.NET Core 8 requires a solid foundation in several key areas: clean architecture, security, caching, and automated deployment.

## 1. Clean Architecture

Start with a layered solution:

- **API** — HTTP layer: controllers, middleware, filters
- **Application** — use cases, DTOs, validators (FluentValidation)
- **Domain** — entities, value objects, domain events
- **Infrastructure** — EF Core repositories, external services

## 2. JWT Authentication

Use the built-in bearer middleware with \`Microsoft.AspNetCore.Authentication.JwtBearer\`. Key settings:

- \`ValidateIssuerSigningKey\` = true
- Use asymmetric RS256 keys in production, not HMAC
- Keep access tokens short-lived (15 min); use Redis-backed refresh tokens

## 3. Rate Limiting (.NET 8 Built-in)

\`\`\`csharp
builder.Services.AddRateLimiter(opts => {
    opts.AddFixedWindowLimiter("api", o => {
        o.PermitLimit = 100;
        o.Window = TimeSpan.FromMinutes(1);
    });
});
\`\`\`

Enable per-user rate limiting by extracting the user claim in a custom policy.

## 4. Response Caching with Redis

Cache expensive GET responses with \`OutputCache\` + a Redis provider:

\`\`\`csharp
[OutputCache(PolicyName = "products", Duration = 60)]
[HttpGet("products")]
public async Task<IActionResult> GetProducts() { ... }
\`\`\`

## 5. Production Deployment on Azure Container Apps

GitHub Actions workflow builds a multi-stage Docker image, pushes it to ACR, and triggers a rolling deployment with zero downtime. Use Azure Key Vault references for secrets rather than environment variables.

## Key Takeaways

1. Separate concerns with Clean Architecture from day one
2. Never store secrets in appsettings.json
3. Rate-limit all public endpoints
4. Cache reads aggressively, invalidate on write
5. Automate everything — a deployment should be a git push`,
    },
    {
        slug: 'react-performance-optimization',
        title: 'React Performance Deep Dive: Memoisation & Virtualisation',
        description:
            'Explore advanced React optimisation techniques including React.memo, useMemo, useCallback, react-window virtual lists, and Profiler-driven debugging.',
        date: 'Jan 28, 2026',
        readTime: '9 min read',
        category: 'React',
        icon: '⚛️',
        gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
        content: `## Why React Performance Matters

Large React applications accumulate unnecessary re-renders over time. A 200 ms interaction delay feels instant on localhost but catastrophic in production, especially on mid-range mobile devices.

## The Golden Rule

**Measure first. Optimise second.** Open React DevTools Profiler and record a slow interaction. Look for components with long render times or high commit count before reaching for \`memo\`.

## 1. React.memo — Shallow Prop Equality

\`\`\`tsx
const Row = React.memo(({ item }: { item: Item }) => (
  <div className="row">{item.name}</div>
));
\`\`\`

React.memo prevents re-render when props are shallowly equal. It has a small overhead — only apply it to components that render frequently with stable props.

## 2. useMemo — Expensive Computations

\`\`\`tsx
const sorted = useMemo(
  () => [...items].sort((a, b) => a.score - b.score),
  [items]
);
\`\`\`

Use \`useMemo\` for transformations that are genuinely expensive (>1 ms). Avoid wrapping cheap calculations — the dependency comparison cost can exceed the computation cost.

## 3. useCallback — Stable Function References

\`\`\`tsx
const handleDelete = useCallback((id: string) => {
  dispatch({ type: 'DELETE', id });
}, [dispatch]);
\`\`\`

Stable references prevent child memos from invalidating. Most useful when passing callbacks to memoised children or effect dependency arrays.

## 4. Virtual Lists with react-window

Render only visible rows for lists with 500+ items:

\`\`\`tsx
import { FixedSizeList as List } from 'react-window';

<List height={600} itemCount={items.length} itemSize={50} width="100%">
  {({ index, style }) => <Row style={style} item={items[index]} />}
</List>
\`\`\`

## 5. Code Splitting with next/dynamic

\`\`\`tsx
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <Skeleton />,
});
\`\`\`

Route-level splitting happens automatically with the App Router. Component-level splitting is for client-heavy components loaded conditionally.

## Summary Table

| Technique | When to Use |
|---|---|
| React.memo | Frequently rendered leaf components |
| useMemo | Expensive transforms (sort, filter, derive) |
| useCallback | Stable callback refs for memoised children |
| react-window | Lists > 500 items |
| dynamic() | Heavy components loaded conditionally |`,
    },
    {
        slug: 'cicd-github-actions-nextjs',
        title: 'CI/CD for Next.js: GitHub Actions + Docker + Zero Downtime',
        description:
            'Set up a professional CI/CD pipeline: automated testing, Docker multi-stage builds, container registry, and rolling deployments on a VPS.',
        date: 'Jan 10, 2026',
        readTime: '15 min read',
        category: 'DevOps',
        icon: '🚀',
        gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
        content: `## The Goal

Every \`git push\` to \`main\` should automatically: run tests → build a Docker image → push to registry → deploy to VPS with zero downtime. Total pipeline time: under 3 minutes.

## 1. Multi-Stage Dockerfile

Multi-stage builds keep the final image small (<200 MB):

\`\`\`dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
CMD ["node", "server.js"]
\`\`\`

Enable \`output: 'standalone'\` in \`next.config.ts\` to generate the minimal server bundle.

## 2. GitHub Actions Workflow

Three jobs: **test → build → deploy**, each gated on the previous:

- **test**: \`npm test\` + ESLint + TypeScript check
- **build**: \`docker build\`, tag with \`github.sha\`, push to GHCR
- **deploy**: SSH into VPS, pull new image, run rolling restart via Docker Compose

## 3. Zero Downtime with Docker Compose + Health Checks

Add a health check so Docker waits for the app to be ready before taking the old container down:

\`\`\`yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
  interval: 10s
  timeout: 5s
  retries: 3
  start_period: 30s
\`\`\`

Use \`--detach --wait\` with \`docker compose up\` so the deploy step blocks until the new container passes health checks before removing the old one.

## 4. Secret Management

Store secrets in GitHub Actions Secrets (SSH key, registry token, env vars). Inject at deploy time — never bake secrets into the Docker image.

## 5. Nginx Reverse Proxy

Sit Nginx in front of the Next.js container for TLS termination, HTTP/2, static asset caching, and as a load balancer if you scale to multiple replicas.

## Key Takeaways

1. Multi-stage Docker builds dramatically reduce image size
2. Always tag images with a unique identifier (commit SHA)
3. Health checks are non-negotiable for zero-downtime deploys
4. Keep secrets out of images — inject at runtime
5. Nginx + Certbot = free, automatic HTTPS`,
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
}
