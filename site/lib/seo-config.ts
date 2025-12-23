export const seoConfig = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Pramukh Raj Devkota",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pramukhdevkota.com",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@Devkota824249",
  
  defaultMetadata: {
    title: {
      default: "Pramukh Raj Devkota - Email Systems & Consumer Trust Expert",
      template: "%s | Pramukh Raj Devkota",
    },
    description: "Founder of EmailOptimize and Trustalytics.ai. Specializing in email system optimization, consumer trust quantification, and retention engineering for $100M+ ecommerce brands.",
    keywords: [
      "email marketing optimization",
      "consumer trust analytics",
      "ecommerce retention",
      "email deliverability",
      "customer behavior systems",
      "email program decay",
      "behavioral email systems",
      "retention engineering"
    ],
  },

  author: {
    name: "Pramukh Raj Devkota",
    email: "contact@pramukhdevkota.com",
    url: "https://pramukhdevkota.com",
    jobTitle: "Founder & Email Systems Architect",
    description: "Email systems architect specializing in consumer trust quantification and retention engineering for high-scale ecommerce brands",
  },

  organizations: [
    {
      name: "EmailOptimize",
      url: "https://emailoptimize.com",
      description: "Email marketing optimization and deliverability consulting"
    },
    {
      name: "Trustalytics.ai",
      url: "https://trustalytics.ai",
      description: "Consumer trust quantification and behavioral analytics platform (R&D)"
    }
  ],

  social: {
    twitter: "https://twitter.com/Devkota824249",
    linkedin: "https://linkedin.com/in/pramukh-raj-devkota",
    github: "https://github.com/pramukhrajdevkota",
  },
};
