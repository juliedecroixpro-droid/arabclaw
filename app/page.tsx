import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen premium-bg">
      {/* Hero Section with Mascot */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Side - Text Content */}
            <div className="text-center lg:text-right order-2 lg:order-1">
              {/* Main Title */}
              <h1 className="font-arabic-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6 lg:mb-8 leading-tight">
                <span className="block gradient-text">عربكلاو</span>
              </h1>

              {/* Tagline */}
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8" style={{
                background: 'linear-gradient(135deg, #ff4444 0%, #ff6666 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                الذكاء الاصطناعي<br/>الذي يعمل فعلاً
              </p>

              {/* Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-10 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                مساعدك الشخصي الذكي الذي يفهم لهجتك،<br className="hidden sm:block"/>
                يحترم خصوصيتك، ويعمل من أي تطبيق تستخدمه
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <button className="btn-premium text-lg sm:text-xl px-8 py-4">
                  ابدأ الآن مجاناً →
                </button>
                <button className="btn-secondary-premium text-lg sm:text-xl px-8 py-4">
                  شاهد كيف يعمل
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 mt-12 lg:mt-16 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <span>مفتوح المصدر</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <span>خصوصية تامة</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>مجاني للأبد</span>
                </div>
              </div>
            </div>

            {/* Left Side - Mascot */}
            <div className="relative order-1 lg:order-2">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Glow Effect Behind Mascot */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 blur-3xl rounded-full scale-110"></div>
                
                {/* Mascot Image */}
                <div className="relative animate-fadeIn">
                  <Image
                    src="/mascot.jpg"
                    alt="عربكلاو - المساعد الذكي"
                    width={600}
                    height={600}
                    priority
                    className="w-full h-auto logo-float drop-shadow-2xl"
                  />
                </div>

                {/* Floating Bubbles Around Mascot */}
                <div className="absolute -top-4 -right-4 glass-card p-4 animate-fadeIn" style={{animationDelay: '300ms'}}>
                  <p className="text-sm font-semibold whitespace-nowrap">👋 أهلاً!</p>
                </div>
                
                <div className="absolute top-1/3 -left-8 glass-card p-4 animate-fadeIn" style={{animationDelay: '500ms'}}>
                  <p className="text-sm font-semibold whitespace-nowrap">🗣️ بلهجتك</p>
                </div>

                <div className="absolute bottom-1/4 -right-8 glass-card p-4 animate-fadeIn" style={{animationDelay: '700ms'}}>
                  <p className="text-sm font-semibold whitespace-nowrap">🔒 آمن 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 section-title">
          لماذا عربكلاو؟
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {[
            {
              emoji: "🗣️",
              title: "يفهم كل اللهجات",
              description: "مصري، خليجي، مغربي، شامي - يتحدث معك بلهجتك الأم بكل طبيعية"
            },
            {
              emoji: "🔒",
              title: "خصوصيتك أولاً",
              description: "كل شيء يعمل محلياً على جهازك. بياناتك لا تغادر جهازك أبداً"
            },
            {
              emoji: "💬",
              title: "من أي تطبيق",
              description: "واتساب، تيليجرام، ديسكورد - استخدمه من التطبيق المفضل لديك"
            },
            {
              emoji: "🧠",
              title: "ذاكرة ذكية",
              description: "يتذكر محادثاتك وتفضيلاتك ويتعلم منك مع الوقت"
            },
            {
              emoji: "🌐",
              title: "يتصفح الإنترنت",
              description: "يقرأ المواقع، يملأ النماذج، يجمع المعلومات تلقائياً"
            },
            {
              emoji: "⚡",
              title: "Skills عربية",
              description: "مكتبة ضخمة من المهارات المصممة للمستخدم العربي"
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className="glass-card p-8 lg:p-10 group text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {feature.emoji}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 section-title">
          كيف يعمل؟
        </h2>

        <div className="space-y-8 lg:space-y-12">
          {[
            {
              number: "1",
              title: "حمّل وثبّت",
              description: "أمر واحد يضبط كل شيء على Mac أو Windows أو Linux"
            },
            {
              number: "2",
              title: "اختر تطبيقك المفضل",
              description: "ربطه بواتساب، تيليجرام، أو أي تطبيق محادثة تستخدمه"
            },
            {
              number: "3",
              title: "ابدأ الحديث",
              description: "تكلم معه بلهجتك العادية وهو يفهمك ويساعدك"
            }
          ].map((step, i) => (
            <div 
              key={i}
              className="glass-card p-8 lg:p-10 flex flex-col sm:flex-row gap-6 items-start group hover:border-red-500/50 transition-all"
            >
              <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <div className="flex-1 text-center sm:text-right">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Install Command */}
        <div className="mt-16 lg:mt-20">
          <div className="terminal-premium max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-500 text-sm">bash</span>
            </div>
            
            <div className="space-y-3">
              <div className="text-gray-500 text-sm sm:text-base">
                # ثبّت عربكلاو بأمر واحد
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 shrink-0">$</span>
                <code className="text-gray-100 break-all font-mono text-sm sm:text-base" dir="ltr">
                  curl -fsSL https://openclaw.ai/install.sh | bash
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 section-title">
          ماذا يقول المستخدمون
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { text: "كنت أستخدم Claude بسرعة. عربكلاو يفعلها بشكل صحيح ودائم.", author: "أحمد - مطور" },
            { text: "أفضل مساعد AI جربته. يفهم اللهجة المصرية تماماً!", author: "سارة - مهندسة" },
            { text: "الخصوصية والأمان مهمين لي. عربكلاو يعطيني كليهما.", author: "خالد - رائد أعمال" },
            { text: "يوفر لي ساعات من العمل كل أسبوع.", author: "فاطمة - مديرة مشاريع" },
            { text: "مفتوح المصدر ومجاني؟ لا يوجد أفضل من هذا!", author: "عمر - طالب" },
            { text: "التكامل مع واتساب جعله سهل الاستخدام جداً.", author: "ليلى - معلمة" }
          ].map((testimonial, i) => (
            <div 
              key={i}
              className="testimonial-premium group"
            >
              <p className="text-base lg:text-lg text-gray-300 mb-5 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-red-500 font-semibold group-hover:text-red-400 transition-colors">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section with Mascot */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 relative">
              <Image
                src="/mascot.jpg"
                alt="عربكلاو"
                width={128}
                height={128}
                className="w-full h-full object-contain logo-float"
              />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            جاهز للبدء؟
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            انضم لآلاف المستخدمين العرب الذين يستخدمون عربكلاو يومياً
          </p>

          <button className="btn-premium text-xl px-12 py-5 mb-8">
            ابدأ مجاناً الآن →
          </button>

          <p className="text-gray-500">
            مجاني تماماً • مفتوح المصدر • خصوصية كاملة
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Footer Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">المنتج</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">المزايا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">كيف يعمل</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسعار</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التحديثات</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">المطورون</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">الوثائق</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">المساهمة</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">المجتمع</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">المدونة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">المنتدى</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">الشركة</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تواصل معنا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الخصوصية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الشروط</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-right">
              © 2026 عربكلاو • صُنع بحب للمستخدم العربي ❤️
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
