// ============================================
// YOUNGLIFE DRC - Gestionnaire de Versets
// Gestion intelligente des versets quotidiens
// ============================================

class VerseManager {
  constructor() {
    this.currentVerse = null;
    this.verseHistory = this.loadHistory();
    this.init();
  }

  // Initialisation
  init() {
    this.loadDailyVerse();
    this.setupEventListeners();
  }

  // Charger le verset du jour
  loadDailyVerse() {
    const dailyVerse = getDailyVerse();
    this.displayVerse(dailyVerse);
    this.saveToHistory(dailyVerse);
  }

  // Afficher un verset
  displayVerse(verse) {
    this.currentVerse = verse;
    
    // Afficher le texte principal
    const verseText = document.getElementById('verse-text');
    const verseReference = document.getElementById('verse-reference');
    const verseTheme = document.getElementById('verse-theme');
    const meditationImage = document.getElementById('meditation-image');
    
    if (verseText) {
      verseText.textContent = `"${verse.text}"`;
      verseText.style.opacity = '0';
      setTimeout(() => {
        verseText.style.transition = 'opacity 0.5s ease';
        verseText.style.opacity = '1';
      }, 100);
    }
    
    if (verseReference) {
      verseReference.textContent = verse.reference;
      verseReference.style.opacity = '0';
      setTimeout(() => {
        verseReference.style.transition = 'opacity 0.5s ease';
        verseReference.style.opacity = '1';
      }, 200);
    }
    
    if (verseTheme) {
      verseTheme.textContent = `📌 Thème: ${verse.theme}`;
      verseTheme.style.opacity = '0';
      setTimeout(() => {
        verseTheme.style.transition = 'opacity 0.5s ease';
        verseTheme.style.opacity = '1';
      }, 300);
    }
    
    // Charger l'image avec effet de fondu
    if (meditationImage) {
      meditationImage.style.opacity = '0';
      meditationImage.src = verse.imageUrl;
      meditationImage.onload = () => {
        setTimeout(() => {
          meditationImage.style.transition = 'opacity 0.5s ease';
          meditationImage.style.opacity = '1';
        }, 100);
      };
      meditationImage.onerror = () => {
        // Image de secours si l'URL ne fonctionne pas
        meditationImage.src = './IMAGE/IMG_2018 copie.jpg';
      };
    }
    
    // Afficher les versets de soubassement
    this.displaySoubassement(verse.soubassement);
    
    // Mettre à jour le compteur
    this.updateVerseCounter();
  }

  // Afficher les versets de soubassement
  displaySoubassement(soubassement) {
    const container = document.getElementById('related-verses-list');
    if (!container) return;
    
    container.innerHTML = '';
    container.style.opacity = '0';
    
    soubassement.forEach((verse, index) => {
      const verseElement = document.createElement('div');
      verseElement.className = 'related-verse-item';
      verseElement.innerHTML = `
        <span class="related-verse-icon">📖</span>
        <div class="related-verse-content">
          <strong class="related-verse-ref">${verse.ref}</strong>
          <p class="related-verse-text">"${verse.text}"</p>
        </div>
      `;
      
      // Animation d'apparition progressive
      verseElement.style.opacity = '0';
      verseElement.style.transform = 'translateX(-20px)';
      container.appendChild(verseElement);
      
      setTimeout(() => {
        verseElement.style.transition = 'all 0.5s ease';
        verseElement.style.opacity = '1';
        verseElement.style.transform = 'translateX(0)';
      }, 400 + (index * 100));
    });
    
    setTimeout(() => {
      container.style.transition = 'opacity 0.5s ease';
      container.style.opacity = '1';
    }, 400);
  }

  // Mettre à jour le compteur de versets
  updateVerseCounter() {
    const currentNumber = document.getElementById('current-verse-number');
    const totalVerses = document.getElementById('total-verses');
    
    if (currentNumber && this.currentVerse) {
      currentNumber.textContent = this.currentVerse.id;
    }
    
    if (totalVerses) {
      totalVerses.textContent = versesDatabase.length;
    }
  }

  // Charger un nouveau verset aléatoire
  loadNewVerse() {
    const newVerse = getRandomVerse();
    this.displayVerse(newVerse);
    this.saveToHistory(newVerse);
    this.showNotification('✨ Nouveau verset chargé !', 'success');
  }

  // Sauvegarder dans l'historique
  saveToHistory(verse) {
    const today = new Date().toISOString().split('T')[0];
    const historyEntry = {
      date: today,
      verse: verse,
      timestamp: Date.now()
    };
    
    // Éviter les doublons du même jour
    this.verseHistory = this.verseHistory.filter(entry => entry.date !== today);
    this.verseHistory.unshift(historyEntry);
    
    // Garder seulement les 30 derniers jours
    if (this.verseHistory.length > 30) {
      this.verseHistory = this.verseHistory.slice(0, 30);
    }
    
    localStorage.setItem('verseHistory', JSON.stringify(this.verseHistory));
  }

  // Charger l'historique
  loadHistory() {
    const saved = localStorage.getItem('verseHistory');
    return saved ? JSON.parse(saved) : [];
  }

  // Afficher une notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} show`;
    notification.innerHTML = `
      <span class="notification-icon">${this.getNotificationIcon(type)}</span>
      <span class="notification-message">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Obtenir l'icône de notification
  getNotificationIcon(type) {
    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };
    return icons[type] || icons.info;
  }

  // Configurer les écouteurs d'événements
  setupEventListeners() {
    // Bouton nouveau verset
    const newVerseBtn = document.getElementById('new-verse-btn');
    if (newVerseBtn) {
      newVerseBtn.addEventListener('click', () => {
        this.loadNewVerse();
      });
    }

    // Bouton parcourir les versets
    const browseBtn = document.getElementById('browse-verses-btn');
    if (browseBtn) {
      browseBtn.addEventListener('click', () => {
        this.openVerseBrowser();
      });
    }

    // Fermer le navigateur de versets
    const closeBrowser = document.getElementById('close-browser');
    if (closeBrowser) {
      closeBrowser.addEventListener('click', () => {
        this.closeVerseBrowser();
      });
    }

    // Recherche de versets
    const searchInput = document.getElementById('search-verses');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }
  }

  // Ouvrir le navigateur de versets
  openVerseBrowser() {
    const modal = document.getElementById('bible-browser-modal');
    if (modal) {
      modal.style.display = 'flex';
      this.populateVerseBrowser();
    }
  }

  // Fermer le navigateur de versets
  closeVerseBrowser() {
    const modal = document.getElementById('bible-browser-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Remplir le navigateur de versets
  populateVerseBrowser() {
    const grid = document.getElementById('verses-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    versesDatabase.forEach(verse => {
      const card = this.createVerseCard(verse);
      grid.appendChild(card);
    });
  }

  // Créer une carte de verset
  createVerseCard(verse) {
    const card = document.createElement('div');
    card.className = 'verse-card';
    card.innerHTML = `
      <div class="verse-card-header">
        <span class="verse-number">Jour ${verse.id}</span>
        <span class="verse-card-theme">${verse.theme}</span>
      </div>
      <p class="verse-card-ref">${verse.reference}</p>
      <p class="verse-card-text">${verse.text.substring(0, 150)}...</p>
      <button class="btn-select-verse" data-verse-id="${verse.id}">
        📖 Méditer ce verset
      </button>
    `;
    
    const selectBtn = card.querySelector('.btn-select-verse');
    selectBtn.addEventListener('click', () => {
      this.displayVerse(verse);
      this.closeVerseBrowser();
      this.showNotification('Verset sélectionné pour méditation', 'success');
      
      // Scroll vers le verset
      document.getElementById('verse')?.scrollIntoView({ behavior: 'smooth' });
    });
    
    return card;
  }

  // Gérer la recherche
  handleSearch(query) {
    if (!query.trim()) {
      this.populateVerseBrowser();
      return;
    }
    
    const results = searchVerses(query);
    const grid = document.getElementById('verses-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (results.length === 0) {
      grid.innerHTML = '<p style="text-align: center; padding: 40px; color: #999;">Aucun verset trouvé</p>';
      return;
    }
    
    results.forEach(verse => {
      const card = this.createVerseCard(verse);
      grid.appendChild(card);
    });
  }

  // Obtenir le verset actuel
  getCurrentVerse() {
    return this.currentVerse;
  }

  // Obtenir l'historique
  getHistory() {
    return this.verseHistory;
  }
}

// Initialiser le gestionnaire au chargement de la page
let verseManager;

document.addEventListener('DOMContentLoaded', () => {
  verseManager = new VerseManager();
  
  // Rendre accessible globalement
  window.verseManager = verseManager;
});

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VerseManager;
}
