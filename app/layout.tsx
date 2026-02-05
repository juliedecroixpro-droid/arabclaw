import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عربكلاو | ArabClaw - الذكاء الاصطناعي الذي يعمل فعلاً",
  description: "أول مساعد ذكاء اصطناعي مفتوح المصدر بالعربية. يعمل محلياً على جهازك مع دعم كامل للهجات العربية والتكاملات المحلية.",
  keywords: "openclaw, arabclaw, عربكلاو, ذكاء اصطناعي عربي, AI assistant, مساعد ذكي, مفتوح المصدر, privacy-first AI",
  openGraph: {
    title: "عربكلاو - الذكاء الاصطناعي الذي يعمل فعلاً",
    description: "مساعد AI شخصي مفتوح المصدر بالعربية. خصوصية كاملة، يعمل محلياً، دعم جميع اللهجات.",
    type: "website",
  }
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&family=Amiri:wght@400;700&family=Inter:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-arabic antialiased">
        {/* Premium Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    fill="none"
                    className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-105"
                  >
                    <circle cx="20" cy="20" r="18" fill="url(#navGradient)"/>
                    <path d="M20 10 L25 15 L20 20 L15 15 Z" fill="white" opacity="0.95"/>
                    <path d="M20 16 L25 21 L20 26 L15 21 Z" fill="white" opacity="0.7"/>
                    <circle cx="20" cy="20" r="4" fill="white" opacity="0.4"/>
                    <defs>
                      <linearGradient id="navGradient" x1="2" y1="2" x2="38" y2="38">
                        <stop offset="0%" stopColor="#ff4444"/>
                        <stop offset="100%" stopColor="#ff6666"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute -inset-2 bg-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-xl sm:text-2xl font-bold">
                  <span className="text-white">عرب</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">كلاو</span>
                </span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {[
                  { label: 'المزايا', href: '#features' },
                  { label: 'المجتمع', href: '#community' },
                  { label: 'المدونة', href: '/blog' },
                  { label: 'الوثائق', href: '#docs' }
                ].map((item) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    className="relative text-gray-300 hover:text-white transition-colors font-medium text-base group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
                
                <button className="relative overflow-hidden px-4 py-2 rounded-lg font-semibold text-sm transition-all group" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <span className="relative z-10">EN</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 rounded-lg transition-all hover:bg-white/5 active:bg-white/10"
                aria-label="القائمة"
              >
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div>
          {children}
        </div>

        {/* Scroll to Top Button */}
        <button 
          className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 opacity-0 pointer-events-none z-40"
          aria-label="العودة للأعلى"
          style={{
            boxShadow: '0 8px 24px rgba(255,68,68,0.3)'
          }}
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </body>
    </html>
  );
}
