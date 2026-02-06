import Link from 'next/link'
import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="flex justify-center mb-8">
          <img 
            src="/mascot.jpg" 
            alt="OpenClaw Mascot" 
            className="w-32 h-32 rounded-full shadow-2xl ring-4 ring-blue-600/20"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          OpenClaw بالعربية
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
          أسهل طريقة لاستخدام الذكاء الاصطناعي
        </p>
        
        <Link 
          href="/install"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all"
        >
          ابدأ الآن
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="⚡"
            title="تثبيت سهل"
            description="ثبّت OpenClaw في دقائق معدودة بأمر واحد فقط. لا تعقيدات، لا صداع."
          />
          <FeatureCard
            icon="🎯"
            title="Skills بالعربية"
            description="مكتبة ضخمة من الـ Skills المصممة خصيصاً للمستخدمين العرب."
          />
          <FeatureCard
            icon="🤝"
            title="مجتمع عربي"
            description="انضم لمجتمع نابض بالحياة من المطورين والمستخدمين العرب."
          />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">روابط سريعة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            href="https://docs.arabclaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">التوثيق</h3>
            <p className="text-blue-700 dark:text-blue-300">دليل شامل لكل ما تحتاج معرفته</p>
          </a>

          <a 
            href="https://marketplace.arabclaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">Marketplace</h3>
            <p className="text-purple-700 dark:text-purple-300">اكتشف Skills جديدة وقوية</p>
          </a>

          <Link 
            href="/blog"
            className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border border-pink-200 dark:border-pink-800 hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-pink-900 dark:text-pink-100 mb-2">المدونة</h3>
            <p className="text-pink-700 dark:text-pink-300">نصائح، دروس، وآخر الأخبار</p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600">
          <h2 className="text-4xl font-bold text-white mb-6">
            جاهز للبدء؟
          </h2>
          <p className="text-xl text-white/90 mb-8">
            انضم لآلاف المستخدمين العرب الذين يستخدمون OpenClaw يومياً
          </p>
          <Link 
            href="/install"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            ابدأ التثبيت الآن
          </Link>
        </div>
      </section>
    </div>
  )
}
