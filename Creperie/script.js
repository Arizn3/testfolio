//BOUTON MENU
const back = document.getElementById('btnMenu');
back.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Index/index.html');
});

//FONCTION DE CALCULE
let farine = 63
let lait = 0.1
let sucre = 0.5
let beurre = 13

function addition() {
    let valeur = document.getElementById('nombreOeuf').value;
    let qttFarine = farine * valeur;
    let qttLait = lait + 0.12 * valeur;
    let qttSucre = sucre * valeur;
    let qttBeurre = beurre * valeur;
    if (valeur !== '' && valeur > 0) {
        document.getElementById('farine').innerText = qttFarine.toFixed(1) + "g de farine";
        document.getElementById('lait').innerText = qttLait.toFixed(1) + "litre de lait";
        document.getElementById('sucre').innerHTML = `${qttSucre.toFixed(1)} cuillère de sucre`;
        document.getElementById('beurre').innerHTML = `${qttBeurre.toFixed(1)}g de beurre fondu`;
        aff();
    } else {
        document.getElementById('farine').innerText = 'You need some eggs !';
        document.getElementById('lait').innerText = '';
        document.getElementById('sucre').innerText = '';
        document.getElementById('beurre').innerText = '';
        aff();
    };
};

//BOUTONS ET FONCTIONS INCREMENTATION/DECREMENTATION
function incrementation() {
    let valeur = document.getElementById('nombreOeuf').value;
    valeur++
    document.getElementById('nombreOeuf').value = valeur;
};

function decrementation() {
    let valeur = document.getElementById('nombreOeuf').value;
    if (valeur == 0) {
        return
    } else {
        valeur--
        document.getElementById('nombreOeuf').value = valeur;
    };
};

const incremente = document.getElementById('btnPlus');
incremente.addEventListener('click', () => {
    incrementation();
    addition();
});

const decremente = document.getElementById('btnMoins');
decremente.addEventListener('click', () => {
    decrementation();
    addition();
});

//BOUTON INGREDIENTS
const ingredients = document.getElementById('btnIngredients');
ingredients.addEventListener('click', () => {
    addition();
});

addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        addition();
    };
});

//ANIMATION JS
function aff() {
    const id = document.getElementById('div_resultat')
    id.classList.remove('aff')
    id.classList.add('aff')
};