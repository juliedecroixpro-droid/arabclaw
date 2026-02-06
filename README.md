# ArabClaw - OpenClaw بالعربية 🚀

Site principal arabophone pour OpenClaw - simple, beau, efficace, SEO-friendly.

## 🌟 Structure du Site

### Pages principales
- **/** - Page d'accueil avec hero, features, et liens rapides
- **/install** - Guide d'installation complet en arabe
- **/blog** - Liste des articles de blog
- **/blog/[slug]** - Pages d'articles individuels (MDX)
- **/about** - À propos d'ArabClaw

### Components
- `Navbar` - Navigation principale avec logo
- `Footer` - Footer avec liens communauté
- `FeatureCard` - Cartes de features
- `BlogCard` - Cartes d'articles de blog

### Blog (MDX)
Le blog utilise MDX pour les articles. Les fichiers sont dans `/content/blog/`:
- `installation-guide.mdx` - Guide d'installation 5 minutes
- `best-skills-arabic.mdx` - Top Skills pour utilisateurs arabes
- `beginners-guide.mdx` - Guide du débutant

## 🎨 Design

- **Gradient**: Bleu/violet (comme docs.openclaw.com)
- **Direction**: RTL (right-to-left) complet
- **Police**: Cairo (Google Fonts)
- **Dark mode**: Activé par défaut
- **Framework CSS**: Tailwind CSS 4
- **Responsive**: Mobile-first design

## 🔧 Stack Technique

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Content**: MDX pour le blog
- **Fonts**: Cairo (Google Fonts)
- **Build**: Turbopack

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Développement
npm run dev

# Build production
npm run build

# Démarrer production
npm start
```

## 📝 Ajouter un article de blog

1. Créer un nouveau fichier `.mdx` dans `/content/blog/`
2. Ajouter le frontmatter:

```mdx
---
title: "Titre de l'article"
excerpt: "Description courte"
date: "2025-02-06"
---

# Contenu de l'article...
```

3. L'article apparaîtra automatiquement sur `/blog`

## 🔍 SEO

- **Metadata complète**: Titles, descriptions, OG tags
- **Sitemap**: Généré automatiquement (`/sitemap.xml`)
- **Robots.txt**: Configuration SEO-friendly (`/robots.txt`)
- **Schema.org**: Markup structuré
- **Liens internes**: Optimisés pour navigation

## 🚀 Déploiement

Le site est prêt pour le déploiement sur Vercel:

```bash
# Push vers GitHub
git push

# Vercel déploiera automatiquement
```

## 📁 Structure des fichiers

```
arabclaw/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── layout.tsx            # Layout principal (RTL + Cairo)
│   ├── globals.css           # Styles globaux
│   ├── install/page.tsx      # Page installation
│   ├── blog/
│   │   ├── page.tsx          # Liste blog
│   │   └── [slug]/page.tsx   # Article individuel
│   ├── about/page.tsx        # Page About
│   ├── not-found.tsx         # Page 404
│   ├── sitemap.ts            # Sitemap generator
│   └── robots.ts             # Robots.txt generator
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FeatureCard.tsx
│   └── BlogCard.tsx
├── content/blog/             # Articles MDX
├── lib/
│   └── blog.ts               # Utilitaires blog
├── public/
│   └── mascot.jpg            # Logo mascotte
├── mdx-components.tsx        # Styles MDX
└── next.config.ts            # Config Next.js + MDX
```

## 🌐 Liens

- **Site**: https://arabclaw.com
- **Docs**: https://docs.arabclaw.com
- **Marketplace**: https://marketplace.arabclaw.com
- **GitHub**: https://github.com/openclaw
- **Discord**: https://discord.gg/openclaw

## 📄 License

Open source - Libre d'utilisation

---

Made with ❤️ for the Arab OpenClaw community
