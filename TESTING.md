# 🧪 Guide de Tests - YOUNGLIFE DRC

## 📋 Tests à Effectuer

### 1. ✅ Tests d'Accessibilité (WCAG 2.1)

#### Tests Manuels
- [ ] Navigation au clavier uniquement (Tab, Shift+Tab, Enter, Espace)
- [ ] Lecteur d'écran (NVDA sur Windows, VoiceOver sur Mac)
- [ ] Contraste des couleurs (ratio 4.5:1 minimum)
- [ ] Zoom à 200% sans perte de fonctionnalité
- [ ] Tous les formulaires ont des labels
- [ ] Tous les boutons ont des labels descriptifs
- [ ] Les images ont des attributs alt

#### Outils Automatiques
```bash
# 1. WAVE (Web Accessibility Evaluation Tool)
https://wave.webaim.org/

# 2. axe DevTools (Extension Chrome/Firefox)
https://www.deque.com/axe/devtools/

# 3. Lighthouse (Chrome DevTools)
# Ouvrir DevTools > Lighthouse > Accessibility
```

#### Checklist WCAG 2.1 AA
- [ ] 1.1.1 - Contenu non textuel (alt text)
- [ ] 1.3.1 - Info et relations (structure sémantique)
- [ ] 1.4.3 - Contraste minimum (4.5:1)
- [ ] 2.1.1 - Clavier (navigation complète)
- [ ] 2.4.1 - Contourner les blocs (skip links)
- [ ] 2.4.2 - Titre de page
- [ ] 2.4.3 - Ordre de focus logique
- [ ] 2.4.4 - Fonction du lien (contexte)
- [ ] 3.1.1 - Langue de la page
- [ ] 3.2.1 - Au focus (pas de changement de contexte)
- [ ] 3.3.1 - Identification des erreurs
- [ ] 3.3.2 - Étiquettes ou instructions
- [ ] 4.1.1 - Analyse syntaxique (HTML valide)
- [ ] 4.1.2 - Nom, rôle, valeur (ARIA)

### 2. 🚀 Tests de Performance

#### Lighthouse
```bash
# Chrome DevTools > Lighthouse
# Catégories à tester :
- Performance (objectif : 90+)
- Accessibility (objectif : 95+)
- Best Practices (objectif : 90+)
- SEO (objectif : 95+)
```

#### Métriques Clés
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to Interactive (TTI) < 3.8s

#### Outils
```bash
# 1. PageSpeed Insights
https://pagespeed.web.dev/

# 2. WebPageTest
https://www.webpagetest.org/

# 3. GTmetrix
https://gtmetrix.com/
```

### 3. 📱 Tests Responsive

#### Breakpoints à Tester
- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px - 1024px)
- [ ] Large Desktop (1025px+)

#### Appareils à Tester
- [ ] iPhone SE (375x667)
- [ ] iPhone 12 Pro (390x844)
- [ ] iPad (768x1024)
- [ ] iPad Pro (1024x1366)
- [ ] Desktop 1920x1080

#### Chrome DevTools
```bash
# 1. Ouvrir DevTools (F12)
# 2. Toggle Device Toolbar (Ctrl+Shift+M)
# 3. Tester différentes tailles
```

### 4. 🌐 Tests Cross-Browser

#### Navigateurs à Tester
- [ ] Chrome (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (dernière version)
- [ ] Edge (dernière version)
- [ ] Opera (optionnel)

#### Outils
```bash
# BrowserStack (payant mais essai gratuit)
https://www.browserstack.com/

# LambdaTest (gratuit avec limitations)
https://www.lambdatest.com/
```

### 5. ✍️ Tests Fonctionnels

#### Page d'Accueil (Landing)
- [ ] Bouton "Commencer Maintenant" fonctionne
- [ ] Menu hamburger s'ouvre/ferme
- [ ] Navigation vers sections fonctionne
- [ ] Liens de contact fonctionnent
- [ ] Images se chargent correctement

#### Page d'Authentification
- [ ] Formulaire de connexion valide les champs
- [ ] Formulaire d'inscription valide les champs
- [ ] Basculer entre connexion/inscription fonctionne
- [ ] Messages d'erreur s'affichent
- [ ] Validation du mot de passe fonctionne
- [ ] Sélection du pays fonctionne

#### Page Application
- [ ] Verset du jour s'affiche
- [ ] Image de méditation se charge
- [ ] Bouton "Nouveau Verset" fonctionne
- [ ] Bibliothèque de versets s'ouvre
- [ ] Recherche de versets fonctionne
- [ ] Filtre par thème fonctionne
- [ ] Formulaire de méditation se soumet
- [ ] Historique s'affiche
- [ ] Section communauté fonctionne
- [ ] Modal profil s'ouvre/ferme
- [ ] Déconnexion fonctionne

### 6. 🔒 Tests de Sécurité

#### Validation des Formulaires
- [ ] Validation côté client fonctionne
- [ ] Champs requis sont vérifiés
- [ ] Format email validé
- [ ] Format téléphone validé
- [ ] Longueur mot de passe vérifiée
- [ ] Confirmation mot de passe vérifiée

#### Headers de Sécurité
```bash
# Vérifier avec securityheaders.com
https://securityheaders.com/

# Headers à vérifier :
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Content-Security-Policy
```

#### Tests XSS
```javascript
// Tester dans les champs de formulaire :
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
```

### 7. 📊 Tests SEO

#### Validation HTML
```bash
# W3C Validator
https://validator.w3.org/

# Vérifier :
- Pas d'erreurs HTML
- Structure sémantique correcte
- Balises fermées correctement
```

#### Meta Tags
- [ ] Title présent et descriptif
- [ ] Meta description présente
- [ ] Meta keywords présents
- [ ] Open Graph tags présents
- [ ] Twitter Cards présents
- [ ] Canonical URL défini

#### Structured Data
```bash
# Google Rich Results Test
https://search.google.com/test/rich-results

# Schema.org markup (optionnel)
```

#### Sitemap & Robots.txt
- [ ] robots.txt accessible
- [ ] sitemap.xml créé
- [ ] Sitemap soumis à Google Search Console

### 8. 💾 Tests de Stockage

#### LocalStorage
```javascript
// Ouvrir Console DevTools
localStorage.setItem('test', 'value');
console.log(localStorage.getItem('test'));
localStorage.removeItem('test');
```

#### Tests à Effectuer
- [ ] Données utilisateur sauvegardées
- [ ] Méditations sauvegardées
- [ ] Historique persistant
- [ ] Déconnexion efface les données sensibles

### 9. 🖼️ Tests d'Images

#### Optimisation
- [ ] Images compressées (< 200KB)
- [ ] Format approprié (JPEG pour photos)
- [ ] Attributs width/height définis
- [ ] Attributs alt descriptifs
- [ ] Loading lazy pour images hors viewport

#### Outils
```bash
# TinyPNG
https://tinypng.com/

# ImageOptim (Mac)
https://imageoptim.com/

# Squoosh (Web)
https://squoosh.app/
```

### 10. 📝 Tests de Contenu

#### Orthographe & Grammaire
- [ ] Pas de fautes d'orthographe
- [ ] Grammaire correcte
- [ ] Ponctuation appropriée
- [ ] Emojis s'affichent correctement

#### Lisibilité
- [ ] Taille de police lisible (16px minimum)
- [ ] Contraste suffisant
- [ ] Espacement approprié
- [ ] Longueur de ligne optimale (50-75 caractères)

## 🔄 Tests de Régression

### Après Chaque Modification
1. [ ] Tester la fonctionnalité modifiée
2. [ ] Tester les fonctionnalités liées
3. [ ] Vérifier qu'aucune régression n'est introduite
4. [ ] Tester sur mobile et desktop

## 📋 Template de Rapport de Bug

```markdown
### 🐛 Description du Bug
[Description claire et concise]

### 📍 Localisation
- Page : [Landing / Auth / App]
- Section : [Hero / Form / etc.]

### 🔄 Étapes pour Reproduire
1. Aller à '...'
2. Cliquer sur '...'
3. Voir l'erreur

### ✅ Comportement Attendu
[Ce qui devrait se passer]

### ❌ Comportement Actuel
[Ce qui se passe réellement]

### 📸 Captures d'Écran
[Si applicable]

### 🖥️ Environnement
- OS : [Windows / Mac / Linux]
- Navigateur : [Chrome / Firefox / Safari]
- Version : [Version du navigateur]
- Appareil : [Desktop / Mobile]

### 📝 Notes Additionnelles
[Informations supplémentaires]
```

## ✅ Checklist Finale

### Avant Déploiement
- [ ] Tous les tests d'accessibilité passent
- [ ] Score Lighthouse > 90 sur toutes les catégories
- [ ] Tests responsive OK sur tous les breakpoints
- [ ] Tests cross-browser OK
- [ ] Tous les tests fonctionnels passent
- [ ] Validation HTML sans erreurs
- [ ] SEO optimisé
- [ ] Images optimisées
- [ ] Pas de console errors
- [ ] Backup créé

### Après Déploiement
- [ ] Site accessible en production
- [ ] HTTPS fonctionne
- [ ] Formulaires fonctionnent
- [ ] Analytics configuré
- [ ] Monitoring en place

## 🛠️ Outils Recommandés

### Extensions Chrome
- Lighthouse
- WAVE Evaluation Tool
- axe DevTools
- ColorZilla (contraste)
- Responsive Viewer

### Outils en Ligne
- https://validator.w3.org/ (HTML)
- https://jigsaw.w3.org/css-validator/ (CSS)
- https://wave.webaim.org/ (Accessibilité)
- https://pagespeed.web.dev/ (Performance)
- https://securityheaders.com/ (Sécurité)

## 📞 Support

**Email :** kennedymarcellin@gmail.com  
**Téléphone :** +243 973 664 102

---

**Bons tests ! 🧪**
