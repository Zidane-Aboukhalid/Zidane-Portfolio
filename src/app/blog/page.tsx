import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../lib/data';

export const metadata: Metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="border-b border-border bg-surface px-6 py-16 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Writing
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Latest Articles
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Sharing what I learn &mdash; deep dives, tutorials, and thoughts on
            modern software engineering.
          </p>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Featured post */}
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group mb-8 block"
            aria-label={`Read: ${blogPosts[0].title}`}
          >
            <article
              className="blog-featured-card grid overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-border-hover hover:bg-card-hover"
              style={{ gridTemplateColumns: '200px 1fr' }}
            >
              <div
                className="relative flex flex-col items-center justify-center gap-3 overflow-hidden p-6"
                style={{ background: blogPosts[0].gradient }}
              >
                <div className="absolute -top-5 -right-5 h-24 w-24 rounded-full bg-white/10" />
                <span className="relative z-10 text-4xl">
                  {blogPosts[0].icon}
                </span>
                <span className="relative z-10 rounded-full bg-black/25 px-2.5 py-0.5 text-xs font-semibold text-white/90">
                  Featured
                </span>
              </div>

              <div className="flex flex-col justify-center p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-accent font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-muted-foreground">
                    {blogPosts[0].date}
                  </span>
                  <span className="text-muted-foreground">
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-bold text-foreground leading-snug">
                  {blogPosts[0].title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {blogPosts[0].description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent">
                  Read Article
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          </Link>

          {/* Remaining posts */}
          <div className="grid gap-4 sm:grid-cols-2">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-border-hover hover:bg-card-hover"
                aria-label={`Read: ${post.title}`}
              >
                <div
                  className="relative flex h-24 items-center gap-3 overflow-hidden px-5"
                  style={{ background: post.gradient }}
                >
                  <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-white/10" />
                  <span className="relative z-10 text-2xl">{post.icon}</span>
                  <span className="relative z-10 rounded-full bg-black/25 px-2.5 py-0.5 text-xs font-semibold text-white/90">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="text-border">{'/'}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-2 text-sm font-semibold leading-snug text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent">
                    Read More
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
