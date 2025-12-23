import { seoConfig } from "./seo-config";
import type { Post, Author, FeaturedMedia } from "./wordpress.d";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seoConfig.author.name,
    url: seoConfig.siteUrl,
    image: `${seoConfig.siteUrl}/avatar.webp`,
    jobTitle: seoConfig.author.jobTitle,
    description: seoConfig.author.description,
    email: seoConfig.author.email,
    sameAs: Object.values(seoConfig.social),
    worksFor: seoConfig.organizations.map(org => ({
      "@type": "Organization",
      name: org.name,
      url: org.url,
      description: org.description,
    })),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Master's in Engineering Management",
      location: "Australia"
    },
    knowsAbout: [
      "Email Marketing",
      "Consumer Trust Analytics",
      "Retention Engineering",
      "Email Deliverability",
      "Behavioral Systems",
      "Ecommerce Optimization"
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/avatar.webp`,
    foundingDate: "2015",
    founder: {
      "@type": "Person",
      name: seoConfig.author.name,
    },
    sameAs: Object.values(seoConfig.social),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional Services",
      url: `${seoConfig.siteUrl}`,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultMetadata.description,
    publisher: {
      "@type": "Person",
      name: seoConfig.author.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.siteUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateArticleSchema(
  post: Post,
  author: Author | null | { id: number; name: string; url: string },
  featuredImage: FeaturedMedia | null
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, "").trim().substring(0, 160),
    image: featuredImage?.source_url || `${seoConfig.siteUrl}/og.png`,
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      "@type": "Person",
      name: author?.name || seoConfig.author.name,
      url: author?.url || seoConfig.siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: seoConfig.author.name,
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/avatar.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${seoConfig.siteUrl}/posts/${post.slug}`,
    },
    url: `${seoConfig.siteUrl}/posts/${post.slug}`,
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
