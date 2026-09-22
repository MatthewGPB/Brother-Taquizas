import type { MetadataRoute } from 'next';
import { site, services } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: site.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...servicePages,
    { url: `${site.url}/book-call`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
