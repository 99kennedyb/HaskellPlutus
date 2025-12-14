# ➕ Guide Rapide : Ajouter des Versets

## 🎯 En 5 Minutes

### Étape 1 : Ouvrir le Fichier
Ouvrez `verses-data-improved.js`

### Étape 2 : Copier ce Template
```javascript
{
  id: 11, // ⚠️ CHANGER : Numéro suivant (11, 12, 13...)
  reference: "Matthieu 5:14-16", // ⚠️ CHANGER : Référence biblique
  text: "Vous êtes la lumière du monde...", // ⚠️ CHANGER : Texte complet
  theme: "Lumière du Monde", // ⚠️ CHANGER : Thème du verset
  imageUrl: "https://images.unsplash.com/photo-...?w=800&q=80", // ⚠️ CHANGER : URL image
  soubassement: [
    { 
      ref: "Jean 8:12", // ⚠️ CHANGER : Référence
      text: "Jésus leur parla..." // ⚠️ CHANGER : Texte
    },
    { 
      ref: "Philippiens 2:15", // ⚠️ CHANGER : Référence
      text: "Afin que vous soyez..." // ⚠️ CHANGER : Texte
    }
  ]
},
```

### Étape 3 : Coller Avant le `];`
Trouvez la ligne `];` à la fin du fichier et collez votre verset AVANT.

### Étape 4 : Trouver une Image
1. Allez sur https://unsplash.com/
2. Cherchez : "prayer", "bible", "nature", "sunset", etc.
3. Cliquez sur une image
4. Copiez l'URL (exemple : `https://images.unsplash.com/photo-1234567890?w=800&q=80`)
5. Collez dans `imageUrl`

### Étape 5 : Sauvegarder
Sauvegardez le fichier et rechargez la page !

---

## 📖 Exemples Prêts à Copier

### Verset 11 : Foi
```javascript
{
  id: 11,
  reference: "Hébreux 11:1",
  text: "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.",
  theme: "Foi",
  imageUrl: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&q=80",
  soubassement: [
    { ref: "2 Corinthiens 5:7", text: "Car nous marchons par la foi et non par la vue." },
    { ref: "Marc 11:22", text: "Jésus prit la parole, et leur dit: Ayez foi en Dieu." }
  ]
},
```

### Verset 12 : Espérance
```javascript
{
  id: 12,
  reference: "Romains 15:13",
  text: "Que le Dieu de l'espérance vous remplisse de toute joie et de toute paix dans la foi, pour que vous abondiez en espérance, par la puissance du Saint-Esprit!",
  theme: "Espérance",
  imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  soubassement: [
    { ref: "Psaume 42:5", text: "Pourquoi t'abats-tu, mon âme, et gémis-tu au dedans de moi? Espère en Dieu, car je le louerai encore." },
    { ref: "Lamentations 3:25", text: "L'Éternel a de la bonté pour qui espère en lui, pour l'âme qui le cherche." }
  ]
},
```

### Verset 13 : Sagesse
```javascript
{
  id: 13,
  reference: "Jacques 1:5-6",
  text: "Si quelqu'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous simplement et sans reproche, et elle lui sera donnée. Mais qu'il la demande avec foi, sans douter; car celui qui doute est semblable au flot de la mer, agité par le vent et poussé de côté et d'autre.",
  theme: "Sagesse",
  imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
  soubassement: [
    { ref: "Proverbes 2:6", text: "Car l'Éternel donne la sagesse; de sa bouche sortent la connaissance et l'intelligence." },
    { ref: "Proverbes 9:10", text: "Le commencement de la sagesse, c'est la crainte de l'Éternel." }
  ]
},
```

### Verset 14 : Pardon
```javascript
{
  id: 14,
  reference: "Éphésiens 4:31-32",
  text: "Que toute amertume, toute animosité, toute colère, toute clameur, toute calomnie, et toute espèce de méchanceté, disparaissent du milieu de vous. Soyez bons les uns envers les autres, compatissants, vous pardonnant réciproquement, comme Dieu vous a pardonné en Christ.",
  theme: "Pardon",
  imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
  soubassement: [
    { ref: "Colossiens 3:13", text: "Supportez-vous les uns les autres, et, si l'un a sujet de se plaindre de l'autre, pardonnez-vous réciproquement." },
    { ref: "Matthieu 6:14", text: "Si vous pardonnez aux hommes leurs offenses, votre Père céleste vous pardonnera aussi." }
  ]
},
```

### Verset 15 : Joie
```javascript
{
  id: 15,
  reference: "Néhémie 8:10",
  text: "Ne vous affligez pas, car la joie de l'Éternel sera votre force.",
  theme: "Joie",
  imageUrl: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=800&q=80",
  soubassement: [
    { ref: "Psaume 16:11", text: "Tu me feras connaître le sentier de la vie; Il y a d'abondantes joies devant ta face." },
    { ref: "Jean 15:11", text: "Je vous ai dit ces choses, afin que ma joie soit en vous, et que votre joie soit parfaite." }
  ]
},
```

---

## 🖼️ Meilleures Images Unsplash

### Recherches Recommandées
1. **"prayer hands"** - Mains en prière
2. **"open bible"** - Bible ouverte
3. **"mountain sunrise"** - Lever de soleil montagne
4. **"peaceful nature"** - Nature paisible
5. **"cross sunset"** - Croix au coucher de soleil
6. **"worship"** - Adoration
7. **"hope light"** - Lumière d'espoir
8. **"faith journey"** - Voyage de foi
9. **"spiritual peace"** - Paix spirituelle
10. **"divine love"** - Amour divin

### Format d'URL
```
https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80
```
- `w=800` : Largeur 800px
- `q=80` : Qualité 80%

---

## 📚 Sources de Versets

### Bibles en Ligne
1. **Bible Gateway** : https://www.biblegateway.com/
2. **Bible.com** : https://www.bible.com/
3. **TopBible** : https://topbible.topchretien.com/

### Thèmes Populaires
- Amour
- Foi
- Espérance
- Paix
- Joie
- Courage
- Sagesse
- Pardon
- Grâce
- Protection
- Guidance
- Force
- Patience
- Humilité
- Gratitude

---

## ✅ Checklist

Avant d'ajouter un verset, vérifiez :

- [ ] ID unique (pas de doublon)
- [ ] Référence biblique correcte
- [ ] Texte complet et exact
- [ ] Thème approprié
- [ ] URL d'image valide (Unsplash)
- [ ] 2 versets de soubassement
- [ ] Virgule à la fin (sauf dernier verset)
- [ ] Pas d'erreurs de syntaxe

---

## 🎯 Objectif : 365 Versets

### Progression
- ✅ Jour 1-10 : Complété
- 🔄 Jour 11-50 : En cours
- ⏳ Jour 51-365 : À venir

### Contribuer
Vous pouvez ajouter des versets et partager !

---

## 📞 Besoin d'Aide ?

**Email :** kennedymarcellin@gmail.com  
**Téléphone :** +243 973 664 102

---

**Ensemble, construisons une bibliothèque de 365 versets ! 📖**
