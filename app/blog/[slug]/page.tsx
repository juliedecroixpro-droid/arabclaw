import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'مقال غير موجود',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Dynamically import the MDX file
  const MDXContent = dynamic(() => import(`@/content/blog/${slug}.mdx`))

  // JSON-LD structured data for blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "ArabClaw Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ArabClaw",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arabclaw.com/mascot.jpg"
      }
    },
    "inLanguage": "ar"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <time className="text-gray-600 dark:text-gray-400 text-lg">
            {post.date}
          </time>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXContent />
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← العودة للمدونة
          </a>
        </footer>
      </article>
    </>
  )
}
