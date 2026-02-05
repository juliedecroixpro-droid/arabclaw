export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 80 80" 
              fill="none" 
              className="logo-pulse w-16 h-16 sm:w-20 sm:h-20"
            >
              <circle cx="40" cy="40" r="38" fill="#EF4444" opacity="0.1"/>
              <circle cx="40" cy="40" r="32" fill="#EF4444"/>
              <path d="M40 20 L50 30 L40 40 L30 30 Z" fill="white" opacity="0.9"/>
              <path d="M40 32 L50 42 L40 52 L30 42 Z" fill="white" opacity="0.6"/>
              <circle cx="40" cy="40" r="8" fill="white" opacity="0.3"/>
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-white">عرب</span>
            <span className="text-cyan-400">كلاو</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-red-500 font-bold mb-6 sm:mb-8 uppercase tracking-wide">
            الذكاء الاصطناعي الذي يعمل فعلاً.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            ينظف بريدك الإلكتروني، يرسل الرسائل، يدير تقويمك، يتحقق من رحلاتك.
            <br className="hidden sm:block" />
            كل ذلك من WhatsApp أو Telegram أو أي تطبيق محادثة تستخدمه.
          </p>

          {/* Video Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-10 sm:mb-12">
            <span className="bg-white text-red-500 px-2 py-0.5 rounded text-xs font-bold">جديد</span>
            <span className="hidden sm:inline">تقديم عربكلاو</span>
            <span className="sm:hidden">جديد</span>
            <span>→</span>
          </div>
        </div>
      </section>

      {/* What People Say */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 section-chevron">
          ماذا يقول المستخدمون
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="testimonial-card p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
              "بالأمس، كنت أستخدم Claude بسرعة. أنا معجب جداً بمدى سهولة إنجاز الأمور. Claw يفعلها بشكل صحيح."
            </p>
            <p className="text-red-500 font-semibold text-sm sm:text-base">@AyeshDubois</p>
          </div>

          <div className="testimonial-card p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
              "حاولت بناء مساعد AI من قبل، وأنا معجب جداً بمدى سهولة Claw. يقوم بالعمل الشاق."
            </p>
            <p className="text-red-500 font-semibold text-sm sm:text-base">@MarkAppenth</p>
          </div>

          <div className="testimonial-card p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
              "يعيش في المستقبل"
            </p>
            <p className="text-red-500 font-semibold text-sm sm:text-base">@Senator_NFTs</p>
          </div>

          <div className="testimonial-card p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
              "جربت @openclaw. أعتقد أنك ستحبه. يمكنك استخدام iMessage للتحدث معه."
            </p>
            <p className="text-red-500 font-semibold text-sm sm:text-base">@trevorjfr</p>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <a href="#" className="text-red-500 hover:text-red-400 font-semibold text-sm sm:text-base inline-flex items-center gap-2">
            عرض الكل
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Quick Start */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 section-chevron">
          البداية السريعة
        </h2>
        
        <div className="terminal">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-500 text-xs sm:text-sm ml-auto">bash</span>
          </div>
          
          <div className="text-xs sm:text-sm md:text-base">
            <div className="text-gray-500 mb-2 break-words">
              # macOS, Windows & Linux. التثبيت بأمر واحد. Mollify وكل شيء آخر.
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <span className="text-gray-500 shrink-0">$</span>
              <code className="text-white break-all" dir="ltr">
                curl -fsSL https://openclaw.ai/install.sh | bash
              </code>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-4 sm:mt-6 text-xs sm:text-sm">
          يعمل على macOS و Windows و Linux. التثبيت بأمر واحد Mollify وكل شيء آخر لك.
        </p>
      </section>

      {/* What it Does */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 section-chevron">
          ماذا يفعل
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Feature 1 */}
          <div className="card-elegant p-6 sm:p-8 text-center relative arab-accent">
            <div className="icon-wrapper mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">يعمل على جهازك</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Mac، Windows، أو Linux. Anthropic، OpenAI، Google، Ollama - افتراضي أو محلي تماماً.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card-elegant p-6 sm:p-8 text-center relative arab-accent">
            <div className="icon-wrapper mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">أي تطبيق محادثة</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              تحدث معه على WhatsApp، Telegram، Discord، Slack، Signal، أو iMessage. يعمل في DMs ومحادثات المجموعات.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card-elegant p-6 sm:p-8 text-center relative arab-accent">
            <div className="icon-wrapper mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">ذاكرة دائمة</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              يتذكرك ويتذكر تفضيلاتك. سياقك. ذاكرتك AI الخاصة.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card-elegant p-6 sm:p-8 text-center relative arab-accent">
            <div className="icon-wrapper mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">التحكم في المتصفح</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              يقرأ صفحات الويب، يملأ النماذج، ويستخرج البيانات من أي موقع.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="card-elegant p-6 sm:p-8 text-center relative arab-accent">
            <div className="icon-wrapper mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">وصول كامل للنظام</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              يشغل أوامر shell، ينفذ الأوامر، يكتب الكود - جهازك بالكامل.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="card-elegant p-6 sm:p-8 text-center relative arab-accent">
            <div className="icon-wrapper mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Skills ومكونات إضافية</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              مجتمع نشط يبني skills. يمكن كتابة المكونات الإضافية الخاصة بك.
            </p>
          </div>
        </div>
      </section>

      {/* Works With Everything */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 section-chevron">
          يعمل مع كل شيء
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {['WhatsApp', 'Telegram', 'Discord', 'Slack', 'Signal', 'iMessage', 'GPT', 'Spotify', 'Hue', 'Obsidian', 'Twitter', 'Browser', 'Gmail', 'GitHub'].map((app) => (
            <div key={app} className="card-elegant px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white">
              {app}
            </div>
          ))}
        </div>

        <div className="text-center space-y-3 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
          <a href="#" className="text-red-500 hover:text-red-400 font-semibold text-sm sm:text-base inline-block">
            عرض جميع التكاملات +50 →
          </a>
          <a href="#" className="text-red-500 hover:text-red-400 font-semibold text-sm sm:text-base inline-block">
            شاهد ما يبنيه الناس →
          </a>
        </div>
      </section>

      {/* Featured In */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 section-chevron">
          مميز في
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="card-elegant p-6 sm:p-8">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🍎</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">MacStories</h3>
            <p className="text-sm sm:text-base text-gray-400 italic mb-3 sm:mb-4">
              "OpenClaw أظهر لي مستقبل المساعدين الشخصيين كما يبدو."
            </p>
            <p className="text-red-500 font-semibold text-sm sm:text-base">Federico Viticci</p>
          </div>

          <div className="card-elegant p-6 sm:p-8">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⭐</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">StarryHope</h3>
            <p className="text-sm sm:text-base text-gray-400 italic mb-3 sm:mb-4">
              "The Lobster Takeover: لماذا يشتري المطورون Mac Minis ليديروا وكلاء AI الخاصين بهم"
            </p>
            <p className="text-red-500 font-semibold text-sm sm:text-base">Jim Mendenhall</p>
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <a href="#" className="card-elegant p-4 sm:p-6 text-center hover:scale-105 transition-transform">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 24l-5.25-5.25C15.75 20.25 14.25 21 12.5 21c-4.69 0-8.5-3.81-8.5-8.5S7.81 4 12.5 4s8.5 3.81 8.5 8.5c0 1.75-.75 3.25-1.75 4.25L24 22l-2 2z"/>
            </svg>
            <h3 className="font-bold text-sm sm:text-base">Discord</h3>
          </a>

          <a href="#" className="card-elegant p-4 sm:p-6 text-center hover:scale-105 transition-transform">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"/>
            </svg>
            <h3 className="font-bold text-sm sm:text-base">الوثائق</h3>
          </a>

          <a href="#" className="card-elegant p-4 sm:p-6 text-center hover:scale-105 transition-transform">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            </svg>
            <h3 className="font-bold text-sm sm:text-base">GitHub</h3>
          </a>

          <a href="#" className="card-elegant p-4 sm:p-6 text-center hover:scale-105 transition-transform">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <h3 className="font-bold text-sm sm:text-base">ClawHub</h3>
          </a>
        </div>
      </section>

      {/* Stay in the Loop */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 section-chevron inline-block">
          ابقَ على اطلاع
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-10">
          احصل على تحديثات حول الميزات الجديدة، التكاملات، والحكمة الذكية. لا بريد عشوائي، إلغاء الاشتراك في أي وقت.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm sm:text-base focus:border-red-500 focus:outline-none"
          />
          <button className="btn-primary whitespace-nowrap">
            اشترك →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm">
            <a href="#" className="text-red-500 hover:text-red-400">المدونة</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="text-red-500 hover:text-red-400">عرض</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="text-red-500 hover:text-red-400">Shoutout</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="text-red-500 hover:text-red-400">التكاملات</a>
          </div>
          
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            بُني بواسطة <a href="#" className="text-red-500">Mally 🦞</a> مع soul. مُلهم بالذكاء الاصطناعي بواسطة{' '}
            <a href="#" className="text-red-500">Peter Sternberger</a> و community.
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">مفتوح المصدر في ClaweCode و Clawdbot. جميع الحقوق محفوظة.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
