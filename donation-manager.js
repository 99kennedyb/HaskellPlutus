// ============================================
// YOUNGLIFE DRC - GESTIONNAIRE DE DONATION
// Système complet de gestion des donations
// ============================================

class DonationManager {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 0;
    this.isModalOpen = false;
    this.init();
  }

  // Initialisation du système de donation
  init() {
    console.log('💖 Initialisation du gestionnaire de donation');
    
    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  // Configuration du système
  setup() {
    this.setupElements();
    this.setupEventListeners();
    this.setupKeyboardNavigation();
    this.setupTouchNavigation();
    this.validateImages();
    
    console.log('✅ Gestionnaire de donation configuré avec succès');
  }

  // Configuration des éléments
  setupElements() {
    // Boutons de donation
    this.donationButtons = [
      'donation-btn',
      'menu-donation-btn', 
      'nav-donation-btn',
      'hero-donation-btn',
      'floating-donation-btn'
    ];

    // Éléments du modal
    this.modal = document.getElementById('donation-modal');
    this.modalContent = document.querySelector('.donation-modal-content');
    this.closeBtn = document.getElementById('close-donation');
    this.prevBtn = document.getElementById('prev-donation');
    this.nextBtn = document.getElementById('next-donation');
    this.indicators = document.querySelectorAll('.indicator');
    this.imageContainers = document.querySelectorAll('.donation-image-container');
    
    this.totalSlides = this.imageContainers.length;
    
    console.log(`📊 Éléments configurés: ${this.totalSlides} images, ${this.indicators.length} indicateurs`);
  }

  // Configuration des événements
  setupEventListeners() {
    // Connecter tous les boutons de donation
    this.donationButtons.forEach((buttonId, index) => {
      const btn = document.getElementById(buttonId);
      if (btn) {
        console.log(`✅ Bouton ${buttonId} connecté`);
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openModal();
        });
      }
    });

    // Fermeture du modal
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeModal());
    }

    // Fermer en cliquant à l'extérieur
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });
    }

    // Navigation des slides
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.previousSlide());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // Indicateurs cliquables
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
      indicator.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.goToSlide(index);
        }
      });
    });
  }

  // Navigation au clavier
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (!this.isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          this.closeModal();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.previousSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.nextSlide();
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.totalSlides - 1);
          break;
      }
    });
  }

  // Navigation tactile
  setupTouchNavigation() {
    let startX = 0;
    let startY = 0;

    if (this.modal) {
      this.modal.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }, { passive: true });

      this.modal.addEventListener('touchend', (e) => {
        if (!this.isModalOpen) return;

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;

        // Vérifier que c'est un swipe horizontal
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
          if (diffX > 0) {
            this.nextSlide();
          } else {
            this.previousSlide();
          }
        }
      }, { passive: true });
    }
  }

  // Validation des images
  validateImages() {
    const images = document.querySelectorAll('.donation-image');
    let loadedImages = 0;

    images.forEach((img, index) => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          console.log(`✅ Image ${index + 1} chargée`);
        });
        
        img.addEventListener('error', () => {
          console.warn(`⚠️ Erreur de chargement de l'image ${index + 1}: ${img.src}`);
          // Remplacer par une image par défaut ou un placeholder
          img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIGRlIGRvbmF0aW9uPC90ZXh0Pjwvc3ZnPg==';
        });
      }
    });

    console.log(`📸 ${loadedImages}/${images.length} images validées`);
  }

  // Ouvrir le modal
  openModal() {
    console.log('💖 Ouverture du modal de donation');
    
    if (!this.modal) {
      console.error('❌ Modal de donation non trouvé');
      return;
    }

    this.isModalOpen = true;
    this.modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Fermer les menus ouverts
    this.closeOpenMenus();

    // Afficher le premier slide avec un délai pour l'animation
    setTimeout(() => {
      this.goToSlide(0);
      this.focusModal();
    }, 200);

    // Notification de bienvenue
    this.showNotification('💖 Merci pour votre générosité !', 'success');

    // Analytics (si disponible)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'donation_modal_opened', {
        event_category: 'donation',
        event_label: 'modal_opened'
      });
    }
  }

  // Fermer le modal
  closeModal() {
    console.log('❌ Fermeture du modal de donation');
    
    if (!this.modal) return;

    this.isModalOpen = false;
    this.modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    this.currentSlide = 0;

    // Remettre le focus sur le bouton qui a ouvert le modal
    const activeButton = document.querySelector('.donation-btn:focus, .menu-donation-btn:focus, .nav-donation-btn:focus, .btn-donation-hero:focus, #floating-donation-btn:focus');
    if (activeButton) {
      activeButton.focus();
    }
  }

  // Aller au slide précédent
  previousSlide() {
    if (this.currentSlide > 0) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  // Aller au slide suivant
  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  // Aller à un slide spécifique
  goToSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;

    console.log(`🖼️ Affichage du slide ${index + 1}/${this.totalSlides}`);

    this.currentSlide = index;

    // Mettre à jour les images
    this.imageContainers.forEach((container, i) => {
      container.classList.remove('active', 'prev');
      if (i < index) {
        container.classList.add('prev');
      } else if (i === index) {
        container.classList.add('active');
      }
    });

    // Mettre à jour les indicateurs
    this.indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
      indicator.setAttribute('aria-selected', i === index);
    });

    // Mettre à jour les boutons de navigation
    if (this.prevBtn) {
      this.prevBtn.disabled = index === 0;
      this.prevBtn.setAttribute('aria-disabled', index === 0);
    }
    
    if (this.nextBtn) {
      this.nextBtn.disabled = index === this.totalSlides - 1;
      this.nextBtn.setAttribute('aria-disabled', index === this.totalSlides - 1);
    }

    // Annoncer le changement pour les lecteurs d'écran
    this.announceSlideChange(index);
  }

  // Fermer les menus ouverts
  closeOpenMenus() {
    const landingMenu = document.getElementById('landing-menu');
    const landingHamburger = document.getElementById('landing-hamburger');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');

    if (landingMenu && landingMenu.classList.contains('active')) {
      landingMenu.classList.remove('active');
      landingHamburger.classList.remove('active');
    }

    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  }

  // Mettre le focus sur le modal
  focusModal() {
    if (this.closeBtn) {
      this.closeBtn.focus();
    }
  }

  // Annoncer le changement de slide pour l'accessibilité
  announceSlideChange(index) {
    const announcement = `Image ${index + 1} sur ${this.totalSlides}`;
    
    // Créer un élément pour l'annonce
    let announcer = document.getElementById('slide-announcer');
    if (!announcer) {
      announcer = document.createElement('div');
      announcer.id = 'slide-announcer';
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.style.position = 'absolute';
      announcer.style.left = '-10000px';
      announcer.style.width = '1px';
      announcer.style.height = '1px';
      announcer.style.overflow = 'hidden';
      document.body.appendChild(announcer);
    }
    
    announcer.textContent = announcement;
  }

  // Afficher une notification
  showNotification(message, type = 'info') {
    // Utiliser le système de notification de l'app principale si disponible
    if (window.app && typeof window.app.showNotification === 'function') {
      window.app.showNotification(message, type);
      return;
    }

    // Système de notification de secours
    const notification = document.createElement('div');
    notification.className = `donation-notification donation-notification-${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      z-index: 10001;
      transform: translateX(400px);
      transition: transform 0.3s ease;
      border-left: 4px solid #ff6b6b;
      max-width: 300px;
    `;

    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };

    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.2em;">${icons[type] || icons.info}</span>
        <span style="color: #333; font-weight: 500;">${message}</span>
      </div>
    `;

    document.body.appendChild(notification);

    // Animer l'entrée
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Supprimer après 3 secondes
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Méthodes publiques pour l'API
  open() {
    this.openModal();
  }

  close() {
    this.closeModal();
  }

  next() {
    this.nextSlide();
  }

  previous() {
    this.previousSlide();
  }

  goto(index) {
    this.goToSlide(index);
  }

  // Obtenir l'état actuel
  getState() {
    return {
      isOpen: this.isModalOpen,
      currentSlide: this.currentSlide,
      totalSlides: this.totalSlides
    };
  }
}

// Initialiser le gestionnaire de donation
let donationManager;

// Auto-initialisation
if (typeof window !== 'undefined') {
  donationManager = new DonationManager();
  
  // Rendre accessible globalement
  window.donationManager = donationManager;
  
  console.log('🎯 Gestionnaire de donation initialisé et disponible globalement');
}

// Export pour les modules (si utilisé)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DonationManager;
}