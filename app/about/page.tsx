import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'من نحن',
  description: 'تعرّف على ArabClaw - مشروعنا لجعل OpenClaw متاحاً للمستخدمين العرب',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-16">
        <img 
          src="/mascot.jpg" 
          alt="ArabClaw Mascot" 
          className="w-40 h-40 rounded-full shadow-2xl ring-4 ring-blue-600/20 mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          من نحن
        </h1>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">ما هو ArabClaw؟</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            ArabClaw هو المركز الرئيسي للمحتوى العربي حول OpenClaw - أقوى أداة لاستخدام الذكاء الاصطناعي من سطر الأوامر.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            نحن نؤمن بأن الذكاء الاصطناعي يجب أن يكون متاحاً للجميع، بلغتهم الأم. لذلك أنشأنا ArabClaw - لنجعل OpenClaw سهل الاستخدام والفهم للمستخدمين العرب.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">مهمتنا 🎯</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
              جعل OpenClaw متاحاً وسهل الاستخدام لكل مستخدم عربي
            </p>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200 mr-6">
              <li className="flex gap-3">
                <span className="text-blue-600">📚</span>
                <span>توفير توثيق كامل بالعربية</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">🎓</span>
                <span>دروس وشروحات بالعربية</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">🤝</span>
                <span>بناء مجتمع عربي نابض بالحياة</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">🛠️</span>
                <span>تطوير Skills مصممة للمستخدمين العرب</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">ما نقدمه 🌟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>📖</span>
                توثيق شامل
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                دليل كامل بالعربية لكل ميزات OpenClaw، من التثبيت حتى الاحتراف
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>🛒</span>
                Marketplace عربي
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                اكتشف وشارك Skills مصممة خصيصاً للمستخدمين العرب
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>📝</span>
                مدونة نشطة
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                مقالات، دروس، نصائح، وآخر الأخبار حول OpenClaw
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>💬</span>
                مجتمع داعم
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                انضم لمجتمع من المستخدمين والمطورين العرب المتحمسين
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">انضم إلينا 🚀</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            ArabClaw مشروع مفتوح المصدر ومجاني بالكامل. نرحب بالمساهمات من الجميع!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold rounded-full text-center hover:shadow-xl hover:scale-105 transition-all"
            >
              GitHub →
            </a>
            <a 
              href="https://discord.gg/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-center hover:shadow-xl hover:scale-105 transition-all"
            >
              Discord →
            </a>
          </div>
        </section>

        <section className="text-center py-12">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800">
            <p className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
              معاً نجعل الذكاء الاصطناعي متاحاً للجميع 🌍
            </p>
            <p className="text-lg text-green-700 dark:text-green-300">
              شكراً لكونك جزءاً من هذه الرحلة
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
