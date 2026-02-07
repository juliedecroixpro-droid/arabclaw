---
title: "بناء أول Skill خاص بك - دليل عملي"
excerpt: "تعلم كيف تبني Skill مخصص لـ OpenClaw خطوة بخطوة"
date: "2026-02-03"
author: "فريق ArabClaw"
---

# بناء أول Skill خاص بك - دليل عملي

Skills هي ما يجعل OpenClaw قوياً. تعلم كيف تبني skill مخصص لاحتياجاتك!

## ما هو Skill؟ 🤔

**Skill** = قدرة إضافية تضيفها لـ OpenClaw.

**أمثلة:**
- البحث في الإنترنت
- إرسال emails
- التحكم بالمتصفح
- نشر على Twitter
- قراءة قواعد البيانات

## هيكل Skill أساسي

كل skill يحتوي:

```
my-skill/
├── SKILL.md         # التوثيق (إلزامي)
├── package.json     # معلومات Skill
├── bin/            # سكريبتات قابلة للتنفيذ
│   └── my-tool
└── README.md       # شرح للمستخدمين
```

## مثال عملي: Skill "المفكرة" 📝

سنبني skill بسيط لحفظ ملاحظات.

### الخطوة 1: إنشاء المجلد

```bash
mkdir my-notebook-skill
cd my-notebook-skill
```

### الخطوة 2: إنشاء `package.json`

```bash
npm init -y
```

عدّل `package.json`:

```json
{
  "name": "@arabclaw/skill-notebook",
  "version": "1.0.0",
  "description": "Skill لحفظ وقراءة ملاحظات",
  "bin": {
    "notebook": "./bin/notebook"
  },
  "keywords": ["openclaw", "skill", "notes", "arabic"],
  "author": "Your Name",
  "license": "MIT"
}
```

### الخطوة 3: إنشاء السكريبت

أنشئ `bin/notebook`:

```bash
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const NOTES_FILE = path.join(process.env.HOME, '.openclaw', 'notes.json');

// تحميل الملاحظات
function loadNotes() {
  if (!fs.existsSync(NOTES_FILE)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(NOTES_FILE, 'utf8'));
}

// حفظ الملاحظات
function saveNotes(notes) {
  const dir = path.dirname(NOTES_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

// الأوامر
const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
  case 'add':
    const noteText = args.join(' ');
    const notes = loadNotes();
    notes.push({
      id: Date.now(),
      text: noteText,
      date: new Date().toISOString()
    });
    saveNotes(notes);
    console.log('✅ تم حفظ الملاحظة');
    break;

  case 'list':
    const allNotes = loadNotes();
    if (allNotes.length === 0) {
      console.log('لا توجد ملاحظات');
    } else {
      allNotes.forEach((note, i) => {
        console.log(`${i + 1}. ${note.text}`);
        console.log(`   📅 ${new Date(note.date).toLocaleDateString('ar')}`);
      });
    }
    break;

  case 'delete':
    const id = parseInt(args[0]) - 1;
    let allNotesDelete = loadNotes();
    if (id >= 0 && id < allNotesDelete.length) {
      allNotesDelete.splice(id, 1);
      saveNotes(allNotesDelete);
      console.log('✅ تم حذف الملاحظة');
    } else {
      console.log('❌ رقم ملاحظة غير صحيح');
    }
    break;

  default:
    console.log(`
استخدام:
  notebook add <نص الملاحظة>    # إضافة ملاحظة
  notebook list                  # عرض كل الملاحظات
  notebook delete <رقم>          # حذف ملاحظة
    `);
}
```

اجعله قابلاً للتنفيذ:

```bash
chmod +x bin/notebook
```

### الخطوة 4: إنشاء `SKILL.md`

```markdown
# Skill: Notebook

حفظ وإدارة ملاحظات سريعة.

## Commands

### إضافة ملاحظة
\`\`\`bash
notebook add "اشتري حليب"
\`\`\`

### عرض الملاحظات
\`\`\`bash
notebook list
\`\`\`

### حذف ملاحظة
\`\`\`bash
notebook delete 1
\`\`\`

## Usage with OpenClaw

يمكن لـ OpenClaw استخدام هذا Skill عندما تطلب:
- "احفظ ملاحظة: ..."
- "ما هي ملاحظاتي؟"
- "احذف الملاحظة الأولى"

OpenClaw سيتعرف تلقائياً على الأمر المناسب.
```

### الخطوة 5: التثبيت المحلي

```bash
npm link
```

الآن يمكنك استخدام الأمر:

```bash
notebook add "أول ملاحظة!"
notebook list
```

### الخطوة 6: الاختبار مع OpenClaw

افتح OpenClaw:

```bash
openclaw
```

جرب:

```
أنت: احفظ ملاحظة: اتصل بأحمد غداً

OpenClaw: [يشغل notebook add ...]
✅ تم حفظ الملاحظة

أنت: ما هي ملاحظاتي؟

OpenClaw: [يشغل notebook list]
لديك ملاحظة واحدة:
1. اتصل بأحمد غداً
   📅 7 فبراير 2026
```

## تحسينات متقدمة 🚀

### 1. إضافة Tags

عدّل السكريبت لدعم tags:

```javascript
// إضافة مع tags
case 'add':
  const text = args.join(' ');
  const tags = text.match(/#\w+/g) || [];
  notes.push({
    id: Date.now(),
    text: text,
    tags: tags,
    date: new Date().toISOString()
  });
  saveNotes(notes);
  break;

// بحث حسب tag
case 'search':
  const tag = args[0];
  const filtered = loadNotes().filter(n => 
    n.tags.includes(tag)
  );
  // عرض النتائج...
  break;
```

**استخدام:**

```bash
notebook add "اشتري حليب #تسوق"
notebook search "#تسوق"
```

### 2. أولويات (Priority)

```javascript
notes.push({
  id: Date.now(),
  text: noteText,
  priority: args.includes('--urgent') ? 'high' : 'normal',
  date: new Date().toISOString()
});
```

**استخدام:**

```bash
notebook add "اتصل بالطبيب --urgent"
```

### 3. تذكيرات (Reminders)

دمج مع `cron`:

```javascript
case 'remind':
  const reminderText = args.slice(0, -1).join(' ');
  const when = args[args.length - 1]; // "tomorrow", "3pm", etc.
  
  // إضافة cron job عبر OpenClaw API
  // (يتطلب integration مع cron tool)
  break;
```

## نشر Skill 📦

### على npm

```bash
npm login
npm publish --access public
```

### على ClawdHub

```bash
# ثبّت ClawdHub CLI
npm install -g clawdhub

# login
clawdhub login

# نشر
clawdhub publish
```

## أمثلة Skills للإلهام

### Skill بسيط: Fortune (حظك اليوم)

```bash
#!/usr/bin/env node

const fortunes = [
  "اليوم يوم رائع للبدايات الجديدة! 🌟",
  "انتبه لصحتك اليوم 💪",
  "فرصة عمل قد تأتيك قريباً 💼",
  "وقت رائع للتعلم 📚"
];

const random = fortunes[Math.floor(Math.random() * fortunes.length)];
console.log(random);
```

### Skill متوسط: Weather بسيط

```bash
#!/usr/bin/env node

const https = require('https');
const city = process.argv[2] || 'Cairo';

https.get(`https://wttr.in/${city}?format=j1`, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const weather = JSON.parse(data);
    const current = weather.current_condition[0];
    console.log(`🌡️  ${current.temp_C}°C`);
    console.log(`☁️  ${current.weatherDesc[0].value}`);
  });
});
```

### Skill متقدم: Database Query

```javascript
#!/usr/bin/env node

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydata.db');

const query = process.argv.slice(2).join(' ');

db.all(query, [], (err, rows) => {
  if (err) {
    console.error('❌ خطأ:', err.message);
    return;
  }
  console.table(rows);
});
```

## نصائح لـ Skills ناجحة 💡

### 1. اجعله بسيطاً

Skill جيد = شيء واحد يفعله بشكل ممتاز.

### 2. وثّق جيداً

`SKILL.md` يجب أن يشرح:
- ماذا يفعل Skill
- كيفية استخدامه
- أمثلة واضحة

### 3. عالج الأخطاء

```javascript
try {
  // code...
} catch (error) {
  console.error('❌ خطأ:', error.message);
  process.exit(1);
}
```

### 4. دعم العربية

```javascript
// استخدم UTF-8
process.stdout.write('\ufeff'); // BOM للعربية

// رسائل بالعربية
console.log('✅ تم بنجاح');
console.log('❌ فشل');
```

### 5. اختبر كثيراً

```bash
# اختبار يدوي
notebook add "test"
notebook list
notebook delete 1

# اختبار مع OpenClaw
openclaw chat "احفظ ملاحظة: اختبار"
```

## الخلاصة

بناء Skill لـ OpenClaw سهل:

1. ✅ أنشئ مجلد + `package.json`
2. ✅ اكتب سكريبت في `bin/`
3. ✅ وثّق في `SKILL.md`
4. ✅ ثبّت محلياً (`npm link`)
5. ✅ اختبر مع OpenClaw
6. ✅ انشر على npm/ClawdHub

**الآن دورك!** ما هو Skill الذي ستبنيه؟

---

**أفكار Skills:**
- مدير كلمات سر
- tracker عادات يومية
- مترجم سريع
- تحليل ملفات CSV
- integration مع API معين

**شارك skill الخاص بك** على [ClawdHub](https://clawdhub.com) ليستفيد المجتمع! 🚀
