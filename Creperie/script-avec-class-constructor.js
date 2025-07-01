// BOUTON MENU
const back = document.getElementById('btnMenu');
back.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Index/index.html');
});

// CLASSE CREPERIE
class Creperie {

    constructor(id) {
        this.id = id;
        this.valeur = document.getElementById(id).value;

        this.farine = 63;
        this.lait = 0.1;
        this.sucre = 0.5;
        this.beurre = 13;
    };

    addition() {
        this.valeur = document.getElementById(this.id).value;
        let qttFarine = this.farine * this.valeur;
        let qttLait = this.lait + 0.12 * this.valeur;
        let qttSucre = this.sucre * this.valeur;
        let qttBeurre = this.beurre * this.valeur;
        if (this.valeur !== '' && this.valeur > 0) {
            document.getElementById('farine').innerText = qttFarine.toFixed(1) + "g de farine"; // 1ère syntaxe
            document.getElementById('lait').innerText = qttLait.toFixed(1) + "litre de lait";
            document.getElementById('sucre').innerHTML = `${qttSucre.toFixed(1)} cuillère de sucre`; // 2ème syntaxe
            document.getElementById('beurre').innerHTML = `${qttBeurre.toFixed(1)}g de beurre fondu`;
            this.aff();
        } else {
            document.getElementById('farine').innerText = 'You need some eggs !';
            document.getElementById('lait').innerText = '';
            document.getElementById('sucre').innerText = '';
            document.getElementById('beurre').innerText = '';
            this.aff();
        };
    };

    // BOUTONS ET FONCTIONS INCREMENTATION/DECREMENTATION
    incrementation() {
        let plus = document.getElementById(this.id).value;
        plus++;
        document.getElementById(this.id).value = plus;
        this.addition();
    };

    decrementation() {
        if (this.valeur == 0) {
            return
        } else {
            let moins = document.getElementById(this.id).value;
            moins--;
            document.getElementById(this.id).value = moins;
            this.addition();
        };
    };

    // ANIMATION
    aff() {
        const id = document.getElementById('div_resultat');
        id.classList.remove('aff');
        id.classList.add('aff');
    };

};
// Instance
const creperie = new Creperie('nombreOeuf');

// Appel de la méthode incrementale
const incremente = document.getElementById('btnPlus');
incremente.addEventListener('click', () => {
    creperie.incrementation();
});

// Appel de la méthode decrementale
const decremente = document.getElementById('btnMoins');
decremente.addEventListener('click', () => {
    creperie.decrementation();
});

// Appel de la méthode principale par le bouton ingredients
const ingredients = document.getElementById('btnIngredients');
ingredients.addEventListener('click', () => {
    creperie.addition();
});

// Appel de la méthode principale par le bouton 'Enter'
addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        creperie.addition();
    };
});