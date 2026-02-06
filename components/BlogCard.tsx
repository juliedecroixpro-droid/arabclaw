import Link from 'next/link'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
}

export default function BlogCard({ slug, title, excerpt, date }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:scale-105">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
          {excerpt}
        </p>
        <time className="text-sm text-gray-500 dark:text-gray-500">
          {date}
        </time>
      </div>
    </Link>
  )
}
