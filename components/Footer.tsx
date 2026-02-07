import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img src="/mascot.jpg" alt="ArabClaw" className="w-12 h-12 rounded-full" />
              <span className="text-xl font-bold text-gray-900">
                ArabClaw
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              أسهل طريقة لاستخدام الذكاء الاصطناعي بالعربية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://docs.arabclaw.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  📚 التوثيق
                </Link>
              </li>
              <li>
                <Link href="https://marketplace.arabclaw.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  🛒 Marketplace
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                  📝 المدونة
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">المجتمع</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/openclaw" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/openclaw" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>© 2025 ArabClaw. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
