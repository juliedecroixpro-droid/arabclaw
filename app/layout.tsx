import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عربكلاو - الذكاء الاصطناعي الذي يعمل فعلاً",
  description: "مساعدك الشخصي الذكي الذي يفهم لهجتك، يحترم خصوصيتك، ويعمل من أي تطبيق محادثة تستخدمه. مفتوح المصدر ومجاني للأبد.",
  keywords: "عربكلاو, ذكاء اصطناعي عربي, مساعد ذكي, AI بالعربية, خصوصية, مفتوح المصدر",
  openGraph: {
    title: "عربكلاو - الذكاء الاصطناعي الذي يعمل فعلاً",
    description: "مساعد AI شخصي يفهم لهجتك ويحترم خصوصيتك",
    type: "website",
    images: ['/mascot.jpg'],
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
        <link rel="icon" href="/mascot.jpg" />
      </head>
      <body className="font-arabic antialiased">
        {/* Floating Navigation */}
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
          <div className="glass-card px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <img 
                  src="/mascot.jpg" 
                  alt="عربكلاو" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold hidden sm:block">
                <span className="text-white">عرب</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">كلاو</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { label: 'المزايا', href: '#features' },
                { label: 'كيف يعمل', href: '#how' },
                { label: 'الآراء', href: '#testimonials' },
                { label: 'المجتمع', href: '#community' }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="relative text-gray-300 hover:text-white transition-colors font-medium group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button className="hidden sm:block btn-premium text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
              ابدأ الآن
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="القائمة"
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
