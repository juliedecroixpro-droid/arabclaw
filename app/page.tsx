export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="relative px-6 py-32 text-center">
        {/* Logo Icon */}
        <div className="mb-6 flex justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="#EF4444"/>
            <path d="M32 16L42 26L32 36L22 26L32 16Z" fill="white"/>
            <path d="M32 28L42 38L32 48L22 38L32 28Z" fill="white" opacity="0.7"/>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white">عرب</span>
          <span className="text-cyan-400">كلاو</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-red-500 font-bold mb-8 tracking-wide">
          الذكاء الاصطناعي الذي يعمل فعلاً.
        </p>

        {/* Description */}
        <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
          ينظف بريدك الإلكتروني، يرسل الرسائل، يدير تقويمك، يتحقق من رحلاتك.
          <br />
          كل ذلك من WhatsApp أو Telegram أو أي تطبيق محادثة تستخدمه بالفعل.
        </p>

        {/* Video Badge */}
        <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-12">
          <span className="bg-white text-red-500 px-2 py-0.5 rounded text-xs font-bold">جديد</span>
          <span>تقديم عربكلاو</span>
          <span>→</span>
        </div>
      </section>

      {/* What People Say */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">
          ماذا يقول المستخدمون
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="feature-card rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              "بالأمس، كنت أستخدم Claude في جميع أنحاء المكان بسرعة. أنا معجب جداً بمدى سهولة إنجاز الأمور. OpenClaw يفعلها بشكل صحيح."
            </p>
            <p className="text-red-500 font-semibold">@AyeshDubois</p>
          </div>

          {/* Testimonial 2 */}
          <div className="feature-card rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              "حاولت بناء مساعد AI خاص بي من قبل، وأنا معجب جداً بمدى سهولة عمل Claw. دائم. عملي الشاق."
            </p>
            <p className="text-red-500 font-semibold">@MarkAppenth</p>
          </div>

          {/* Testimonial 3 */}
          <div className="feature-card rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              "OpenClaw يغير قواعد اللعبة. الإمكانيات للامتدادات المخصصة ضخمة، وهو يسرع العملية حقاً."
            </p>
            <p className="text-red-500 font-semibold">@Senator_NFTs</p>
          </div>

          {/* Testimonial 4 */}
          <div className="feature-card rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              "جربت @openclaw. أعتقد أنك ستحبه. يمكنك استخدام iMessage للتحدث معه."
            </p>
            <p className="text-red-500 font-semibold">@trevorjfr</p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 section-title">
          البداية السريعة
        </h2>
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-500 text-sm mr-auto">bash</span>
          </div>
          <div className="font-mono text-sm md:text-base">
            <div className="text-gray-500 mb-2"># macOS, Windows & Linux. التثبيت بأمر واحد. Mollify وكل شيء آخر بالنسبة لك.</div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">$</span>
              <span className="text-white">curl -fsSL https://openclaw.ai/install.sh | bash</span>
            </div>
          </div>
        </div>
      </section>

      {/* What it Does */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">
          ماذا يفعل
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="feature-card rounded-xl p-8 text-center">
            <div className="text-5xl mb-6">
              <svg className="w-12 h-12 mx-auto text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">يعمل على جهازك</h3>
            <p className="text-gray-400 leading-relaxed">
              Mac، Windows، أو Linux. Anthropic، OpenAI، Google، Ollama - افتراضي أو محلي تماماً.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card rounded-xl p-8 text-center">
            <div className="text-5xl mb-6">
              <svg className="w-12 h-12 mx-auto text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">أي تطبيق محادثة</h3>
            <p className="text-gray-400 leading-relaxed">
              تحدث معه على WhatsApp، Telegram، Discord، Slack، Signal، أو iMessage. يعمل في DMs ومحادثات المجموعات.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card rounded-xl p-8 text-center">
            <div className="text-5xl mb-6">
              <svg className="w-12 h-12 mx-auto text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">ذاكرة دائمة</h3>
            <p className="text-gray-400 leading-relaxed">
              يتذكرك ويتذكر تفضيلاتك. سياقك. ذاكرتك AI الخاصة التي تتعلم وتنمو.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card rounded-xl p-8 text-center">
            <div className="text-5xl mb-6">
              <svg className="w-12 h-12 mx-auto text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">التحكم في المتصفح</h3>
            <p className="text-gray-400 leading-relaxed">
              يقرأ صفحات الويب، يملأ النماذج، ويستخرج البيانات من أي موقع.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="feature-card rounded-xl p-8 text-center">
            <div className="text-5xl mb-6">
              <svg className="w-12 h-12 mx-auto text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">وصول كامل للنظام</h3>
            <p className="text-gray-400 leading-relaxed">
              يشغل أوامر shell، ينفذ الأوامر، يكتب التعليمات البرمجية - جهازك بالكامل.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="feature-card rounded-xl p-8 text-center">
            <div className="text-5xl mb-6">
              <svg className="w-12 h-12 mx-auto text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Skills ومكونات إضافية</h3>
            <p className="text-gray-400 leading-relaxed">
              مجتمع نشط يبني skills ويمكن حتى كتابة المكونات الإضافية الخاصة بك.
            </p>
          </div>
        </div>
      </section>

      {/* Arabic Skills Highlight */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">
          Skills عربية
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-500/20 to-transparent feature-card rounded-xl p-8">
            <div className="text-4xl mb-4">🗣️</div>
            <h3 className="text-xl font-bold mb-3 text-white">دعم اللهجات</h3>
            <p className="text-gray-400">
              مصري، مغربي، خليجي - يفهم ويتحدث بلهجتك المحلية.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-transparent feature-card rounded-xl p-8">
            <div className="text-4xl mb-4">🛍️</div>
            <h3 className="text-xl font-bold mb-3 text-white">تكاملات محلية</h3>
            <p className="text-gray-400">
              Noon، Talabat، Careem والمزيد من الخدمات الإقليمية.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-transparent feature-card rounded-xl p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-white">أدوات عمل</h3>
            <p className="text-gray-400">
              محاسبة GCC، موارد بشرية، إدارة مشاريع بالعربية.
            </p>
          </div>
        </div>
      </section>

      {/* Stay in the Loop */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title inline-block">
          ابقَ على اطلاع
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          احصل على تحديثات حول الميزات الجديدة، التكاملات، والحكمة الذكية. لا بريد عشوائي، إلغاء الاشتراك في أي وقت.
        </p>
        <div className="flex gap-3 max-w-md mx-auto mb-12">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
            اشترك →
          </button>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <a href="#" className="feature-card rounded-lg p-6 hover:scale-105 transition-transform">
            <svg className="w-10 h-10 mx-auto mb-3 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 24l-5.25-5.25C15.75 20.25 14.25 21 12.5 21c-4.69 0-8.5-3.81-8.5-8.5S7.81 4 12.5 4s8.5 3.81 8.5 8.5c0 1.75-.75 3.25-1.75 4.25L24 22l-2 2zM12.5 7C9.46 7 7 9.46 7 12.5S9.46 18 12.5 18s5.5-2.46 5.5-5.5S15.54 7 12.5 7z"/>
            </svg>
            <h3 className="font-bold text-white">Discord</h3>
            <p className="text-gray-500 text-sm mt-1">انضم للمجتمع</p>
          </a>

          <a href="#" className="feature-card rounded-lg p-6 hover:scale-105 transition-transform">
            <svg className="w-10 h-10 mx-auto mb-3 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"/>
            </svg>
            <h3 className="font-bold text-white">الوثائق</h3>
            <p className="text-gray-500 text-sm mt-1">اقرأ الدليل الكامل</p>
          </a>

          <a href="#" className="feature-card rounded-lg p-6 hover:scale-105 transition-transform">
            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <h3 className="font-bold text-white">GitHub</h3>
            <p className="text-gray-500 text-sm mt-1">مفتوح المصدر</p>
          </a>

          <a href="#" className="feature-card rounded-lg p-6 hover:scale-105 transition-transform">
            <svg className="w-10 h-10 mx-auto mb-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <h3 className="font-bold text-white">ClawHub</h3>
            <p className="text-gray-500 text-sm mt-1">Skills Marketplace</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-500 mb-6">
            <div className="flex justify-center gap-6 mb-4 text-sm">
              <a href="#" className="text-red-500 hover:text-red-400">المدونة</a>
              <span>·</span>
              <a href="#" className="text-red-500 hover:text-red-400">عرض</a>
              <span>·</span>
              <a href="#" className="text-red-500 hover:text-red-400">Shoutout</a>
              <span>·</span>
              <a href="#" className="text-red-500 hover:text-red-400">التكاملات</a>
            </div>
            <p className="text-sm">
              بُني بواسطة المجتمع العربي 🇸🇦🇪🇬🇲🇦🇦🇪 • مفتوح المصدر مع{' '}
              <span className="text-red-500">❤️</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
