import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // OpenAI
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Google
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Anthropic (Claude)
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Meta
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Common Crawl (used by many AI models)
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // Diffbot
      {
        userAgent: 'Diffbot',
        allow: '/',
      },
      // Cohere
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
    host: seoConfig.siteUrl,
  };
}
