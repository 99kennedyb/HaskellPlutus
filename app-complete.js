// ============================================
// YOUNGLIFE DRC - Application Complète
// Gestion de la navigation et des fonctionnalités
// ============================================

class YoungLifeApp {
  constructor() {
    this.currentPage = 'landing';
    this.currentUser = null;
    this.init();
  }

  // Initialisation de l'application
  init() {
    this.setupLandingPage();
    this.setupAuthPage();
    this.setupAppPage();
    this.checkAuthentication();
  }

  // ============================================
  // LANDING PAGE - Page d'Accueil
  // ============================================
  
  setupLandingPage() {
    // Bouton "Commencer Maintenant"
    const startBtn = document.getElementById('start-btn');
    const startBtn2 = document.getElementById('start-btn-2');
    
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        this.showAuthPage();
      });
    }
    
    if (startBtn2) {
      startBtn2.addEventListener('click', () => {
        this.showAuthPage();
      });
    }

    // Menu Hamburger Landing
    const landingHamburger = document.getElementById('landing-hamburger');
    const landingMenu = document.getElementById('landing-menu');
    
    if (landingHamburger && landingMenu) {
      landingHamburger.addEventListener('click', () => {
        landingHamburger.classList.toggle('active');
        landingMenu.classList.toggle('active');
        
        // Mettre à jour aria-expanded
        const isExpanded = landingHamburger.classList.contains('active');
        landingHamburger.setAttribute('aria-expanded', isExpanded);
      });

      // Navigation du menu
      document.getElementById('step-accueil')?.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToSection('hero');
        this.closeMenu(landingHamburger, landingMenu);
      });

      document.getElementById('step-connexion')?.addEventListener('click', (e) => {
        e.preventDefault();
        this.showAuthPage();
        this.closeMenu(landingHamburger, landingMenu);
      });

      document.getElementById('step-meditation')?.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.currentUser) {
          this.showAppPage();
        } else {
          this.showAuthPage();
          this.showNotification('Veuillez vous connecter pour accéder à la méditation', 'info');
        }
        this.closeMenu(landingHamburger, landingMenu);
      });
    }

    // Système de donation
    this.setupDonationSystem();

    // Liens de contact
    this.setupContactLinks();
  }

  // Fermer le menu
  closeMenu(hamburger, menu) {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  // Scroll vers une section
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Configurer les liens de contact
  setupContactLinks() {
    // Les liens tel: et mailto: fonctionnent automatiquement
    // Mais on peut ajouter des analytics ou tracking ici si nécessaire
  }

  // ============================================
  // AUTH PAGE - Page d'Authentification
  // ============================================
  
  setupAuthPage() {
    // Bouton retour
    const backBtn = document.getElementById('back-to-home');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        this.showLandingPage();
      });
    }

    // Toggle entre connexion et inscription
    const authToggle = document.getElementById('auth-toggle');
    const authTitle = document.getElementById('auth-title');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authSwitchText = document.getElementById('auth-switch-text');

    if (authToggle) {
      authToggle.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (loginForm.style.display !== 'none') {
          // Passer à l'inscription
          loginForm.style.display = 'none';
          registerForm.style.display = 'block';
          authTitle.textContent = 'Créer un Compte';
          authSwitchText.textContent = 'Déjà un compte?';
          authToggle.textContent = 'Se connecter';
        } else {
          // Passer à la connexion
          loginForm.style.display = 'block';
          registerForm.style.display = 'none';
          authTitle.textContent = 'Connexion';
          authSwitchText.textContent = 'Pas de compte?';
          authToggle.textContent = 'Créer un compte';
        }
      });
    }

    // Formulaire de connexion
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleLogin();
      });
    }

    // Formulaire d'inscription
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleRegister();
      });
    }

    // Charger les pays
    this.loadCountries();
  }

  // Gérer la connexion
  handleLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
      this.showNotification('Veuillez remplir tous les champs', 'error');
      return;
    }

    // Vérifier dans localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.showNotification(`Bienvenue ${user.firstname} ${user.lastname} ! 🙏`, 'success');
      
      setTimeout(() => {
        this.showAppPage();
      }, 1500);
    } else {
      this.showNotification('Nom d\'utilisateur ou mot de passe incorrect', 'error');
    }
  }

  // Gérer l'inscription
  handleRegister() {
    const username = document.getElementById('reg-username').value;
    const firstname = document.getElementById('reg-firstname').value;
    const lastname = document.getElementById('reg-lastname').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('reg-phone').value;
    const city = document.getElementById('reg-city').value;
    const address = document.getElementById('reg-address').value;
    const country = document.getElementById('reg-country-select').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    const terms = document.getElementById('reg-terms').checked;

    // Validation
    if (!username || !firstname || !lastname || !phone || !country || !password || !confirmPassword) {
      this.showNotification('Veuillez remplir tous les champs obligatoires (*)', 'error');
      return;
    }

    if (password !== confirmPassword) {
      this.showNotification('Les mots de passe ne correspondent pas', 'error');
      return;
    }

    if (password.length < 8) {
      this.showNotification('Le mot de passe doit contenir au moins 8 caractères', 'error');
      return;
    }

    if (!terms) {
      this.showNotification('Veuillez accepter les conditions d\'utilisation', 'error');
      return;
    }

    // Vérifier si l'utilisateur existe déjà
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.username === username)) {
      this.showNotification('Ce nom d\'utilisateur existe déjà', 'error');
      return;
    }

    // Créer le nouvel utilisateur
    const newUser = {
      username,
      firstname,
      lastname,
      email,
      phone,
      city,
      address,
      country,
      password,
      createdAt: new Date().toISOString(),
      meditations: []
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    this.showNotification('Compte créé avec succès ! 🎉', 'success');
    
    // Auto-connexion
    setTimeout(() => {
      this.currentUser = newUser;
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      this.showAppPage();
    }, 1500);
  }

  // Charger les pays
  loadCountries() {
    const select = document.getElementById('reg-country-select');
    if (!select || typeof countriesData === 'undefined') return;

    countriesData.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name;
      option.textContent = country.name;
      select.appendChild(option);
    });
  }

  // ============================================
  // APP PAGE - Page Application
  // ============================================
  
  setupAppPage() {
    // Menu Hamburger App
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
      });

      // Fermer le menu au clic sur un lien
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Bouton déconnexion
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleLogout();
      });
    }

    // Bouton profil
    const profileBtn = document.getElementById('profile-btn');
    if (profileBtn) {
      profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showProfile();
      });
    }

    // Fermer le modal profil
    const closeProfile = document.getElementById('close-profile');
    if (closeProfile) {
      closeProfile.addEventListener('click', () => {
        document.getElementById('profile-modal').style.display = 'none';
      });
    }

    // Formulaire de méditation
    const meditationForm = document.getElementById('meditation-form');
    if (meditationForm) {
      meditationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.saveMeditation();
      });
    }
  }

  // Gérer la déconnexion
  handleLogout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
      this.showNotification('Déconnexion réussie. À bientôt ! 👋', 'success');
      
      setTimeout(() => {
        this.showLandingPage();
      }, 1500);
    }
  }

  // Afficher le profil
  showProfile() {
    const modal = document.getElementById('profile-modal');
    const content = document.getElementById('profile-content');
    
    if (!modal || !content || !this.currentUser) return;

    const meditationCount = this.currentUser.meditations?.length || 0;
    const memberSince = new Date(this.currentUser.createdAt).toLocaleDateString('fr-FR');

    content.innerHTML = `
      <div class="profile-section">
        <h3>👤 Informations Personnelles</h3>
        <div class="profile-info">
          <div class="profile-field">
            <span class="profile-label">Nom d'utilisateur</span>
            <span class="profile-value">${this.currentUser.username}</span>
          </div>
          <div class="profile-field">
            <span class="profile-label">Nom complet</span>
            <span class="profile-value">${this.currentUser.firstname} ${this.currentUser.lastname}</span>
          </div>
          <div class="profile-field">
            <span class="profile-label">Email</span>
            <span class="profile-value">${this.currentUser.email || 'Non renseigné'}</span>
          </div>
          <div class="profile-field">
            <span class="profile-label">Téléphone</span>
            <span class="profile-value">${this.currentUser.phone}</span>
          </div>
          <div class="profile-field">
            <span class="profile-label">Pays</span>
            <span class="profile-value">${this.currentUser.country}</span>
          </div>
          <div class="profile-field">
            <span class="profile-label">Membre depuis</span>
            <span class="profile-value">${memberSince}</span>
          </div>
        </div>
      </div>

      <div class="profile-section">
        <h3>📊 Statistiques</h3>
        <div class="profile-stats">
          <div class="stat-card">
            <div class="stat-number">${meditationCount}</div>
            <div class="stat-label">Méditations</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${this.calculateStreak()}</div>
            <div class="stat-label">Jours consécutifs</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${this.getDaysSinceMember()}</div>
            <div class="stat-label">Jours membre</div>
          </div>
        </div>
      </div>
    `;

    modal.style.display = 'flex';
  }

  // Calculer la série de jours consécutifs
  calculateStreak() {
    if (!this.currentUser.meditations || this.currentUser.meditations.length === 0) return 0;
    
    // Logique simplifiée - à améliorer
    return Math.min(this.currentUser.meditations.length, 7);
  }

  // Calculer les jours depuis l'inscription
  getDaysSinceMember() {
    const created = new Date(this.currentUser.createdAt);
    const now = new Date();
    const diff = now - created;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  // Sauvegarder une méditation
  saveMeditation() {
    const answer1 = document.getElementById('answer1').value;
    const answer2 = document.getElementById('answer2').value;
    const answer3 = document.getElementById('answer3').value;
    const answer4 = document.getElementById('answer4').value;

    if (!answer1 || !answer2 || !answer3 || !answer4) {
      this.showNotification('Veuillez répondre à toutes les questions', 'error');
      return;
    }

    const currentVerse = window.verseManager?.getCurrentVerse();
    if (!currentVerse) {
      this.showNotification('Erreur: Aucun verset chargé', 'error');
      return;
    }

    const meditation = {
      date: new Date().toISOString(),
      verse: currentVerse,
      answers: { answer1, answer2, answer3, answer4 }
    };

    // Sauvegarder dans le profil utilisateur
    if (!this.currentUser.meditations) {
      this.currentUser.meditations = [];
    }
    this.currentUser.meditations.unshift(meditation);

    // Mettre à jour localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.username === this.currentUser.username);
    if (userIndex !== -1) {
      users[userIndex] = this.currentUser;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }

    this.showNotification('Méditation sauvegardée avec succès ! 🙏', 'success');
    
    // Réinitialiser le formulaire
    document.getElementById('meditation-form').reset();
    
    // Afficher l'historique
    this.displayHistory();
  }

  // Afficher l'historique
  displayHistory() {
    const container = document.getElementById('history-container');
    if (!container || !this.currentUser) return;

    const meditations = this.currentUser.meditations || [];

    if (meditations.length === 0) {
      container.innerHTML = '<p class="no-history">Aucune réponse enregistrée pour le moment.</p>';
      return;
    }

    container.innerHTML = meditations.map(med => {
      const date = new Date(med.date).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      return `
        <div class="history-item">
          <div class="history-header">
            <span class="history-verse">${med.verse.reference}</span>
            <span class="history-date">${date}</span>
          </div>
          <div class="history-answers">
            <div class="history-answer">
              <strong>1. Que dit ce passage?</strong>
              <p>${med.answers.answer1}</p>
            </div>
            <div class="history-answer">
              <strong>2. Qu'est-ce que cela signifie?</strong>
              <p>${med.answers.answer2}</p>
            </div>
            <div class="history-answer">
              <strong>3. Comment puis-je l'appliquer?</strong>
              <p>${med.answers.answer3}</p>
            </div>
            <div class="history-answer">
              <strong>4. Avec qui puis-je le partager?</strong>
              <p>${med.answers.answer4}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ============================================
  // NAVIGATION ENTRE LES PAGES
  // ============================================
  
  showLandingPage() {
    document.getElementById('landing-page').style.display = 'block';
    document.getElementById('auth-page').style.display = 'none';
    document.getElementById('app-page').style.display = 'none';
    this.currentPage = 'landing';
    window.scrollTo(0, 0);
  }

  showAuthPage() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('auth-page').style.display = 'block';
    document.getElementById('app-page').style.display = 'none';
    this.currentPage = 'auth';
    window.scrollTo(0, 0);
  }

  showAppPage() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('auth-page').style.display = 'none';
    document.getElementById('app-page').style.display = 'block';
    document.getElementById('main-container').style.display = 'block';
    this.currentPage = 'app';
    
    // Afficher le nom de l'utilisateur
    const currentUserSpan = document.getElementById('current-user');
    if (currentUserSpan && this.currentUser) {
      currentUserSpan.textContent = `${this.currentUser.firstname} ${this.currentUser.lastname}`;
    }

    // Afficher l'historique
    this.displayHistory();
    
    window.scrollTo(0, 0);
  }

  // Vérifier l'authentification au chargement
  checkAuthentication() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
      // Rester sur la landing page par défaut
    }
  }

  // ============================================
  // SYSTÈME DE DONATION
  // ============================================
  
  setupDonationSystem() {
    console.log('🎯 Initialisation du système de donation');
    
    // Tous les boutons de donation
    const donationButtons = [
      'donation-btn',
      'menu-donation-btn', 
      'nav-donation-btn',
      'hero-donation-btn',
      'floating-donation-btn'
    ];
    
    // Modal et contrôles
    const donationModal = document.getElementById('donation-modal');
    const closeDonation = document.getElementById('close-donation');
    const prevBtn = document.getElementById('prev-donation');
    const nextBtn = document.getElementById('next-donation');
    const indicators = document.querySelectorAll('.indicator');
    const imageContainers = document.querySelectorAll('.donation-image-container');
    
    let currentSlide = 0;
    const totalSlides = imageContainers.length;
    
    console.log(`📊 Éléments trouvés: ${totalSlides} images, ${indicators.length} indicateurs`);
    
    // Fonction pour ouvrir le modal
    const openDonationModal = () => {
      console.log('💖 Ouverture du modal de donation');
      if (donationModal) {
        donationModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Fermer les menus ouverts
        const landingMenu = document.getElementById('landing-menu');
        const landingHamburger = document.getElementById('landing-hamburger');
        if (landingMenu && landingMenu.classList.contains('active')) {
          landingMenu.classList.remove('active');
          landingHamburger.classList.remove('active');
        }
        
        // Afficher le premier slide
        setTimeout(() => this.showDonationSlide(0), 200);
        
        this.showNotification('💖 Merci pour votre générosité !', 'success');
      }
    };
    
    // Fonction pour fermer le modal
    const closeDonationModal = () => {
      console.log('❌ Fermeture du modal de donation');
      if (donationModal) {
        donationModal.classList.remove('show');
        document.body.style.overflow = 'auto';
        currentSlide = 0;
      }
    };
    
    // Connecter tous les boutons
    donationButtons.forEach((buttonId, index) => {
      const btn = document.getElementById(buttonId);
      if (btn) {
        console.log(`✅ Bouton ${buttonId} connecté`);
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          console.log(`🎯 Clic sur ${buttonId}`);
          openDonationModal();
        });
      }
    });
    
    // Fermer le modal
    if (closeDonation) {
      closeDonation.addEventListener('click', closeDonationModal);
    }
    
    // Fermer en cliquant à l'extérieur
    if (donationModal) {
      donationModal.addEventListener('click', (e) => {
        if (e.target === donationModal) {
          closeDonationModal();
        }
      });
    }
    
    // Navigation des slides
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
          currentSlide--;
          this.showDonationSlide(currentSlide);
        }
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
          currentSlide++;
          this.showDonationSlide(currentSlide);
        }
      });
    }
    
    // Indicateurs cliquables
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        this.showDonationSlide(currentSlide);
      });
    });
    
    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
      if (!donationModal || !donationModal.classList.contains('show')) return;
      
      if (e.key === 'Escape') {
        closeDonationModal();
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        currentSlide--;
        this.showDonationSlide(currentSlide);
      } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        currentSlide++;
        this.showDonationSlide(currentSlide);
      }
    });
    
    // Support tactile
    let startX = 0;
    if (donationModal) {
      donationModal.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      });
      
      donationModal.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
          if (diff > 0 && currentSlide < totalSlides - 1) {
            currentSlide++;
            this.showDonationSlide(currentSlide);
          } else if (diff < 0 && currentSlide > 0) {
            currentSlide--;
            this.showDonationSlide(currentSlide);
          }
        }
      });
    }
    
    console.log('✅ Système de donation initialisé avec succès');
  }
  
  // Afficher un slide de donation
  showDonationSlide(index) {
    console.log(`🖼️ Affichage du slide ${index + 1}`);
    
    const imageContainers = document.querySelectorAll('.donation-image-container');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prev-donation');
    const nextBtn = document.getElementById('next-donation');
    
    // Mettre à jour les images
    imageContainers.forEach((container, i) => {
      container.classList.remove('active', 'prev');
      if (i < index) {
        container.classList.add('prev');
      } else if (i === index) {
        container.classList.add('active');
      }
    });
    
    // Mettre à jour les indicateurs
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    
    // Mettre à jour les boutons de navigation
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === imageContainers.length - 1;
  }

  // ============================================
  // NOTIFICATIONS
  // ============================================
  
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} show`;
    
    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };
    
    notification.innerHTML = `
      <span class="notification-icon">${icons[type]}</span>
      <span class="notification-message">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Initialiser l'application au chargement
let app;

document.addEventListener('DOMContentLoaded', () => {
  app = new YoungLifeApp();
  window.app = app; // Rendre accessible globalement
});
