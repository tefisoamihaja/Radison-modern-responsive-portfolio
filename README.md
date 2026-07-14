Responsive Portfolio Website 

Un site web de portfolio moderne, élégant et entièrement responsive, conçu à des fins d'**apprentissage des fondamentaux du développement web mobile-first**. 


---

Objectifs d'Apprentissage

Ce projet pratique a été conçu pour maîtriser deux piliers essentiels du développement web moderne :

1. Le Responsive Design (CSS3)
*   **Approche Mobile-First :** Concevoir une interface qui s'adapte dynamiquement de l'écran d'un smartphone aux grands écrans d'ordinateurs.
*   **Media Queries :** Ajuster les grilles (`Grid`), les alignements (`Flexbox`) et la taille des typographies selon la largeur du viewport.
*   **Positionnement Absolu/Fixe :** Masquer proprement le menu de navigation hors de l'écran (`left: -100%`) pour le révéler de manière fluide.

### 2. Le JavaScript Dynamique (DOM Manipulation)
*   **Sélection d'éléments :** Utilisation de `document.querySelector` pour lier le code HTML au script.
*   **Gestion des Événements (`Event Listeners`) :** Déclencher des actions lors du clic sur l'icône de menu (bouton hamburger).
*   **Toggle de Classes CSS :** Utilisation de la méthode `.classList.toggle('open')` pour modifier dynamiquement l'état du menu (ouvert/fermé) sans recharger la page.

---

##  Fonctionnalités du Projet

*   **Menu Hamburger Interactif :** Une navigation fluide pensée pour l'expérience utilisateur sur mobile.
*   **Transitions Soignées :** Effets de glissement et d'apparition en CSS lors de l'ouverture du menu.
*   **Design Épuré & Professionnel :** Sections structurées pour présenter des services, compétences et projets.

---

##  Technologies Utilisées

*   **HTML5** : Structuration sémantique du contenu de la page.
*   **CSS3** : Variables CSS, Flexbox, Grid, transitions fluides et media queries.
*   **JavaScript (Vanilla)** : Logique d'interaction pour le menu responsive.

---

##  Structure du Projet

```text
├── index.html          # Structure HTML5 sémantique
├── style.css           # Styles globaux, responsive (media queries) et animations
├── script.js           # Logique JavaScript (manipulation du DOM)
└── assets/             # Images et icônes du projet
