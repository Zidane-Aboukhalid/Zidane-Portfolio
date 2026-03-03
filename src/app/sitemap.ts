import type { MetadataRoute } from 'next';
import { projects, blogPosts } from './lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aboukhalid-zidane.com';
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
