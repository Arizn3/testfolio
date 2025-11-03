// CREATION DES CARTES DANS UN TABLEAU
const cartes = [
    'https://picsum.photos/id/10/100/100',
    'https://picsum.photos/id/11/100/100',
    'https://picsum.photos/id/12/100/100',
    'https://picsum.photos/id/13/100/100',
    'https://picsum.photos/id/14/100/100',
    'https://picsum.photos/id/15/100/100',
    'https://picsum.photos/id/16/100/100',
    'https://picsum.photos/id/17/100/100'
];

const tableauDeJeu = document.getElementById('tableauDeJeu');
let cartesSelectionner = [];

// FONCTIONN QUI CREE LES ELEMENTS EN APPELANT LES BONNES CLASSES CSS
function creationCartes(url) {
    // CREATION D'UNE BALISE <DIV>
    const carte = document.createElement('div');
    carte.classList.add('carte')
    carte.dataset.value = url;

    // CREATION D'UNE BALISE <IMG>
    const imageCarte = document.createElement('img');
    imageCarte.classList.add('imageCarte');
    imageCarte.src = `${url}`;

    // METHODE APPENDCHILD DE L'OBJET NODE
    carte.appendChild(imageCarte);

    // APPEL DE LA FONCTION POUR LE CLICK 
    carte.addEventListener('click', carteCliquer)

    return carte;
}

// FONCTION QUI DUPLIQUE CHAQUE ELEMENT DU TABLEAU INITIAL (CARTES)
function doubleListe(listeSimple) {
    let listeDouble = [];
    listeDouble.push(...listeSimple);
    listeDouble.push(...listeSimple);
    return listeDouble;
};

// FONCTION QUI MELANGE LES ELEMENTS (CARTES) DANS LE TABLEAU 
function melangeCartes(liste) {
    const melangeListe = liste.sort(() => 0.5 - Math.random());
    return liste;
};

// FONCTION POUR L'EVENEMENT QUI VIENT AJOUTER LA COMPARAISON
// DES ELEMENTS (CARTES), ET QUI AGIS EN CONSEQUENCE :
function carteCliquer(event) {
    const carte = event.target.parentElement;
    carte.classList.add("flip");

    cartesSelectionner.push(carte);

    if (cartesSelectionner.length == 2) {
        // COMPARAISON ENTRE LES VALEUR DATASET (URL DES IMAGES)
        setTimeout(() => {
            if (cartesSelectionner[0].dataset.value == cartesSelectionner[1].dataset.value) {
                // PAIRE TROUVEE
                cartesSelectionner[0].classList.add("matched");
                cartesSelectionner[1].classList.add("matched");
                // METHODE REMOVE POUR ENELVER UN EVENEMENT
                cartesSelectionner[0].removeEventListener('click', carteCliquer);
                cartesSelectionner[1].removeEventListener('click', carteCliquer);
                // FONCTION QUI RECUPERE LE NOMBRE D'ELEMENTS CARTES SANS LA CLASSE MATCHED
                const carteRestante = document.querySelectorAll('.carte:not(.matched)');
                if (carteRestante.length == 0) {
                    alert(`Gagner ! Temps : 0:00`)
                }
            } else {
                // FALSE
                cartesSelectionner[0].classList.remove("flip");
                cartesSelectionner[1].classList.remove("flip");
            };
            cartesSelectionner = [];
        }, 1000);
    };
};

let jeuComplet = doubleListe(cartes);
// APPEL DU MÊME RESULTAT MAIS AVEC LA FONCTION MELANGE
jeuComplet = melangeCartes(jeuComplet);

// APPEL DE LA METHODE DE CREATION HTML AVEC CHAQUE CARTES DU TABLEAU MELANGER
jeuComplet.forEach(carte => {
    const carteHTML = creationCartes(carte);
    tableauDeJeu.appendChild(carteHTML);
});