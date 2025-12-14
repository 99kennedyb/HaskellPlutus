// ============================================
// YOUNGLIFE DRC - Configuration Utilisateur Test
// Créer automatiquement un utilisateur de test
// ============================================

function setupTestUser() {
  // Vérifier si l'utilisateur test existe déjà
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const testUserExists = users.find(u => u.username === 'test');

  if (testUserExists) {
    console.log('✅ Utilisateur test déjà existant');
    return testUserExists;
  }

  // Créer l'utilisateur test
  const testUser = {
    username: 'test',
    firstname: 'Jean',
    lastname: 'Dupont',
    email: 'test@younglifedrc.com',
    phone: '+243 973 664 102',
    city: 'Kinshasa',
    address: 'Avenue de la Paix, Gombe',
    country: 'Congo (RDC)',
    password: 'test1234',
    createdAt: new Date('2024-01-01').toISOString(),
    meditations: [
      {
        date: new Date('2024-11-28').toISOString(),
        verse: {
          id: 1,
          reference: 'Jean 3:16-17',
          theme: 'Amour de Dieu'
        },
        answers: {
          answer1: 'Ce passage parle de l\'amour immense de Dieu pour le monde entier. Il a donné son Fils unique pour nous sauver.',
          answer2: 'Cela signifie que Dieu nous aime tellement qu\'il a sacrifié ce qu\'il avait de plus précieux pour nous offrir la vie éternelle.',
          answer3: 'Je vais accepter cet amour dans ma vie et partager cette bonne nouvelle avec d\'autres.',
          answer4: 'Je vais partager ce message avec ma famille et mes amis qui ne connaissent pas encore l\'amour de Dieu.'
        }
      },
      {
        date: new Date('2024-11-29').toISOString(),
        verse: {
          id: 2,
          reference: 'Philippiens 4:6-7',
          theme: 'Paix et Prière'
        },
        answers: {
          answer1: 'Ce passage nous encourage à ne pas nous inquiéter mais à prier avec reconnaissance.',
          answer2: 'Dieu veut que nous lui fassions confiance et que nous lui présentions nos besoins dans la prière.',
          answer3: 'Je vais commencer à prier davantage et à remercier Dieu pour ses bénédictions.',
          answer4: 'Je vais encourager mes amis à prier quand ils sont inquiets.'
        }
      },
      {
        date: new Date('2024-11-30').toISOString(),
        verse: {
          id: 3,
          reference: 'Psaume 23:1-4',
          theme: 'Protection Divine'
        },
        answers: {
          answer1: 'Le Seigneur est mon berger, il prend soin de moi et me protège.',
          answer2: 'Même dans les moments difficiles, Dieu est avec moi et me guide.',
          answer3: 'Je vais faire confiance à Dieu dans toutes les situations de ma vie.',
          answer4: 'Je vais partager ce psaume avec quelqu\'un qui traverse une épreuve.'
        }
      }
    ]
  };

  // Ajouter l'utilisateur test
  users.push(testUser);
  localStorage.setItem('users', JSON.stringify(users));

  console.log('✅ Utilisateur test créé avec succès !');
  console.log('📧 Username: test');
  console.log('🔒 Password: test1234');
  
  return testUser;
}

// Fonction pour se connecter automatiquement avec l'utilisateur test
function loginAsTestUser() {
  const testUser = setupTestUser();
  localStorage.setItem('currentUser', JSON.stringify(testUser));
  console.log('✅ Connecté en tant qu\'utilisateur test');
  
  // Afficher les informations de connexion
  showTestUserInfo();
}

// Afficher les informations de l'utilisateur test
function showTestUserInfo() {
  const info = `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║           👤 UTILISATEUR TEST - YOUNGLIFE DRC                ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

📧 Nom d'utilisateur : test
🔒 Mot de passe      : test1234

👤 Informations :
   Prénom    : Jean
   Nom       : Dupont
   Email     : test@younglifedrc.com
   Téléphone : +243 973 664 102
   Ville     : Kinshasa
   Pays      : Congo (RDC)

📊 Statistiques :
   Méditations : 3
   Membre depuis : 1er janvier 2024

🎯 Pour se connecter :
   1. Aller à la page de connexion
   2. Username : test
   3. Password : test1234
   4. Cliquer sur "Se connecter"

💡 OU utiliser la fonction : loginAsTestUser()
  `;
  
  console.log(info);
}

// Fonction pour réinitialiser l'utilisateur test
function resetTestUser() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const filteredUsers = users.filter(u => u.username !== 'test');
  localStorage.setItem('users', JSON.stringify(filteredUsers));
  localStorage.removeItem('currentUser');
  console.log('✅ Utilisateur test supprimé');
  
  // Recréer l'utilisateur test
  setupTestUser();
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Créer l'utilisateur test s'il n'existe pas
  setupTestUser();
  
  // Afficher les informations dans la console
  console.log('%c👤 UTILISATEUR TEST DISPONIBLE', 'color: #667eea; font-size: 16px; font-weight: bold;');
  console.log('%cUsername: test | Password: test1234', 'color: #764ba2; font-size: 14px;');
  console.log('%cUtilisez loginAsTestUser() pour connexion automatique', 'color: #28a745; font-size: 12px;');
});

// Rendre les fonctions accessibles globalement
window.setupTestUser = setupTestUser;
window.loginAsTestUser = loginAsTestUser;
window.showTestUserInfo = showTestUserInfo;
window.resetTestUser = resetTestUser;
