export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-block w-16 h-16 bg-red-500 rounded-full mb-4">
            {/* Placeholder for Arabclaw logo */}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">عرب</span>
          <span className="text-cyan-400">كلاو</span>
        </h1>
        <p className="text-xl md:text-2xl text-red-500 font-semibold mb-6">
          الذكاء الاصطناعي الذي يعمل فعلاً
        </p>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          ينظف بريدك الإلكتروني، يرسل الرسائل، يدير تقويمك، يتحقق من رحلاتك.
          <br />
          كل ذلك من WhatsApp أو Telegram أو أي تطبيق محادثة تستخدمه بالفعل.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            ابدأ الآن
          </button>
          <button className="border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            شاهد الفيديو
          </button>
        </div>
      </section>

      {/* Quick Start */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-red-500">❯</span> البداية السريعة
        </h2>
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <div className="font-mono text-sm">
            <div className="text-gray-500"># macOS, Windows & Linux. التثبيت بأمر واحد.</div>
            <div className="mt-2">
              <span className="text-gray-500">$</span>{' '}
              <span className="text-white">curl -fsSL https://openclaw.ai/install.sh | bash</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-red-500">❯</span> ماذا يفعل
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2">يعمل على جهازك</h3>
            <p className="text-gray-400">
              Mac، Windows، أو Linux. Anthropic، OpenAI، Google، Ollama - افتراضي أو محلي تماماً.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">أي تطبيق محادثة</h3>
            <p className="text-gray-400">
              تحدث معه على WhatsApp، Telegram، Discord، Slack، Signal، أو iMessage. يعمل في DMs ومحادثات المجموعات.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">ذاكرة دائمة</h3>
            <p className="text-gray-400">
              يتذكرك ويتذكر تفضيلاتك. سياقك. ذاكرتك AI الخاصة التي تتعلم وتنمو.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">التحكم في المتصفح</h3>
            <p className="text-gray-400">
              يقرأ صفحات الويب، يملأ النماذج، ويستخرج البيانات من أي موقع.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-2">وصول كامل للنظام</h3>
            <p className="text-gray-400">
              يشغل أوامر shell، ينفذ الأوامر، يكتب التعليمات البرمجية - جهازك بالكامل.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Skills ومكونات إضافية</h3>
            <p className="text-gray-400">
              مجتمع نشط يبني skills ويمكن حتى كتابة المكونات الإضافية الخاصة بك.
            </p>
          </div>
        </div>
      </section>

      {/* Arabic Skills Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-red-500">❯</span> Skills عربية
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-500/10 to-cyan-500/10 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">🗣️ دعم اللهجات</h3>
            <p className="text-gray-400">
              مصري، مغربي، خليجي - يفهم ويتحدث بلهجتك.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-cyan-500/10 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">🛍️ تكاملات محلية</h3>
            <p className="text-gray-400">
              Noon، Talabat، Careem والمزيد من الخدمات الإقليمية.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-cyan-500/10 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">📊 أدوات عمل</h3>
            <p className="text-gray-400">
              محاسبة GCC، موارد بشرية، إدارة مشاريع.
            </p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
          <span className="text-red-500">❯</span> انضم للمجتمع العربي
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          احصل على تحديثات حول الميزات الجديدة، التكاملات، والحكمة الذكية.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Discord
          </a>
          <a href="#" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Telegram
          </a>
          <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 mt-16">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>
            بُني بواسطة المجتمع العربي 🇸🇦🇪🇬🇲🇦🇦🇪 • مفتوح المصدر مع{' '}
            <span className="text-red-500">❤️</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
