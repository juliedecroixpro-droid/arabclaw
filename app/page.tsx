export default function Home() {
  return (
    <main className="min-h-screen zellige-bg islamic-pattern">
      {/* Hero Section - Andalusian Style */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden">
        {/* Decorative Arch Top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-32 moorish-arch bg-gradient-to-b from-amber-600/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Ornate Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer ornate circle */}
                <circle cx="60" cy="60" r="58" stroke="url(#gradient1)" strokeWidth="2" opacity="0.6"/>
                <circle cx="60" cy="60" r="52" stroke="url(#gradient2)" strokeWidth="1" opacity="0.4"/>
                
                {/* 8-pointed Andalusian star */}
                <g transform="translate(60, 60)">
                  <path d="M0,-45 L8,-15 L25,-25 L12,-5 L35,-8 L15,5 L35,8 L12,5 L25,25 L8,15 L0,45 L-8,15 L-25,25 L-12,5 L-35,8 L-15,-5 L-35,-8 L-12,-5 L-25,-25 L-8,-15 Z" 
                        fill="url(#gradient3)" 
                        opacity="0.9"/>
                  
                  {/* Inner geometric pattern */}
                  <circle r="18" fill="none" stroke="url(#gradient4)" strokeWidth="2"/>
                  <circle r="12" fill="url(#gradient4)" opacity="0.3"/>
                  
                  {/* Center jewel */}
                  <circle r="6" fill="#fef3c7"/>
                </g>
                
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="120" y2="120">
                    <stop offset="0%" stopColor="#d97706"/>
                    <stop offset="50%" stopColor="#059669"/>
                    <stop offset="100%" stopColor="#1e40af"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="120" y1="0" x2="0" y2="120">
                    <stop offset="0%" stopColor="#1e40af"/>
                    <stop offset="100%" stopColor="#d97706"/>
                  </linearGradient>
                  <linearGradient id="gradient3" x1="-45" y1="-45" x2="45" y2="45">
                    <stop offset="0%" stopColor="#1e40af"/>
                    <stop offset="50%" stopColor="#059669"/>
                    <stop offset="100%" stopColor="#d97706"/>
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0" y1="-20" x2="0" y2="20">
                    <stop offset="0%" stopColor="#fef3c7"/>
                    <stop offset="100%" stopColor="#d97706"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Title with Calligraphic Style */}
          <h1 className="text-7xl md:text-9xl font-arabic-title mb-6 calligraphic-gradient leading-tight">
            عَرَبْكْلَاو
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-600"></div>
            <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>

          <p className="text-2xl md:text-4xl text-amber-100 font-arabic-title mb-12 leading-relaxed">
            مساعدك الذكي الشخصي<br/>بلغتك، لعالمك
          </p>

          {/* Three Key Messages */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="arch-border">
              <div className="text-emerald-400 text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-bold text-amber-100 mb-2">ذكاء اصطناعي محلي</h3>
              <p className="text-gray-300 text-sm">يعمل على جهازك، بياناتك تبقى لك</p>
            </div>

            <div className="arch-border">
              <div className="text-blue-400 text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-bold text-amber-100 mb-2">مجتمع عربي نابض</h3>
              <p className="text-gray-300 text-sm">مفتوح المصدر، مبني من العرب للعرب</p>
            </div>

            <div className="arch-border">
              <div className="text-amber-400 text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-amber-100 mb-2">قوة لا حدود لها</h3>
              <p className="text-gray-300 text-sm">Skills عربية، لهجات، تكاملات محلية</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-andalusian text-white px-10 py-4 rounded-xl font-bold text-lg relative z-10">
              ابدأ الآن - مجاناً
            </button>
            <button className="border-2 border-amber-600/50 hover:border-amber-600 text-amber-100 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:bg-amber-600/10">
              شاهد العرض التوضيحي
            </button>
          </div>

          {/* Install Command */}
          <div className="max-w-3xl mx-auto">
            <div className="arch-border bg-black/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-amber-600 text-sm font-mono">terminal</span>
              </div>
              <code className="text-emerald-400 font-mono text-sm md:text-base block text-right" dir="ltr">
                curl -fsSL https://openclaw.ai/install.sh | bash
              </code>
            </div>
          </div>
        </div>
      </section>

      <div className="arabesque-divider max-w-4xl mx-auto"></div>

      {/* Features - Andalusian Cards */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-arabic-title text-center mb-4 calligraphic-gradient">
          لماذا عربكلاو؟
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">مزايا مصممة خصيصاً للمستخدم العربي</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="andalusian-card p-8">
            <div className="mb-6">
              <svg className="w-16 h-16 text-blue-400 icon-glow mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-amber-100 mb-3 text-center">دعم كامل للهجات</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              مصري، مغربي، خليجي، شامي - يفهم لهجتك ويتحدث بها بطلاقة
            </p>
          </div>

          {/* Feature 2 */}
          <div className="andalusian-card p-8">
            <div className="mb-6">
              <svg className="w-16 h-16 text-emerald-400 icon-glow mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-amber-100 mb-3 text-center">خصوصية مطلقة</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              يعمل محلياً على جهازك. بياناتك لا تغادر جهازك أبداً
            </p>
          </div>

          {/* Feature 3 */}
          <div className="andalusian-card p-8">
            <div className="mb-6">
              <svg className="w-16 h-16 text-amber-400 icon-glow mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-amber-100 mb-3 text-center">تكاملات محلية</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Noon، Talabat، Careem - يتصل بخدماتك المفضلة
            </p>
          </div>

          {/* Feature 4 */}
          <div className="andalusian-card p-8">
            <div className="mb-6">
              <svg className="w-16 h-16 text-purple-400 icon-glow mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-amber-100 mb-3 text-center">Skills Marketplace</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              مئات الـ Skills العربية جاهزة للاستخدام من المجتمع
            </p>
          </div>

          {/* Feature 5 */}
          <div className="andalusian-card p-8">
            <div className="mb-6">
              <svg className="w-16 h-16 text-rose-400 icon-glow mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-amber-100 mb-3 text-center">سهل الاستخدام</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              كلمه من WhatsApp أو Telegram - بدون تطبيقات معقدة
            </p>
          </div>

          {/* Feature 6 */}
          <div className="andalusian-card p-8">
            <div className="mb-6">
              <svg className="w-16 h-16 text-cyan-400 icon-glow mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-amber-100 mb-3 text-center">مفتوح المصدر</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              شفاف، آمن، قابل للتخصيص - كود مفتوح 100%
            </p>
          </div>
        </div>
      </section>

      <div className="arabesque-divider max-w-4xl mx-auto"></div>

      {/* Community Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-arabic-title mb-6 calligraphic-gradient">
          انضم للمجتمع العربي
        </h2>
        <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          مطورون، مبدعون، ورواد أعمال من كل أنحاء العالم العربي يبنون مستقبل الذكاء الاصطناعي بالعربية
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <a href="#" className="andalusian-card p-6 hover:scale-105 transition-transform">
            <svg className="w-12 h-12 mx-auto mb-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 24l-5.25-5.25C15.75 20.25 14.25 21 12.5 21c-4.69 0-8.5-3.81-8.5-8.5S7.81 4 12.5 4s8.5 3.81 8.5 8.5c0 1.75-.75 3.25-1.75 4.25L24 22l-2 2z"/>
            </svg>
            <h3 className="font-bold text-amber-100 text-lg">Discord</h3>
            <p className="text-gray-400 text-sm mt-2">محادثات مباشرة</p>
          </a>

          <a href="#" className="andalusian-card p-6 hover:scale-105 transition-transform">
            <svg className="w-12 h-12 mx-auto mb-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <h3 className="font-bold text-amber-100 text-lg">Telegram</h3>
            <p className="text-gray-400 text-sm mt-2">قناة الأخبار</p>
          </a>

          <a href="#" className="andalusian-card p-6 hover:scale-105 transition-transform">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <h3 className="font-bold text-amber-100 text-lg">GitHub</h3>
            <p className="text-gray-400 text-sm mt-2">ساهم بالكود</p>
          </a>

          <a href="/blog" className="andalusian-card p-6 hover:scale-105 transition-transform">
            <svg className="w-12 h-12 mx-auto mb-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
            </svg>
            <h3 className="font-bold text-amber-100 text-lg">المدونة</h3>
            <p className="text-gray-400 text-sm mt-2">دروس بالعربية</p>
          </a>
        </div>

        <button className="btn-andalusian text-white px-12 py-5 rounded-xl font-bold text-xl relative z-10">
          ابدأ رحلتك مع عربكلاو
        </button>
      </section>

      {/* Footer - Andalusian Style */}
      <footer className="border-t border-amber-600/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-amber-600 to-transparent"></div>
            </div>
            
            <div className="flex justify-center gap-8 text-sm text-gray-400 mb-6">
              <a href="#" className="hover:text-amber-400 transition-colors">الوثائق</a>
              <span>•</span>
              <a href="/blog" className="hover:text-amber-400 transition-colors">المدونة</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-400 transition-colors">Skills</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-400 transition-colors">المجتمع</a>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm">
            مبني بحب من المجتمع العربي 🇸🇦 🇪🇬 🇲🇦 🇦🇪 🇯🇴 🇱🇧 🇹🇳
            <br />
            <span className="text-amber-600">مفتوح المصدر • مجاني للأبد</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
