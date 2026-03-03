import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://aboukhalid-zidane.com/sitemap.xml',
        host: 'https://aboukhalid-zidane.com',
    };
}
