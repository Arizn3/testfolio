// creation des cards dans un tableau 
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

// fonction qui crée les éléments en appelant les bonnes classe CSS
function createCard(url) {
    // création d'une <div>
    const card = document.createElement('div');
    card.classList.add('card')
    card.dataset.value = url;

    // création d'une <img>
    const cardContent = document.createElement('img');
    cardContent.classList.add('card-content');
    cardContent.src = `${url}`;

    // méthode appendChild de l'objet node
    card.appendChild(cardContent);

    // appel de la fonction pour le click 
    card.addEventListener('click', onCardClick)

    return card;
}

// fonction qui duplique chaque élément du tableau initial (cartes)
function duplicateArray(arraySimple) {
    let arrayDouble = [];
    arrayDouble.push(...arraySimple);
    arrayDouble.push(...arraySimple);
    return arrayDouble;
};

// fonction qui mélange les éléments (cartes) dans le tableau
function Melange(array) {
    const arrayMelanger = array.sort(() => 0.5 - Math.random());
    return array;
};

// fonction pour l'évenement, qui vient ajouter la comparaison
// des éléments (cartes), et qui agis en conséquence :
function onCardClick(event) {
    const card = event.target.parentElement;
    card.classList.add("flip");

    selectedCards.push(card);

    if (selectedCards.length == 2) {
        // on demande la comparaison entre la valeur dataset qui est
        // tout simplement l'URL de l'image.
        // on utilise une méthode de l'objet Window pour rajouter
        // un lap's de temps.
        setTimeout(() => {
            if (selectedCards[0].dataset.value == selectedCards[1].dataset.value) {
                // paire trouvé
                selectedCards[0].classList.add("matched");
                selectedCards[1].classList.add("matched");
                // méthode removeEventListener pour enlever un evenement
                selectedCards[0].removeEventListener('click', onCardClick);
                selectedCards[1].removeEventListener('click', onCardClick);
                // fonction qui récupère le nombre d'élément cards sans
                // la classe matched
                const carteRestante = document.querySelectorAll('.card:not(.matched)');
                if (carteRestante.length == 0) {
                    alert(`Gagner ! Temps : 0:00`)
                }
            } else {
                // false
                selectedCards[0].classList.remove("flip");
                selectedCards[1].classList.remove("flip");
            };
            selectedCards = [];
        }, 1000);
    };
};

let allCards = duplicateArray(cards);
// On appel le même résultat mais avec la fonction melange
allCards = Melange(allCards);

// appel de la méthode de création HTML avec chaque cartes du tableau mélanger
allCards.forEach(card => {
    const cardHtml = createCard(card);
    gameBoard.appendChild(cardHtml);
});

// timer

