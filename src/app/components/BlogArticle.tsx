import Link from 'next/link';
import type { BlogPost } from '../lib/data';

/* ── Minimal markdown renderer ────────────────────────────────── */
function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = '';
  let key = 0;

  const renderInline = (text: string) =>
    text
      .replace(
        /`([^`]+)`/g,
        '<code class="inline-code">$1</code>'
      )
      .replace(
        /\*\*([^*]+)\*\*/g,
        '<strong class="text-foreground font-medium">$1</strong>'
      )
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
          <div
            key={key++}
            className="my-5 overflow-hidden rounded-lg border border-border bg-background"
          >
            {codeLang && (
              <div className="border-b border-border bg-card px-4 py-1.5 text-xs font-mono font-medium text-accent">
                {codeLang}
              </div>
            )}
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-foreground font-mono">
              <code>{codeLines.join('\n')}</code>
            </pre>
          </div>
        );
        codeLines = [];
        codeLang = '';
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={key++}
          className="mt-10 mb-3 text-xl font-bold text-foreground"
        >
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('# ')) {
      elements.push(
        <h1
          key={key++}
          className="mb-5 text-2xl font-bold text-foreground"
        >
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
              <th
                key={ci}
                className="px-4 py-2 text-left text-sm font-semibold text-foreground border-b border-border"
              >
                {cell.trim()}
              </th>
            ) : (
              <td
                key={ci}
                className="px-4 py-2 text-sm text-muted-foreground border-b border-border"
              >
                {cell.trim()}
              </td>
            )
          )}
        </tr>
      );
    } else if (line.startsWith('|---')) {
      // separator row
    } else if (line.startsWith('- ')) {
      elements.push(
        <li
          key={key++}
          className="mb-1 text-sm leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: renderInline(line.slice(2)) }}
        />
      );
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      elements.push(
        <p
          key={key++}
          className="mb-1 text-sm leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: renderInline(line) }}
        />
      );
    }
  }
  return elements;
}

export default function BlogArticle({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  const rendered = renderContent(post.content);

  return (
    <div className="pt-16">
      {/* Header banner */}
      <div
        className="relative overflow-hidden px-6 py-14"
        style={{ background: post.gradient }}
      >
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-14 -left-14 h-56 w-56 rounded-full bg-white/5" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-5 flex items-center gap-2 text-sm">
            <Link
              href="/blog"
              className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Articles
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/90">{post.category}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{post.icon}</span>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full bg-black/25 px-2.5 py-0.5 text-xs font-semibold text-white/90">
                {post.category}
              </span>
              <span className="text-white/70">{post.date}</span>
              <span className="text-white/50">{'/'}</span>
              <span className="text-white/70">{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl max-w-3xl leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="bg-surface">
        <div
          className="mx-auto max-w-5xl grid gap-12 px-6 py-14 items-start"
          style={{ gridTemplateColumns: 'minmax(0, 1fr) 260px' }}
          role="main"
        >
          {/* Article */}
          <article>
            <p className="mb-8 border-b border-border pb-8 text-base leading-relaxed text-muted-foreground italic">
              {post.description}
            </p>

            {rendered}
          </article>

          {/* Sidebar */}
          <aside>
            <div className="rounded-xl border border-border bg-card p-4 mb-4">
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Article Info
              </h3>
              {[
                { label: 'Published', value: post.date },
                { label: 'Read time', value: post.readTime },
                { label: 'Category', value: post.category },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between border-b border-border py-2 last:border-b-0"
                >
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-xs font-medium text-foreground">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {related.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  More Articles
                </h3>
                <div className="flex flex-col gap-2">
                  {related.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="group flex items-start gap-2.5 rounded-lg p-2 transition-colors hover:bg-card-hover"
                    >
                      <div
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm"
                        style={{ background: rp.gradient }}
                      >
                        {rp.icon}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground leading-snug">
                          {rp.title}
                        </p>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                          {rp.readTime}
                        </p>
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
