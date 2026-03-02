import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 pt-16 text-center">
      <div>
        <p className="text-8xl font-bold tracking-tighter text-accent">404</p>
        <h1 className="mt-4 text-xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
          {"The page you're looking for doesn't exist or has been moved."}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-accent/90"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-card hover:border-border-hover"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
