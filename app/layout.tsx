import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عربكلاو | ArabClaw - مساعدك الذكي بلغتك",
  description: "أول مساعد ذكاء اصطناعي مفتوح المصدر بالعربية. دعم كامل للهجات، خصوصية مطلقة، Skills عربية.",
  keywords: "openclaw, arabclaw, عربكلاو, ذكاء اصطناعي عربي, AI assistant, مساعد ذكي, مفتوح المصدر",
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&family=Amiri:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-arabic antialiased">
        {/* Elegant Navigation */}
        <nav className="fixed top-0 w-full bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-md border-b border-amber-600/20 z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="url(#navGradient)" strokeWidth="2"/>
                <path d="M20 8 L24 16 L28 12 L24 20 L32 18 L24 22 L20 32 L16 22 L8 18 L16 20 L12 12 L16 16 Z" fill="url(#navGradient2)"/>
                <defs>
                  <linearGradient id="navGradient" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#d97706"/>
                    <stop offset="100%" stopColor="#059669"/>
                  </linearGradient>
                  <linearGradient id="navGradient2" x1="8" y1="8" x2="32" y2="32">
                    <stop offset="0%" stopColor="#fef3c7"/>
                    <stop offset="50%" stopColor="#d97706"/>
                    <stop offset="100%" stopColor="#059669"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-bold">
                <span className="text-amber-100">عرب</span>
                <span className="text-emerald-400">كلاو</span>
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-amber-400 transition-colors font-semibold">
                المزايا
              </a>
              <a href="#community" className="text-gray-300 hover:text-amber-400 transition-colors font-semibold">
                المجتمع
              </a>
              <a href="/blog" className="text-gray-300 hover:text-amber-400 transition-colors font-semibold">
                المدونة
              </a>
              <a href="#docs" className="text-gray-300 hover:text-amber-400 transition-colors font-semibold">
                الوثائق
              </a>
              <button className="text-sm bg-gradient-to-r from-amber-600 to-emerald-600 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-amber-600/30 transition-all">
                EN
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
