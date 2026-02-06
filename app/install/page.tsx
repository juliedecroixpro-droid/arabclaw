import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تثبيت OpenClaw',
  description: 'دليل التثبيت الكامل لـ OpenClaw بالعربية - ثلاث طرق سهلة',
}

export default function InstallPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        تثبيت OpenClaw
      </h1>
      
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16">
        اختر الطريقة الأنسب لك - كلها سهلة وسريعة! ⚡
      </p>

      {/* Method 1: Automatic Script */}
      <section className="mb-16">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-2 border-green-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">🚀</div>
            <div>
              <h2 className="text-3xl font-bold text-green-900 dark:text-green-100">
                الطريقة الأولى: التثبيت التلقائي (موصى به)
              </h2>
              <p className="text-green-700 dark:text-green-300">الأسهل والأسرع - أمر واحد فقط!</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
            <code className="text-green-400 font-mono text-lg">
              curl -fsSL https://openclaw.com/install.sh | bash
            </code>
          </div>

          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <h3 className="font-bold text-xl mb-4">الخطوات:</h3>
            <ol className="space-y-3 mr-6">
              <li className="flex gap-3">
                <span className="font-bold text-green-600">1.</span>
                <span>افتح Terminal (الطرفية)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">2.</span>
                <span>انسخ الأمر أعلاه والصقه</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">3.</span>
                <span>اضغط Enter وانتظر حتى ينتهي التثبيت</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">4.</span>
                <span>جاهز! اكتب <code className="px-2 py-1 bg-gray-800 rounded text-green-400">openclaw</code> للبدء</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Method 2: npm */}
      <section className="mb-16">
        <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">📦</div>
            <div>
              <h2 className="text-3xl font-bold">الطريقة الثانية: عبر npm</h2>
              <p className="text-gray-600 dark:text-gray-400">للذين يفضلون Node.js</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
            <code className="text-blue-400 font-mono text-lg">
              npm install -g openclaw
            </code>
          </div>

          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <h3 className="font-bold text-xl mb-4">المتطلبات:</h3>
            <ul className="space-y-2 mr-6">
              <li className="flex gap-3">
                <span>•</span>
                <span>Node.js 18 أو أحدث</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>npm أو pnpm أو yarn</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Method 3: Docker */}
      <section className="mb-16">
        <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">🐳</div>
            <div>
              <h2 className="text-3xl font-bold">الطريقة الثالثة: عبر Docker</h2>
              <p className="text-gray-600 dark:text-gray-400">للعزل الكامل والنشر السريع</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
            <code className="text-purple-400 font-mono text-lg block mb-2">
              docker pull openclaw/openclaw:latest
            </code>
            <code className="text-purple-400 font-mono text-lg block">
              docker run -it openclaw/openclaw
            </code>
          </div>

          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <h3 className="font-bold text-xl mb-4">المتطلبات:</h3>
            <ul className="space-y-2 mr-6">
              <li className="flex gap-3">
                <span>•</span>
                <span>Docker Desktop مثبت</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-16">
        <div className="p-8 rounded-2xl bg-yellow-50 dark:bg-yellow-950 border-2 border-yellow-300 dark:border-yellow-700">
          <h2 className="text-3xl font-bold text-yellow-900 dark:text-yellow-100 mb-6 flex items-center gap-3">
            <span>⚠️</span>
            حل المشاكل الشائعة
          </h2>

          <div className="space-y-6 text-gray-800 dark:text-gray-200">
            <div>
              <h3 className="font-bold text-xl mb-2">المشكلة: "command not found"</h3>
              <p className="mb-2">الحل:</p>
              <ul className="mr-6 space-y-1">
                <li>• أعد فتح Terminal</li>
                <li>• تأكد من إضافة OpenClaw للـ PATH</li>
                <li>• جرب: <code className="px-2 py-1 bg-gray-800 rounded text-sm">source ~/.bashrc</code></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">المشكلة: أخطاء في الصلاحيات</h3>
              <p className="mb-2">الحل:</p>
              <ul className="mr-6 space-y-1">
                <li>• استخدم <code className="px-2 py-1 bg-gray-800 rounded text-sm">sudo</code> إذا لزم الأمر</li>
                <li>• أو ثبّت في مجلد المستخدم بدلاً من النظام</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">المشكلة: بطء في التثبيت</h3>
              <p className="mb-2">الحل:</p>
              <ul className="mr-6 space-y-1">
                <li>• تأكد من اتصال الإنترنت</li>
                <li>• جرب mirror آخر إذا كنت تستخدم npm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="text-center py-12">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
          <h2 className="text-3xl font-bold text-white mb-4">نجح التثبيت؟ 🎉</h2>
          <p className="text-xl text-white/90 mb-6">
            رائع! الآن اذهب للتوثيق لتتعلم كيف تستخدم OpenClaw
          </p>
          <a 
            href="https://docs.arabclaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            اذهب للتوثيق
          </a>
        </div>
      </section>
    </div>
  )
}
