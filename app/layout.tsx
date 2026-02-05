import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عربكلاو | ArabClaw - الذكاء الاصطناعي الذي يعمل فعلاً",
  description: "أول مساعد ذكاء اصطناعي مفتوح المصدر بالعربية. يعمل محلياً على جهازك مع دعم كامل للهجات العربية.",
  keywords: "openclaw, arabclaw, عربكلاو, ذكاء اصطناعي, AI assistant, مساعد ذكي, مفتوح المصدر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap" 
          rel="stylesheet" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-arabic antialiased">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
                <circle cx="16" cy="16" r="14" fill="#EF4444"/>
                <path d="M16 8 L20 12 L16 16 L12 12 Z" fill="white" opacity="0.9"/>
                <path d="M16 13 L20 17 L16 21 L12 17 Z" fill="white" opacity="0.6"/>
              </svg>
              <span className="text-lg sm:text-xl md:text-2xl font-bold">
                <span className="text-white">عرب</span>
                <span className="text-cyan-400">كلاو</span>
              </span>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium">
                المزايا
              </a>
              <a href="#community" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium">
                المجتمع
              </a>
              <a href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium">
                المدونة
              </a>
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium">
                الوثائق
              </a>
              <button className="text-xs lg:text-sm bg-gray-800 hover:bg-gray-700 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-semibold transition-colors">
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-14 sm:pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
