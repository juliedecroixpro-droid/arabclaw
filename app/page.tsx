import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* EXACT Hero from OpenClaw */}
      <section className="px-6 py-20 sm:py-32 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Mascot Logo - exact size/position as OpenClaw blob */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 logo-pulse">
              <Image
                src="/mascot.jpg"
                alt="عربكلاو"
                width={96}
                height={96}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Title - exact OpenClaw size/spacing */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-none">
            <span className="text-white">عرب</span>
            <span className="text-cyan-400">كلاو</span>
          </h1>

          {/* Tagline - exact style */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-red-500 font-bold mb-6 sm:mb-8 uppercase tracking-wider">
            الذكاء الاصطناعي الذي يعمل فعلاً.
          </p>

          {/* Description - exact spacing */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            ينظف بريدك الإلكتروني، يرسل الرسائل، يدير تقويمك، يتحقق من رحلاتك.
            <br className="hidden sm:block" />
            كل ذلك من WhatsApp أو Telegram أو أي تطبيق محادثة تستخدمه.
          </p>

          {/* NEW Badge - exact OpenClaw style */}
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <span className="bg-white text-red-500 px-2 py-0.5 rounded text-xs font-bold">جديد</span>
            <span>تقديم عربكلاو</span>
            <span>→</span>
          </div>
        </div>
      </section>

      {/* What People Say - EXACT OpenClaw layout */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold section-chevron">
            ماذا يقول المستخدمون
          </h2>
          <a href="#" className="text-red-500 hover:text-red-400 text-sm font-semibold hidden sm:inline-flex items-center gap-2">
            عرض الكل
            <span>→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="openclaw-card p-6">
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
              "بالأمس، كنت أستخدم Claude بسرعة. أنا معجب جداً بمدى سهولة إنجاز الأمور. Claw يفعلها بشكل صحيح. دائم."
            </p>
            <p className="text-red-500 font-semibold text-sm">@AyeshDubois</p>
          </div>

          <div className="openclaw-card p-6">
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
              "حاولت بناء مساعد AI من قبل، وأنا معجب جداً بمدى سهولة Claw. يقوم بالعمل الشاق."
            </p>
            <p className="text-red-500 font-semibold text-sm">@MarkAppenth</p>
          </div>

          <div className="openclaw-card p-6">
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
              "يعيش في المستقبل"
            </p>
            <p className="text-red-500 font-semibold text-sm">@Senator_NFTs</p>
          </div>

          <div className="openclaw-card p-6">
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
              "جربت @openclaw. أعتقد أنك ستحبه. يمكنك استخدام iMessage للتحدث معه."
            </p>
            <p className="text-red-500 font-semibold text-sm">@trevorjfr</p>
          </div>
        </div>

        <div className="text-center mt-6 sm:hidden">
          <a href="#" className="text-red-500 hover:text-red-400 text-sm font-semibold inline-flex items-center gap-2">
            عرض الكل
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Quick Start - EXACT terminal style */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 section-chevron">
          البداية السريعة
        </h2>

        <div className="terminal-openclaw">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-500 text-xs sm:text-sm ml-auto">bash</span>
          </div>

          <div className="space-y-2">
            <div className="text-gray-500 text-xs sm:text-sm">
              # macOS, Windows & Linux. التثبيت بأمر واحد. Mollify وكل شيء آخر لك.
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500 shrink-0">$</span>
              <code className="text-white break-all text-xs sm:text-sm" dir="ltr">
                curl -fsSL https://openclaw.ai/install.sh | bash
              </code>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6 text-sm">
          يعمل على macOS و Windows و Linux. التثبيت بأمر واحد Mollify وكل شيء آخر لك.
        </p>
      </section>

      {/* What it Does - EXACT 6-card grid */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 section-chevron">
          ماذا يفعل
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="openclaw-card p-8 text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-lg font-bold mb-3">يعمل على جهازك</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mac، Windows، أو Linux. Anthropic، OpenAI، Google، Ollama - افتراضي أو محلي تماماً.
            </p>
          </div>

          <div className="openclaw-card p-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-bold mb-3">أي تطبيق محادثة</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              تحدث معه على WhatsApp، Telegram، Discord، Slack، Signal، أو iMessage. يعمل في DMs ومحادثات المجموعات.
            </p>
          </div>

          <div className="openclaw-card p-8 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-lg font-bold mb-3">ذاكرة دائمة</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              يتذكرك ويتذكر تفضيلاتك. سياقك. ذاكرتك AI الخاصة.
            </p>
          </div>

          <div className="openclaw-card p-8 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-lg font-bold mb-3">التحكم في المتصفح</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              يقرأ صفحات الويب، يملأ النماذج، ويستخرج البيانات من أي موقع.
            </p>
          </div>

          <div className="openclaw-card p-8 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-bold mb-3">وصول كامل للنظام</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              يشغل أوامر shell، ينفذ الأوامر، يكتب الكود - جهازك بالكامل.
            </p>
          </div>

          <div className="openclaw-card p-8 text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-lg font-bold mb-3">Skills ومكونات إضافية</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              مجتمع نشط يبني skills. يمكن كتابة المكونات الإضافية الخاصة بك.
            </p>
          </div>
        </div>
      </section>

      {/* Works With Everything */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 section-chevron">
          يعمل مع كل شيء
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['WhatsApp', 'Telegram', 'Discord', 'Slack', 'Signal', 'iMessage', 'GPT', 'Spotify', 'Hue', 'Obsidian', 'Twitter', 'Browser', 'Gmail', 'GitHub'].map(app => (
            <div key={app} className="openclaw-card px-4 py-2 text-sm font-semibold text-gray-300">
              {app}
            </div>
          ))}
        </div>

        <div className="text-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
          <a href="#" className="text-red-500 hover:text-red-400 font-semibold text-sm inline-flex items-center gap-2">
            عرض جميع التكاملات +50
            <span>→</span>
          </a>
          <a href="#" className="text-red-500 hover:text-red-400 font-semibold text-sm inline-flex items-center gap-2">
            شاهد ما يبنيه الناس
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Featured In */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 section-chevron">
          مميز في
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="openclaw-card p-8">
            <div className="text-4xl mb-4">🍎</div>
            <h3 className="text-xl font-bold mb-3">MacStories</h3>
            <p className="text-gray-400 italic mb-4 leading-relaxed">
              "OpenClaw أظهر لي مستقبل المساعدين الشخصيين كما يبدو."
            </p>
            <p className="text-red-500 font-semibold">Federico Viticci</p>
          </div>

          <div className="openclaw-card p-8">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-3">StarryHope</h3>
            <p className="text-gray-400 italic mb-4 leading-relaxed">
              "The Lobster Takeover: لماذا يشتري المطورون Mac Minis ليديروا وكلاء AI الخاصين بهم"
            </p>
            <p className="text-red-500 font-semibold">Jim Mendenhall</p>
          </div>
        </div>
      </section>

      {/* Community Links - 4-grid */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <a href="#" className="openclaw-card p-6 text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold">Discord</h3>
          </a>

          <a href="#" className="openclaw-card p-6 text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-bold">الوثائق</h3>
          </a>

          <a href="#" className="openclaw-card p-6 text-center">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="font-bold">GitHub</h3>
          </a>

          <a href="#" className="openclaw-card p-6 text-center">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="font-bold">ClawHub</h3>
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 section-chevron inline-block">
          ابقَ على اطلاع
        </h2>
        <p className="text-gray-400 mb-10">
          احصل على تحديثات حول الميزات الجديدة، التكاملات، والحكمة الذكية. لا بريد عشوائي، إلغاء الاشتراك في أي وقت.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors">
            اشترك →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-red-500 hover:text-red-400">المدونة</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="text-red-500 hover:text-red-400">عرض</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="text-red-500 hover:text-red-400">Shoutout</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="text-red-500 hover:text-red-400">التكاملات</a>
          </div>

          <p className="text-center text-gray-500 text-sm">
            بُني بواسطة المجتمع العربي • مفتوح المصدر مع <span className="text-red-500">❤️</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
