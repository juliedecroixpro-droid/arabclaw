import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-lg border-4 border-blue-200">
            <img 
              src="/mascot.jpg" 
              alt="ArabClaw Mascot" 
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Titre */}
        <h1 className="text-6xl font-bold text-gray-900 mb-8">
          ArabClaw
        </h1>

        {/* Description */}
        <p className="text-2xl text-gray-600 leading-relaxed mb-4" dir="rtl">
          بوابة عبر أنظمة التشغيل لوكلاء الذكاء الاصطناعي عبر WhatsApp و Telegram و Discord و iMessage والمزيد
        </p>

        {/* Citation */}
        <p className="text-lg text-gray-400 italic mb-16" dir="rtl">
          "EXFOLIATE! EXFOLIATE!" — جراد البحر الفخري على الأربح
        </p>

        {/* Section "ما هو OpenClaw?" */}
        <div className="text-right mb-16" dir="rtl">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ما هو OpenClaw؟
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              OpenClaw هو إطار عمل مفتوح المصدر يجول Claude Sonnet وغيره من نماذج اللغة الكبيرة إلى وكلاء ذكاء اصطناعي شخصيين يمكنهم التفاعل عبر منصات المراسلة المفضلة لديك.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              يعمل OpenClaw كجواية بين عالم الذكاء الاصطناعي وتطبيقات المراسلة اليومية، مما يتيح لك التواصل مع وكيلك الذكي من أي مكان.
            </p>
          </div>
        </div>

        {/* Section "هل OpenClaw مجاني؟" */}
        <div className="text-right mb-16" dir="rtl">
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              هل OpenClaw مجاني؟
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              نعم، OpenClaw مفتوح المصدر ومجاني تماماً. ومع ذلك، قد تحتاج إلى دفع تكاليف:
            </p>
            <ul className="text-lg text-gray-700 space-y-2 mr-6">
              <li>• API keys لنماذج الذكاء الاصطناعي (Anthropic، OpenAI)</li>
              <li>• الاستضافة (إذا شغلت على السحابة)</li>
              <li>• بعض خدمات القنوات (WhatsApp Business API)</li>
            </ul>
          </div>
        </div>

        {/* Section "حقيقة ممتعة" */}
        <div className="text-right mb-16" dir="rtl">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              حقيقة ممتعة 🦞
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              تاليعة OpenClaw هو جراد البحر. لماذا؟ لأن الجراد يمسك ويتمسك بالأشياء - تماماً كما يتمسك OpenClaw بسياقك ومحادثاتك. زائد، الجراد رائع.
            </p>
          </div>
        </div>

        {/* Liens rapides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href="https://docs.arabclaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 border-2 border-gray-200 rounded-xl bg-white hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">التوثيق</h3>
            <p className="text-gray-600">دليل شامل لكل ما تحتاج معرفته</p>
          </a>

          <a
            href="https://marketplace.arabclaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 border-2 border-gray-200 rounded-xl bg-white hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Marketplace</h3>
            <p className="text-gray-600">اكتشف Skills جديدة وقوية</p>
          </a>

          <Link
            href="/blog"
            className="p-8 border-2 border-gray-200 rounded-xl bg-white hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">المدونة</h3>
            <p className="text-gray-600">نصائح، دروس، وآخر الأخبار</p>
          </Link>
        </div>

        {/* CTA final */}
        <div className="border-2 border-blue-500 rounded-xl p-12 bg-blue-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-6" dir="rtl">
            جاهز للبدء؟
          </h2>
          <p className="text-xl text-gray-700 mb-8" dir="rtl">
            انضم لآلاف المستخدمين العرب الذين يستخدمون OpenClaw يومياً
          </p>
          <Link
            href="/install"
            className="inline-block px-8 py-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold rounded-lg text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            ابدأ التثبيت الآن
          </Link>
        </div>
      </div>
    </div>
  )
}
