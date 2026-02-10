---
title: "كيفية تثبيت OpenClaw على خادم VPS"
date: "2026-02-10"
excerpt: "دليل شامل لتثبيت وتشغيل OpenClaw على خادم VPS باستخدام Docker مع الاحتفاظ بالبيانات والعمل على مدار الساعة"
author: "فريق OpenClaw العربي"
tags: ["openclaw", "vps", "docker", "تثبيت", "استضافة"]
image: "/images/blog/openclaw-vps.jpg"
---

# كيفية تثبيت OpenClaw على خادم VPS

هل تريد تشغيل OpenClaw على مدار الساعة دون الحاجة إلى إبقاء جهاز الكمبيوتر الخاص بك مفتوحًا؟ الحل هو استضافة OpenClaw على خادم VPS (Virtual Private Server). في هذا الدليل، سنشرح كيفية تثبيت OpenClaw على VPS باستخدام Docker.

## لماذا VPS؟

### المزايا

- **العمل على مدار الساعة**: OpenClaw يعمل 24/7 دون انقطاع
- **التكلفة المنخفضة**: خوادم VPS تبدأ من ~5 دولارات شهريًا
- **الأداء المستقر**: موارد مخصصة وأداء موثوق
- **الوصول من أي مكان**: الوصول إلى OpenClaw من أي جهاز

### مقدمو الخدمات الموصى بهم

- **Hetzner**: الأفضل للسعر (€4-5/شهر)
- **DigitalOcean**: واجهة سهلة الاستخدام
- **Linode**: أداء موثوق
- **Vultr**: شبكة عالمية

## المتطلبات

قبل البدء، تأكد من توفر:

1. **خادم VPS** مع Ubuntu 22.04 أو Debian 12
2. **الوصول عبر SSH** كمستخدم root
3. **عنوان IP عام** للخادم
4. **20 دقيقة** من وقتك
5. **معرفة أساسية** بـ SSH وسطر الأوامر

## الخطوة 1: الاتصال بالخادم

أولاً، اتصل بخادم VPS الخاص بك عبر SSH:

```bash
ssh root@YOUR_VPS_IP
```

استبدل `YOUR_VPS_IP` بعنوان IP الفعلي لخادمك.

## الخطوة 2: تثبيت Docker

Docker هو نظام لتشغيل التطبيقات في حاويات معزولة. نحتاج إلى تثبيته أولاً:

```bash
# تحديث قائمة الحزم
apt-get update

# تثبيت الأدوات الأساسية
apt-get install -y git curl ca-certificates

# تثبيت Docker
curl -fsSL https://get.docker.com | sh
```

### التحقق من التثبيت

تأكد من نجاح تثبيت Docker:

```bash
docker --version
docker compose version
```

يجب أن ترى رقم الإصدار لكل منهما.

## الخطوة 3: استنساخ مستودع OpenClaw

الآن قم بتنزيل الكود المصدري لـ OpenClaw:

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
```

## الخطوة 4: إنشاء المجلدات الدائمة

البيانات المهمة يجب أن تبقى محفوظة حتى بعد إعادة تشغيل الحاويات:

```bash
# إنشاء المجلد الرئيسي
mkdir -p /root/.openclaw/workspace

# تعيين الأذونات الصحيحة (المستخدم داخل الحاوية هو uid 1000)
chown -R 1000:1000 /root/.openclaw
```

### ماذا يتم حفظه؟

| المكون | الموقع | ما يحتويه |
|--------|---------|-----------|
| **إعدادات Gateway** | `/root/.openclaw/` | `openclaw.json` والرموز |
| **مصادقة النماذج** | `/root/.openclaw/` | OAuth tokens، مفاتيح API |
| **إعدادات المهارات** | `/root/.openclaw/skills/` | حالة المهارات |
| **مساحة عمل الوكيل** | `/root/.openclaw/workspace/` | الكود والملفات |

## الخطوة 5: إعداد متغيرات البيئة

أنشئ ملف `.env` في مجلد المستودع:

```bash
nano .env
```

أضف المحتوى التالي:

```bash
OPENCLAW_IMAGE=openclaw:latest
OPENCLAW_GATEWAY_TOKEN=your-secure-token-here
OPENCLAW_GATEWAY_BIND=lan
OPENCLAW_GATEWAY_PORT=18789

OPENCLAW_CONFIG_DIR=/root/.openclaw
OPENCLAW_WORKSPACE_DIR=/root/.openclaw/workspace

GOG_KEYRING_PASSWORD=your-keyring-password-here
XDG_CONFIG_HOME=/home/node/.openclaw
```

### توليد رمز آمن

استخدم هذا الأمر لتوليد رمز عشوائي آمن:

```bash
openssl rand -hex 32
```

انسخ الناتج واستخدمه كقيمة لـ `OPENCLAW_GATEWAY_TOKEN`.

⚠️ **مهم**: لا تشارك هذا الملف أو ترفعه إلى Git!

## الخطوة 6: إعداد Docker Compose

أنشئ ملف `docker-compose.yml`:

```bash
nano docker-compose.yml
```

أضف التكوين التالي:

```yaml
services:
  openclaw-gateway:
    image: ${OPENCLAW_IMAGE}
    build: .
    restart: unless-stopped
    env_file:
      - .env
    environment:
      - HOME=/home/node
      - NODE_ENV=production
      - TERM=xterm-256color
      - OPENCLAW_GATEWAY_BIND=${OPENCLAW_GATEWAY_BIND}
      - OPENCLAW_GATEWAY_PORT=${OPENCLAW_GATEWAY_PORT}
      - OPENCLAW_GATEWAY_TOKEN=${OPENCLAW_GATEWAY_TOKEN}
      - GOG_KEYRING_PASSWORD=${GOG_KEYRING_PASSWORD}
      - XDG_CONFIG_HOME=${XDG_CONFIG_HOME}
    volumes:
      - ${OPENCLAW_CONFIG_DIR}:/home/node/.openclaw
      - ${OPENCLAW_WORKSPACE_DIR}:/home/node/.openclaw/workspace
    ports:
      # الوصول عبر SSH tunnel (موصى به)
      - "127.0.0.1:${OPENCLAW_GATEWAY_PORT}:18789"
    command:
      [
        "node",
        "dist/index.js",
        "gateway",
        "--bind",
        "${OPENCLAW_GATEWAY_BIND}",
        "--port",
        "${OPENCLAW_GATEWAY_PORT}",
        "--allow-unconfigured",
      ]
```

## الخطوة 7: تخصيص Dockerfile (اختياري)

إذا كنت تحتاج إلى أدوات إضافية (مثل Gmail CLI، WhatsApp CLI)، قم بتعديل `Dockerfile`:

```bash
nano Dockerfile
```

أضف الأدوات التي تحتاجها:

```dockerfile
FROM node:22-bookworm

# تثبيت أدوات النظام الأساسية
RUN apt-get update && apt-get install -y socat && rm -rf /var/lib/apt/lists/*

# مثال: تثبيت Gmail CLI (gog)
RUN curl -L https://github.com/steipete/gog/releases/latest/download/gog_Linux_x86_64.tar.gz \
  | tar -xz -C /usr/local/bin && chmod +x /usr/local/bin/gog

# مثال: تثبيت WhatsApp CLI (wacli)
RUN curl -L https://github.com/steipete/wacli/releases/latest/download/wacli_Linux_x86_64.tar.gz \
  | tar -xz -C /usr/local/bin && chmod +x /usr/local/bin/wacli

# أضف المزيد من الأدوات هنا حسب الحاجة

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY ui/package.json ./ui/package.json
COPY scripts ./scripts

RUN corepack enable
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build
RUN pnpm ui:install
RUN pnpm ui:build

ENV NODE_ENV=production

CMD ["node","dist/index.js"]
```

⚠️ **نصيحة مهمة**: كل الأدوات الثنائية يجب أن تُثبت في وقت البناء (build time)، وليس في وقت التشغيل. أي أداة تثبتها داخل حاوية قيد التشغيل ستُفقد عند إعادة التشغيل!

## الخطوة 8: بناء وتشغيل OpenClaw

الآن حان وقت بناء الصورة وتشغيل OpenClaw:

```bash
# بناء صورة Docker
docker compose build

# تشغيل OpenClaw في الخلفية
docker compose up -d openclaw-gateway
```

### التحقق من الأدوات المثبتة

تأكد من أن الأدوات متاحة داخل الحاوية:

```bash
docker compose exec openclaw-gateway which gog
docker compose exec openclaw-gateway which wacli
```

يجب أن ترى المسار لكل أداة:

```
/usr/local/bin/gog
/usr/local/bin/wacli
```

## الخطوة 9: التحقق من التشغيل

راجع سجلات (logs) الخادم للتأكد من نجاح التشغيل:

```bash
docker compose logs -f openclaw-gateway
```

إذا رأيت هذه الرسالة، فكل شيء يعمل:

```
[gateway] listening on ws://0.0.0.0:18789
```

اضغط `Ctrl+C` للخروج من عرض السجلات.

## الخطوة 10: الوصول إلى واجهة التحكم

للوصول إلى واجهة التحكم (Control UI) من جهازك المحلي، استخدم SSH tunnel:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@YOUR_VPS_IP
```

الآن افتح متصفحك وانتقل إلى:

```
http://127.0.0.1:18789/
```

### تسجيل الدخول

عند الوصول للمرة الأولى، سيُطلب منك رمز Gateway. استخدم القيمة التي وضعتها في `OPENCLAW_GATEWAY_TOKEN` في ملف `.env`.

## إدارة OpenClaw على VPS

### إيقاف الخادم

```bash
docker compose down
```

### إعادة التشغيل

```bash
docker compose restart openclaw-gateway
```

### عرض السجلات

```bash
docker compose logs -f openclaw-gateway
```

### تحديث OpenClaw

عندما يتوفر إصدار جديد:

```bash
# الانتقال إلى مجلد المستودع
cd /root/openclaw

# سحب آخر التحديثات
git pull

# إعادة البناء
docker compose build

# إعادة التشغيل
docker compose up -d openclaw-gateway
```

## حل المشكلات الشائعة

### مشكلة: "Permission denied"

إذا واجهت مشاكل في الأذونات:

```bash
# تصحيح أذونات المجلدات
chown -R 1000:1000 /root/.openclaw
```

### مشكلة: "Port already in use"

إذا كان المنفذ 18789 مستخدمًا:

```bash
# تحقق من العمليات المستخدمة للمنفذ
lsof -i :18789

# أو غيّر المنفذ في ملف .env
nano .env
# عدّل OPENCLAW_GATEWAY_PORT إلى قيمة أخرى (مثل 18790)
```

### مشكلة: الحاوية تتوقف بشكل متكرر

راجع السجلات للتعرف على السبب:

```bash
docker compose logs openclaw-gateway
```

الأسباب الشائعة:
- نفاد الذاكرة (RAM)
- خطأ في التكوين
- أدوات مفقودة

### مشكلة: لا يمكن الوصول إلى واجهة التحكم

تأكد من:

1. SSH tunnel يعمل
2. رمز Gateway صحيح
3. المنفذ 18789 غير محجوب بواسطة firewall

```bash
# التحقق من حالة Docker
docker compose ps

# التحقق من الاتصال
curl http://127.0.0.1:18789/
```

## الأمان والأداء

### نصائح الأمان

1. **لا تكشف المنفذ 18789 مباشرة للإنترنت**: استخدم SSH tunnel دائمًا
2. **استخدم رمز قوي**: 32 حرفًا على الأقل، عشوائي
3. **حدّث النظام بانتظام**: `apt-get update && apt-get upgrade`
4. **استخدم مفاتيح SSH**: بدلاً من كلمات المرور

### تحسين الأداء

إذا كنت تواجه بطءًا:

```bash
# زيادة حدود الذاكرة في docker-compose.yml
services:
  openclaw-gateway:
    # أضف هذه الأسطر
    deploy:
      resources:
        limits:
          memory: 2G
        reservations:
          memory: 1G
```

## الخطوات التالية

بعد تثبيت OpenClaw بنجاح على VPS، يمكنك:

1. **إضافة قنوات اتصال**: Telegram، WhatsApp، Discord
2. **تثبيت المهارات**: من [ClawdHub](https://clawdhub.com)
3. **ربط الأجهزة**: iOS أو Android nodes
4. **إعداد المهام المجدولة**: باستخدام cron jobs

## الخلاصة

تهانينا! لديك الآن OpenClaw يعمل على مدار الساعة على خادم VPS. هذا الإعداد:

✅ **دائم**: البيانات محفوظة على الخادم  
✅ **موثوق**: يعمل 24/7 دون انقطاع  
✅ **قابل للتطوير**: سهل الترقية والتحديث  
✅ **آمن**: الوصول عبر SSH tunnel فقط

### الموارد المفيدة

- [وثائق OpenClaw الرسمية](https://docs.openclaw.ai)
- [مستودع GitHub](https://github.com/openclaw/openclaw)
- [مجتمع Discord](https://discord.com/invite/clawd)
- [دليل Docker الكامل](/install/docker)

إذا واجهت أي مشكلة، تحقق من السجلات أولاً باستخدام `docker compose logs -f`، أو اسأل في مجتمع Discord!

---

*آخر تحديث: 10 فبراير 2026*
