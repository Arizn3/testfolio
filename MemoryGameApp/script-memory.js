// CREATION DES CARDS DANS UN TABLEAU
const cards = [
    'https://picsum.photos/id/10/100/100',
    'https://picsum.photos/id/11/100/100',
    'https://picsum.photos/id/12/100/100',
    'https://picsum.photos/id/13/100/100',
    'https://picsum.photos/id/14/100/100',
    'https://picsum.photos/id/15/100/100',
    'https://picsum.photos/id/16/100/100',
    'https://picsum.photos/id/17/100/100'
];

const gameBoard = document.getElementById('game-board');
let selectedCards = [];

// FONCTIONN QUI CREE LES ELEMENTS EN APPELANT LES BONNES CLASSES CSS
function createCard(url) {
    // CREATION D'UNE BALISE <DIV>
    const card = document.createElement('div');
    card.classList.add('card')
    card.dataset.value = url;

    // CREATION D'UNE BALISE <IMG>
    const cardContent = document.createElement('img');
    cardContent.classList.add('card-content');
    cardContent.src = `${url}`;

    // METHODE APPENDCHILD DE L'OBJET NODE
    card.appendChild(cardContent);

    // APPEL DE LA FONCTION POUR LE CLICK 
    card.addEventListener('click', onCardClick)

    return card;
}

// FONCTION QUI DUPLIQUE CHAQUE ELEMENT DU TABLEAU INITIAL (CARTES)
function duplicateArray(arraySimple) {
    let arrayDouble = [];
    arrayDouble.push(...arraySimple);
    arrayDouble.push(...arraySimple);
    return arrayDouble;
};

// FONCTION QUI MELANGE LES ELEMENTS (CARTES) DANS LE TABLEAU 
function Melange(array) {
    const arrayMelanger = array.sort(() => 0.5 - Math.random());
    return array;
};

// FONCTION POUR L'EVENEMENT QUI VIENT AJOUTER LA COMPARAISON
// DES ELEMENTS (CARTES), ET QUI AGIS EN CONSEQUENCE :
function onCardClick(event) {
    const card = event.target.parentElement;
    card.classList.add("flip");

    selectedCards.push(card);

    if (selectedCards.length == 2) {
        // COMPARAISON ENTRE LES VALEUR DATASET (URL DES IMAGES)
        setTimeout(() => {
            if (selectedCards[0].dataset.value == selectedCards[1].dataset.value) {
                // PAIRE TROUVEE
                selectedCards[0].classList.add("matched");
                selectedCards[1].classList.add("matched");
                // METHODE REMOVE POUR ENELVER UN EVENEMENT
                selectedCards[0].removeEventListener('click', onCardClick);
                selectedCards[1].removeEventListener('click', onCardClick);
                // FONCTION QUI RECUPERE LE NOMBRE D'ELEMENTS CARDS SANS LA CLASSE MATCHED
                const carteRestante = document.querySelectorAll('.card:not(.matched)');
                if (carteRestante.length == 0) {
                    alert(`Gagner ! Temps : 0:00`)
                }
            } else {
                // FALSE
                selectedCards[0].classList.remove("flip");
                selectedCards[1].classList.remove("flip");
            };
            selectedCards = [];
        }, 1000);
    };
};

let allCards = duplicateArray(cards);
// APPEL DU MÊME RESULTAT MAIS AVEC LA FONCTION MELANGE
allCards = Melange(allCards);

// APPEL DE LA METHODE DE CREATION HTML AVEC CHAQUE CARTES DU TABLEAU MELANGER
allCards.forEach(card => {
    const cardHtml = createCard(card);
    gameBoard.appendChild(cardHtml);
});