import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/wordpress';
import { seoConfig } from '@/lib/seo-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const posts = await getAllPosts();
    
    const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${seoConfig.siteUrl}/posts/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    return [
      {
        url: seoConfig.siteUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      ...postEntries,
    ];
  } catch (error) {
    console.warn('Failed to generate sitemap with posts:', error);
    // Return sitemap with just the homepage if posts fail to load
    return [
      {
        url: seoConfig.siteUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];
  }
}
