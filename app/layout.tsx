import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عربكلاو — مساعد AI شخصي",
  description: "الذكاء الاصطناعي الذي يعمل فعلاً. ينظف بريدك، يرسل الرسائل، يدير تقويمك من أي تطبيق محادثة.",
  openGraph: {
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap" 
          rel="stylesheet" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-arabic">
        {/* Exact OpenClaw Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <img src="/mascot.jpg" alt="عربكلاو" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">عرب</span>
                <span className="text-cyan-400">كلاو</span>
              </span>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                المزايا
              </a>
              <a href="#community" className="text-gray-300 hover:text-white transition-colors">
                المجتمع
              </a>
              <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                المدونة
              </a>
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors">
                الوثائق
              </a>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
