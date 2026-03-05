import type { MetadataRoute } from 'next';
import { projects, blogPosts } from './lib/data';

/** Parse "Feb 20, 2026" → Date object, fallback to today */
function parsePostDate(dateStr: string): Date {
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? new Date() : parsed;
}

/** Stable build date for static + project pages (not dynamic per-request) */
const SITE_UPDATED = new Date('2026-02-20');

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aboukhalid-zidane.com';

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: SITE_UPDATED,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: SITE_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: SITE_UPDATED,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: SITE_UPDATED,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: SITE_UPDATED,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: SITE_UPDATED,
        changeFrequency: 'monthly' as const,
        priority: project.featured ? 0.8 : 0.7,
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: parsePostDate(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
