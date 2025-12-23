import { getPostBySlug, getAllPosts, getFeaturedMediaById } from "@/lib/wordpress";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
import type { Metadata } from "next";

export const revalidate = 600;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const description = post.excerpt.rendered.replace(/<[^>]*>/g, "").trim();

  return {
    title: post.title.rendered,
    description: description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const featuredMedia = post.featured_media
    ? await getFeaturedMediaById(post.featured_media)
    : null;

  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <main className="max-w-2xl mx-auto px-4 pt-4 pb-8">
        <Link 
          href="/" 
          className="text-sm text-gray-600 hover:text-gray-900 inline-block"
        >
          ← Back
        </Link>
        
        <article className="mt-6">
          <header className="mb-8">
            <h1 
              className="text-2xl font-bold text-black mb-2"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p className="text-sm text-gray-600 italic">
              Pramukh Raj Devkota &middot; <time dateTime={post.date}>{date}</time>
            </p>
          </header>

          {featuredMedia?.source_url && (
            <div className="mb-6 -mx-4 sm:mx-0">
              <Image
                src={featuredMedia.source_url}
                alt={post.title.rendered}
                width={featuredMedia.media_details?.width || 1200}
                height={featuredMedia.media_details?.height || 630}
                className="w-full h-auto rounded-none"
                quality={85}
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>
          )}

          <div 
            className="prose prose-gray max-w-none
              [&>*+*]:mt-4
              [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:mt-6 [&_h1]:mb-3
              [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-6 [&_h2]:mb-3
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:mt-5 [&_h3]:mb-2
              [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:tracking-tight [&_h4]:mt-4 [&_h4]:mb-2
              [&_h5]:text-base [&_h5]:font-semibold [&_h5]:tracking-tight [&_h5]:mt-3 [&_h5]:mb-1.5
              [&_h6]:text-sm [&_h6]:font-semibold [&_h6]:tracking-tight [&_h6]:mt-3 [&_h6]:mb-1.5
              [&_p]:text-base [&_p]:leading-7 [&_p]:mb-3 [&_p]:text-gray-700
              [&_strong]:font-semibold [&_strong]:text-black
              [&_em]:italic
              [&_a]:text-black [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-gray-700
              [&_ul]:pl-0 [&_ul]:list-none [&_ul]:space-y-1.5
              [&_ul_li]:relative [&_ul_li]:pl-6 [&_ul_li]:text-gray-700
              [&_ul_li]:before:absolute [&_ul_li]:before:left-1 [&_ul_li]:before:top-[0.6875em] [&_ul_li]:before:h-1.5 [&_ul_li]:before:w-1.5 [&_ul_li]:before:rounded-full [&_ul_li]:before:bg-gray-700
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1.5 [&_ol]:text-gray-700
              [&_li]:pl-2
              [&_li_ul]:mt-1.5 [&_li_ol]:mt-1.5
              [&_code]:relative [&_code]:rounded [&_code]:bg-gray-100 [&_code]:px-[0.3rem] [&_code]:py-[0.2rem] [&_code]:font-mono [&_code]:text-sm [&_code]:font-medium
              [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-gray-200 [&_pre]:bg-gray-50 [&_pre]:p-4 [&_pre]:my-4
              [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-sm [&_pre_code]:block [&_pre_code]:w-full
              [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:py-1 [&_blockquote]:my-4 [&_blockquote]:text-gray-600 [&_blockquote]:italic
              [&_img]:rounded-none [&_img]:border [&_img]:border-gray-200 [&_img]:my-4 [&_img]:max-w-full [&_img]:h-auto
              [&_hr]:my-8 [&_hr]:border-t [&_hr]:border-gray-200
              [&_table]:w-full [&_table]:my-4 [&_table]:border [&_table]:border-gray-200 [&_table]:rounded-lg
              [&_thead]:bg-gray-50
              [&_th]:border-r [&_th]:border-gray-200 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:last:border-0
              [&_td]:border-r [&_td]:border-gray-200 [&_td]:px-4 [&_td]:py-2 [&_td]:last:border-0 [&_td]:text-gray-700
              [&_tr]:border-b [&_tr]:border-gray-200 [&_tr]:last:border-0"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </main>
      
      <Header borderPosition="top" />
    </>
  );
}
