import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عربكلاو | ArabClaw - الذكاء الاصطناعي الذي يعمل فعلاً",
  description: "Openclaw للعالم العربي - مساعد AI شخصي مفتوح المصدر، يعمل محلياً على جهازك مع دعم كامل للغة العربية",
  keywords: "openclaw, arabclaw, عربكلاو, ذكاء اصطناعي, AI assistant, عربي, مساعد شخصي",
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
      </head>
      <body className="font-arabic antialiased">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              <span className="text-xl font-bold">
                <span className="text-white">عرب</span>
                <span className="text-cyan-400">كلاو</span>
              </span>
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-6">
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors">
                الوثائق
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#community" className="text-gray-300 hover:text-white transition-colors">
                المجتمع
              </a>
              <button className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
                EN
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
