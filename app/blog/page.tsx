import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'المدونة',
  description: 'مقالات، دروس، ونصائح حول OpenClaw بالعربية',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          المدونة
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          مقالات، دروس، ونصائح حول OpenClaw بالعربية 📝
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            المقالات قادمة قريباً... 🚀
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
            />
          ))}
        </div>
      )}
    </div>
  )
}
