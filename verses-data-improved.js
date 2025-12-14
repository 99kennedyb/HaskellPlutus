// ============================================
// YOUNGLIFE DRC - Base de Données des Versets
// Versets bibliques avec images et versets de soubassement
// ============================================

const versesDatabase = [
  // Jour 1
  {
    id: 1,
    reference: "Jean 3:16-17",
    text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle. Dieu, en effet, n'a pas envoyé son Fils dans le monde pour qu'il juge le monde, mais pour que le monde soit sauvé par lui.",
    theme: "Amour de Dieu",
    imageUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
    soubassement: [
      { ref: "Romains 5:8", text: "Mais Dieu prouve son amour envers nous, en ce que, lorsque nous étions encore des pécheurs, Christ est mort pour nous." },
      { ref: "1 Jean 4:9", text: "L'amour de Dieu a été manifesté envers nous en ce que Dieu a envoyé son Fils unique dans le monde, afin que nous vivions par lui." }
    ]
  },
  
  // Jour 2
  {
    id: 2,
    reference: "Philippiens 4:6-7",
    text: "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.",
    theme: "Paix et Prière",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    soubassement: [
      { ref: "Matthieu 6:25", text: "C'est pourquoi je vous dis: Ne vous inquiétez pas pour votre vie de ce que vous mangerez, ni pour votre corps, de quoi vous serez vêtus." },
      { ref: "1 Pierre 5:7", text: "Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous." }
    ]
  },
  
  // Jour 3
  {
    id: 3,
    reference: "Psaume 23:1-4",
    text: "L'Éternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles. Il restaure mon âme, Il me conduit dans les sentiers de la justice, à cause de son nom. Quand je marche dans la vallée de l'ombre de la mort, je ne crains aucun mal, car tu es avec moi: ta houlette et ton bâton me rassurent.",
    theme: "Protection Divine",
    imageUrl: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&q=80",
    soubassement: [
      { ref: "Jean 10:11", text: "Je suis le bon berger. Le bon berger donne sa vie pour ses brebis." },
      { ref: "Ésaïe 40:11", text: "Comme un berger, il paîtra son troupeau, Il prendra les agneaux dans ses bras." }
    ]
  },
  
  // Jour 4
  {
    id: 4,
    reference: "Romains 8:28-29",
    text: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein. Car ceux qu'il a connus d'avance, il les a aussi prédestinés à être semblables à l'image de son Fils, afin que son Fils fût le premier-né entre plusieurs frères.",
    theme: "Plan de Dieu",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    soubassement: [
      { ref: "Jérémie 29:11", text: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance." },
      { ref: "Proverbes 3:5-6", text: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse." }
    ]
  },
  
  // Jour 5
  {
    id: 5,
    reference: "Matthieu 11:28-30",
    text: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos. Prenez mon joug sur vous et recevez mes instructions, car je suis doux et humble de cœur; et vous trouverez du repos pour vos âmes. Car mon joug est doux, et mon fardeau léger.",
    theme: "Repos en Christ",
    imageUrl: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=800&q=80",
    soubassement: [
      { ref: "Psaume 55:22", text: "Remets ton sort à l'Éternel, et il te soutiendra, Il ne laissera jamais chanceler le juste." },
      { ref: "Ésaïe 40:31", text: "Mais ceux qui se confient en l'Éternel renouvellent leur force." }
    ]
  },
  
  // Jour 6
  {
    id: 6,
    reference: "2 Corinthiens 5:17-18",
    text: "Si quelqu'un est en Christ, il est une nouvelle créature. Les choses anciennes sont passées; voici, toutes choses sont devenues nouvelles. Et tout cela vient de Dieu, qui nous a réconciliés avec lui par Christ, et qui nous a donné le ministère de la réconciliation.",
    theme: "Nouvelle Création",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    soubassement: [
      { ref: "Ézéchiel 36:26", text: "Je vous donnerai un cœur nouveau, et je mettrai en vous un esprit nouveau." },
      { ref: "Galates 2:20", text: "J'ai été crucifié avec Christ; et si je vis, ce n'est plus moi qui vis, c'est Christ qui vit en moi." }
    ]
  },
  
  // Jour 7
  {
    id: 7,
    reference: "Éphésiens 2:8-10",
    text: "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu. Ce n'est point par les œuvres, afin que personne ne se glorifie. Car nous sommes son ouvrage, ayant été créés en Jésus-Christ pour de bonnes œuvres, que Dieu a préparées d'avance, afin que nous les pratiquions.",
    theme: "Grâce et Salut",
    imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
    soubassement: [
      { ref: "Tite 3:5", text: "Il nous a sauvés, non à cause des œuvres de justice que nous aurions faites, mais selon sa miséricorde." },
      { ref: "Romains 3:23-24", text: "Car tous ont péché et sont privés de la gloire de Dieu; et ils sont gratuitement justifiés par sa grâce." }
    ]
  },
  
  // Jour 8
  {
    id: 8,
    reference: "Josué 1:8-9",
    text: "Que ce livre de la loi ne s'éloigne point de ta bouche; médite-le jour et nuit, pour agir fidèlement selon tout ce qui y est écrit; car c'est alors que tu auras du succès dans tes entreprises, c'est alors que tu réussiras. Ne t'ai-je pas donné cet ordre: Fortifie-toi et prends courage? Ne t'effraie point et ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.",
    theme: "Courage et Méditation",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    soubassement: [
      { ref: "Psaume 1:2-3", text: "Mais qui trouve son plaisir dans la loi de l'Éternel, et qui la médite jour et nuit! Il est comme un arbre planté près d'un courant d'eau." },
      { ref: "Deutéronome 31:6", text: "Fortifiez-vous et ayez du courage! Ne craignez point et ne soyez point effrayés devant eux; car l'Éternel, ton Dieu, marchera lui-même avec toi." }
    ]
  },
  
  // Jour 9
  {
    id: 9,
    reference: "1 Corinthiens 13:4-7",
    text: "L'amour est patient, il est plein de bonté; l'amour n'est point envieux; l'amour ne se vante point, il ne s'enfle point d'orgueil, il ne fait rien de malhonnête, il ne cherche point son intérêt, il ne s'irrite point, il ne soupçonne point le mal, il ne se réjouit point de l'injustice, mais il se réjouit de la vérité; il excuse tout, il croit tout, il espère tout, il supporte tout.",
    theme: "L'Amour Véritable",
    imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    soubassement: [
      { ref: "Jean 13:34-35", text: "Je vous donne un commandement nouveau: Aimez-vous les uns les autres; comme je vous ai aimés, vous aussi, aimez-vous les uns les autres." },
      { ref: "1 Jean 4:7-8", text: "Bien-aimés, aimons nous les uns les autres; car l'amour est de Dieu, et quiconque aime est né de Dieu et connaît Dieu." }
    ]
  },
  
  // Jour 10
  {
    id: 10,
    reference: "Proverbes 3:5-8",
    text: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse; reconnais-le dans toutes tes voies, et il aplanira tes sentiers. Ne sois point sage à tes propres yeux, crains l'Éternel, et détourne-toi du mal: ce sera la santé pour tes muscles, et un rafraîchissement pour tes os.",
    theme: "Confiance en Dieu",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    soubassement: [
      { ref: "Psaume 37:5", text: "Recommande ton sort à l'Éternel, mets en lui ta confiance, et il agira." },
      { ref: "Ésaïe 26:3", text: "À celui qui est ferme dans ses sentiments tu assures la paix, la paix, parce qu'il se confie en toi." }
    ]
  }
];

// Fonction pour obtenir le verset du jour (rotation infinie)
function getDailyVerse() {
  const today = new Date();
  const startDate = new Date('2024-01-01'); // Date de début
  const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const verseIndex = daysSinceStart % versesDatabase.length;
  return versesDatabase[verseIndex];
}

// Fonction pour obtenir un verset aléatoire
function getRandomVerse() {
  const randomIndex = Math.floor(Math.random() * versesDatabase.length);
  return versesDatabase[randomIndex];
}

// Fonction pour obtenir un verset par ID
function getVerseById(id) {
  return versesDatabase.find(verse => verse.id === id);
}

// Fonction pour rechercher des versets
function searchVerses(query) {
  const lowerQuery = query.toLowerCase();
  return versesDatabase.filter(verse => 
    verse.text.toLowerCase().includes(lowerQuery) ||
    verse.reference.toLowerCase().includes(lowerQuery) ||
    verse.theme.toLowerCase().includes(lowerQuery)
  );
}

// Fonction pour obtenir tous les versets
function getAllVerses() {
  return versesDatabase;
}

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    versesDatabase,
    getDailyVerse,
    getRandomVerse,
    getVerseById,
    searchVerses,
    getAllVerses
  };
}
