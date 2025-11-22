// IMPORT DE L'INSTANCE DE LA CLASS OPEN WEATHER DU FICHIER CLASS_API
import { API } from "./class_api.js";
// IMPORT DE L'INSTANCE DE LA CLASS DECORATEUR DU FICHIER CLASS_DECORATEUR
import { classDecorateur } from "./class_decorateur.js";

// BOUTON RETOUR AU MENU
const retour_menu = document.getElementById('boutonMenu');
retour_menu.addEventListener('click', () => {
    location.replace('/Users/lucas/Documents/Projets/App-Front/Menu-JavaScript/index.html');
});

// APPEL DE LA METHODE PRINCIPALE DE LA CLASS OPEN WEATHER
const boutonRecherche = document.getElementById('boutonRecherche');

boutonRecherche.addEventListener('click', () => {
    API.afficheTemperature();
});
addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        API.afficheTemperature();
    };
});

// APPEL DES METHODES DE LA CLASS DECORATEUR
// APPEL DU DARKMODE
const choixA = document.getElementById('darkMode');
choixA.addEventListener('change', () => {
    classDecorateur.darkMode();
});
// APPEL DU MODE COULEUR
const choixB = document.getElementById('colorMode');
choixB.addEventListener('change', () => {
    classDecorateur.mode_couleur();
});
// APPEL DE LA FONCTION CHOIX DE COULEURS AVEC CONDITIONS
const boutonCouleur = document.getElementById('choixCouleurs')
boutonCouleur.addEventListener('input', () => {
    classDecorateur.choixCouleurs();
});