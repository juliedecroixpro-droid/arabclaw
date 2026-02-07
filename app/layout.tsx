import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ArabClaw - OpenClaw بالعربية",
    template: "%s | ArabClaw"
  },
  description: "أسهل طريقة لاستخدام الذكاء الاصطناعي بالعربية - OpenClaw باللغة العربية",
  keywords: ["OpenClaw", "Arabic", "AI", "عربي", "ذكاء اصطناعي", "Claude", "ChatGPT"],
  authors: [{ name: "ArabClaw Team" }],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://arabclaw.com",
    siteName: "ArabClaw",
    title: "ArabClaw - OpenClaw بالعربية",
    description: "أسهل طريقة لاستخدام الذكاء الاصطناعي بالعربية",
    images: [
      {
        url: "/mascot.jpg",
        width: 1200,
        height: 630,
        alt: "ArabClaw",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArabClaw - OpenClaw بالعربية",
    description: "أسهل طريقة لاستخدام الذكاء الاصطناعي بالعربية",
    images: ["/mascot.jpg"],
  },
  metadataBase: new URL("https://arabclaw.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ArabClaw",
    "alternateName": "OpenClaw بالعربية",
    "url": "https://arabclaw.com",
    "description": "أسهل طريقة لاستخدام الذكاء الاصطناعي بالعربية - OpenClaw باللغة العربية",
    "inLanguage": "ar",
    "publisher": {
      "@type": "Organization",
      "name": "ArabClaw Team",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arabclaw.com/mascot.jpg"
      }
    }
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cairo.className} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
