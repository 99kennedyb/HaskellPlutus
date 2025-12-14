# 🚀 Guide de Déploiement - YOUNGLIFE DRC

## 📋 Prérequis

- [ ] Compte d'hébergement web (Hostinger, OVH, etc.)
- [ ] Nom de domaine (optionnel)
- [ ] Client FTP (FileZilla) ou accès SSH
- [ ] Fichiers du projet prêts

## 🌐 Options de Déploiement

### Option 1 : Hébergement Gratuit (Recommandé pour débuter)

#### **Netlify** (Recommandé) ⭐
```bash
# 1. Créer un compte sur netlify.com
# 2. Installer Netlify CLI
npm install -g netlify-cli

# 3. Se connecter
netlify login

# 4. Déployer
netlify deploy --prod
```

**Avantages :**
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Déploiement continu
- ✅ Formulaires intégrés

#### **Vercel**
```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Déployer
vercel --prod
```

#### **GitHub Pages**
```bash
# 1. Créer un repo GitHub
# 2. Pousser le code
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/younglife-drc.git
git push -u origin main

# 3. Activer GitHub Pages dans Settings > Pages
```

### Option 2 : Hébergement Payant

#### **Hostinger** (Recommandé pour RDC)
1. Acheter un plan d'hébergement
2. Accéder au cPanel
3. Utiliser le File Manager ou FTP
4. Uploader les fichiers dans `public_html`

#### **OVH**
1. Commander un hébergement
2. Configurer le domaine
3. Uploader via FTP

## 📁 Structure de Déploiement

```
public_html/
├── index.html (renommer index-improved.html)
├── main.css
├── css-improvements.css (à inclure)
├── app.js
├── verses-data.js
├── meditation-images.js
├── countries-data.js
├── manifest.json
├── robots.txt
├── .htaccess
└── IMAGE/
    ├── IMG_2018 copie.jpg
    ├── _MG_1181 copie.jpg
    ├── _MG_1594 copie.jpg
    └── _MG_1602.jpg
```

## 🔧 Configuration Avant Déploiement

### 1. Mettre à jour index.html
```html
<!-- Ajouter dans <head> -->
<link rel="manifest" href="/manifest.json">
<link rel="stylesheet" href="css-improvements.css">
```

### 2. Optimiser les Images
```bash
# Installer ImageOptim (Mac) ou TinyPNG
# Compresser toutes les images dans /IMAGE/
```

### 3. Minifier le CSS (optionnel)
```bash
# Utiliser un outil en ligne ou :
npm install -g clean-css-cli
cleancss -o main.min.css main.css
```

### 4. Configurer le domaine
```
# Dans .htaccess, mettre à jour :
RewriteRule ^(.*)$ https://votredomaine.com/$1 [L,R=301]
```

## 🔒 Sécurité

### SSL/HTTPS
```bash
# Sur Netlify/Vercel : Automatique
# Sur hébergement partagé : Let's Encrypt via cPanel
```

### Variables d'Environnement
```javascript
// Créer config.js
const CONFIG = {
  API_URL: 'https://api.younglifedrc.com',
  ENV: 'production'
};
```

## 📊 Après Déploiement

### 1. Tester le Site
- [ ] Ouvrir sur différents navigateurs
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Tester les formulaires
- [ ] Vérifier les images

### 2. Configurer Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Soumettre aux Moteurs de Recherche
```bash
# Google Search Console
https://search.google.com/search-console

# Bing Webmaster Tools
https://www.bing.com/webmasters
```

### 4. Créer un Sitemap
```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://younglifedrc.com/</loc>
    <lastmod>2024-11-30</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🔄 Mises à Jour

### Via FTP
1. Sauvegarder les fichiers actuels
2. Uploader les nouveaux fichiers
3. Vider le cache du navigateur

### Via Git (Netlify/Vercel)
```bash
git add .
git commit -m "Update: description"
git push origin main
# Déploiement automatique
```

## 📱 Progressive Web App (PWA)

### Service Worker
```javascript
// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('younglife-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/main.css',
        '/app.js'
      ]);
    })
  );
});
```

### Activer dans index.html
```javascript
// Décommenter dans index-improved.html
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

## 🐛 Dépannage

### Problème : Images ne s'affichent pas
```bash
# Vérifier les permissions
chmod 755 IMAGE/
chmod 644 IMAGE/*
```

### Problème : CSS ne se charge pas
```html
<!-- Vérifier le chemin -->
<link rel="stylesheet" href="/main.css">
<!-- ou -->
<link rel="stylesheet" href="./main.css">
```

### Problème : Formulaires ne fonctionnent pas
```javascript
// Vérifier que app.js est chargé
console.log('App loaded');
```

## 📞 Support

**Email :** kennedymarcellin@gmail.com  
**Téléphone :** +243 973 664 102

## ✅ Checklist Finale

- [ ] Fichiers uploadés
- [ ] Images optimisées
- [ ] SSL activé
- [ ] Domaine configuré
- [ ] Analytics installé
- [ ] Sitemap soumis
- [ ] Tests effectués
- [ ] Backup créé
- [ ] Documentation à jour

---

**Bon déploiement ! 🚀**
