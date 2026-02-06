import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc mr-6 mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal mr-6 mb-4 space-y-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700 dark:text-gray-300">{children}</li>
    ),
    code: ({ children }) => (
      <code className="px-2 py-1 bg-gray-800 text-blue-400 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 p-6 rounded-lg overflow-x-auto mb-6">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 hover:underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-r-4 border-blue-600 pr-4 mr-4 mb-4 italic text-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
