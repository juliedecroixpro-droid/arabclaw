export default function Home() {
  return (
    <main className="min-h-screen premium-bg">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo with Float Animation */}
          <div className="mb-8 sm:mb-10 lg:mb-12 flex justify-center animate-scaleIn">
            <div className="logo-float">
              <svg 
                width="96" 
                height="96" 
                viewBox="0 0 96 96" 
                fill="none"
                className="w-20 h-20 sm:w-24 sm:h-24 filter drop-shadow-2xl"
              >
                {/* Outer glow */}
                <circle cx="48" cy="48" r="46" fill="url(#glow)" opacity="0.2"/>
                
                {/* Main circle with gradient */}
                <circle cx="48" cy="48" r="38" fill="url(#gradient1)"/>
                
                {/* Inner pattern */}
                <path 
                  d="M48 24 L58 34 L48 44 L38 34 Z" 
                  fill="white" 
                  opacity="0.95"
                />
                <path 
                  d="M48 38 L58 48 L48 58 L38 48 Z" 
                  fill="white" 
                  opacity="0.7"
                />
                <circle cx="48" cy="48" r="10" fill="white" opacity="0.4"/>
                <circle cx="48" cy="48" r="4" fill="white"/>
                
                <defs>
                  <radialGradient id="glow">
                    <stop offset="0%" stopColor="#ff4444"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </radialGradient>
                  <linearGradient id="gradient1" x1="10" y1="10" x2="86" y2="86">
                    <stop offset="0%" stopColor="#ff4444"/>
                    <stop offset="50%" stopColor="#ff5555"/>
                    <stop offset="100%" stopColor="#ff6666"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="font-arabic-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6 sm:mb-8 animate-fadeInUp" style={{animationDelay: '100ms'}}>
            <span className="inline-block">
              <span className="text-white">عرب</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">كلاو</span>
            </span>
          </h1>

          {/* Tagline */}
          <div className="mb-6 sm:mb-8 lg:mb-10 animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide mb-2" style={{
              background: 'linear-gradient(135deg, #ff4444 0%, #ff6666 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              الذكاء الاصطناعي الذي يعمل فعلاً.
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 leading-relaxed px-4 animate-fadeInUp" style={{animationDelay: '300ms'}}>
            ينظف بريدك الإلكتروني، يرسل الرسائل، يدير تقويمك، يتحقق من رحلاتك.
            <br className="hidden sm:block" />
            <span className="text-gray-500">كل ذلك من WhatsApp أو Telegram أو أي تطبيق محادثة تستخدمه.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 sm:mb-20 px-4 animate-fadeInUp" style={{animationDelay: '400ms'}}>
            <button className="btn-premium w-full sm:w-auto">
              ابدأ الآن - مجاناً
            </button>
            <button className="btn-secondary-premium w-full sm:w-auto flex items-center justify-center gap-2">
              <span>شاهد العرض التوضيحي</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
              </svg>
            </button>
          </div>

          {/* New Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full animate-fadeIn" 
               style={{
                 animationDelay: '500ms',
                 background: 'linear-gradient(135deg, rgba(255,68,68,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                 border: '1px solid rgba(255,68,68,0.2)'
               }}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm sm:text-base font-semibold text-white">تقديم عربكلاو للعالم العربي</span>
            <span className="text-red-400">→</span>
          </div>
        </div>
      </section>

      {/* What People Say */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 section-title">
          ماذا يقول المستخدمون
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-10">
          {[
            { text: "بالأمس، كنت أستخدم Claude بسرعة. أنا معجب جداً بمدى سهولة إنجاز الأمور. Claw يفعلها بشكل صحيح. دائم.", author: "@AyeshDubois" },
            { text: "حاولت بناء مساعد AI من قبل، وأنا معجب جداً بمدى سهولة Claw. يقوم بالعمل الشاق.", author: "@MarkAppenth" },
            { text: "OpenClaw يغير قواعد اللعبة. الإمكانيات للامتدادات المخصصة ضخمة، وهو يسرع العملية حقاً.", author: "@Senator_NFTs" },
            { text: "جربت @openclaw. أعتقد أنك ستحبه. يمكنك استخدام iMessage للتحدث معه.", author: "@trevorjfr" }
          ].map((testimonial, i) => (
            <div 
              key={i} 
              className="testimonial-premium group"
              style={{animationDelay: `${i * 100}ms`}}
            >
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-5 leading-relaxed relative z-10">
                {testimonial.text}
              </p>
              <p className="text-red-500 font-semibold text-sm sm:text-base relative z-10 group-hover:text-red-400 transition-colors">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold text-base sm:text-lg group transition-colors"
          >
            <span>عرض الكل</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Quick Start */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 section-title">
          البداية السريعة
        </h2>
        
        <div className="terminal-premium">
          <div className="flex items-center justify-between mb-5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            <span className="text-gray-500 text-xs sm:text-sm font-medium">bash</span>
          </div>
          
          <div className="space-y-3 text-xs sm:text-sm lg:text-base">
            <div className="text-gray-500 leading-relaxed">
              # macOS, Windows & Linux. التثبيت بأمر واحد.
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 shrink-0">$</span>
              <code className="text-gray-100 break-all font-mono" dir="ltr">
                curl -fsSL https://openclaw.ai/install.sh | bash
              </code>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6 sm:mt-8 text-sm sm:text-base leading-relaxed">
          يعمل على macOS و Windows و Linux. التثبيت بأمر واحد يضبط كل شيء لك.
        </p>
      </section>

      {/* What it Does */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 section-title">
          ماذا يفعل
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: (
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              ),
              title: "يعمل على جهازك",
              description: "Mac، Windows، أو Linux. Anthropic، OpenAI، Google، Ollama - افتراضي أو محلي تماماً."
            },
            {
              icon: (
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              ),
              title: "أي تطبيق محادثة",
              description: "تحدث معه على WhatsApp، Telegram، Discord، Slack، Signal، أو iMessage. يعمل في DMs ومحادثات المجموعات."
            },
            {
              icon: (
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              ),
              title: "ذاكرة دائمة",
              description: "يتذكرك ويتذكر تفضيلاتك. سياقك. ذاكرتك AI الخاصة التي تتعلم وتنمو معك."
            },
            {
              icon: (
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              ),
              title: "التحكم في المتصفح",
              description: "يقرأ صفحات الويب، يملأ النماذج، يستخرج البيانات من أي موقع. أتمتة كاملة للويب."
            },
            {
              icon: (
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              ),
              title: "وصول كامل للنظام",
              description: "يشغل أوامر shell، ينفذ الأوامر، يكتب الكود. جهازك بالكامل تحت تصرفك."
            },
            {
              icon: (
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              ),
              title: "Skills ومكونات إضافية",
              description: "مجتمع نشط يبني skills مذهلة. أو اكتب المكونات الإضافية الخاصة بك بسهولة."
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className="glass-card p-8 lg:p-10 text-center arab-accent group"
              style={{animationDelay: `${i * 50}ms`}}
            >
              <div className="icon-container mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500 transition-all">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Works With Everything */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 section-title">
          يعمل مع كل شيء
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {['WhatsApp', 'Telegram', 'Discord', 'Slack', 'Signal', 'iMessage', 'OpenAI', 'Spotify', 'Hue', 'Obsidian', 'X/Twitter', 'Browser', 'Gmail', 'GitHub'].map((app, i) => (
            <div 
              key={app} 
              className="glass-card px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-gray-300 hover:text-white cursor-default"
              style={{animationDelay: `${i * 30}ms`}}
            >
              {app}
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
          <a href="#" className="text-red-500 hover:text-red-400 font-semibold text-base sm:text-lg inline-flex items-center gap-2 group transition-colors">
            <span>عرض جميع التكاملات +50</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#" className="text-red-500 hover:text-red-400 font-semibold text-base sm:text-lg inline-flex items-center gap-2 group transition-colors">
            <span>شاهد ما يبنيه الناس</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Featured In */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 section-title">
          مميز في
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="glass-card p-8 lg:p-10 group">
            <div className="text-5xl mb-5">🍎</div>
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">MacStories</h3>
            <p className="text-base lg:text-lg text-gray-400 italic mb-5 leading-relaxed">
              "OpenClaw أظهر لي مستقبل المساعدين الشخصيين كما يبدو."
            </p>
            <p className="text-red-500 font-semibold text-base lg:text-lg group-hover:text-red-400 transition-colors">
              Federico Viticci
            </p>
          </div>

          <div className="glass-card p-8 lg:p-10 group">
            <div className="text-5xl mb-5">⭐</div>
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">StarryHope</h3>
            <p className="text-base lg:text-lg text-gray-400 italic mb-5 leading-relaxed">
              "The Lobster Takeover: لماذا يشتري المطورون Mac Minis ليديروا وكلاء AI الخاصين بهم"
            </p>
            <p className="text-red-500 font-semibold text-base lg:text-lg group-hover:text-red-400 transition-colors">
              Jim Mendenhall
            </p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: '💬', title: 'Discord', color: 'from-indigo-500 to-purple-500' },
            { icon: '📚', title: 'الوثائق', color: 'from-red-500 to-pink-500' },
            { icon: '⚙️', title: 'GitHub', color: 'from-gray-500 to-gray-700' },
            { icon: '✨', title: 'ClawHub', color: 'from-amber-500 to-yellow-500' }
          ].map((item, i) => (
            <a 
              key={i}
              href="#" 
              className="glass-card p-6 lg:p-8 text-center group"
              style={{animationDelay: `${i * 75}ms`}}
            >
              <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className={`font-bold text-base sm:text-lg bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 section-title inline-block">
          ابقَ على اطلاع
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          احصل على تحديثات حول الميزات الجديدة، التكاملات، والحكمة الذكية.
          <br className="hidden sm:block" />
          <span className="text-gray-500">لا بريد عشوائي، إلغاء الاشتراك في أي وقت.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 bg-black/40 border border-white/10 rounded-lg px-5 py-4 text-white text-base focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all placeholder:text-gray-500"
          />
          <button className="btn-premium whitespace-nowrap">
            اشترك →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm sm:text-base">
            {['المدونة', 'عرض', 'Shoutout', 'التكاملات'].map((link, i) => (
              <a 
                key={i}
                href="#" 
                className="text-gray-400 hover:text-red-400 transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>
          
          <p className="text-center text-gray-500 text-xs sm:text-sm leading-relaxed">
            بُني بواسطة <a href="#" className="text-red-500 hover:text-red-400 transition-colors">المجتمع العربي</a> بحب ❤️
            <br />
            <span className="text-gray-600">مفتوح المصدر • مجاني للأبد • جميع الحقوق محفوظة © 2026</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
