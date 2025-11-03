// BOUTON MENU
const retour = document.getElementById('boutonMenu');
retour.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Menu-JavaScript/index.html');
});

// CLASSE CALCULATEUR DE CREPE
class CalculateurDeCrepe {
    constructor(id) {
        this.id = id;
        this.valeur = document.getElementById(id).value;
    };

    farine = 63;
    lait = 0.1;
    sucre = 0.5;
    beurre = 13;

    // FONCTION PRINCIPALE Résultat en fonction du nombre d'œuf
    nombreOeuf() {
        this.valeur = document.getElementById(this.id).value;
        let qttFarine = this.farine * this.valeur;
        let qttLait = this.lait + 0.12 * this.valeur;
        let qttSucre = this.sucre * this.valeur;
        let qttBeurre = this.beurre * this.valeur;
        if (this.valeur !== '' && this.valeur > 0) {
            document.getElementById('farine').innerText = `${qttFarine.toFixed(1)}g de farine`;
            document.getElementById('lait').innerText = `${qttLait.toFixed(1)} litre de lait`;
            document.getElementById('sucre').innerHTML = `${qttSucre.toFixed(1)} cuillère de sucre`;
            document.getElementById('beurre').innerHTML = `${qttBeurre.toFixed(1)}g de beurre fondu`;
            this.affichageResultat();
        } else {
            document.getElementById('farine').innerText = 'Il te faut au moins un œuf !';
            document.getElementById('lait').innerText = '';
            document.getElementById('sucre').innerText = '';
            document.getElementById('beurre').innerText = '';
            this.affichageResultat();
        };
    };

    // BOUTONS ET FONCTIONS boutonIncrementation/boutonDecrementation
    boutonIncrementation() {
        let plus = document.getElementById(this.id).value;
        plus++;
        document.getElementById(this.id).value = plus;
        this.nombreOeuf();
    };

    boutonDecrementation() {
        if (this.valeur == 0) {
            return;
        } else {
            let moins = document.getElementById(this.id).value;
            moins--;
            document.getElementById(this.id).value = moins;
            this.nombreOeuf();
        };
    };

    // ANIMATION CSS
    affichageResultat() {
        const id = document.getElementById('divResultat');
        id.classList.remove('affichageResultat');
        id.classList.add('affichageResultat');
    };
};

// INSTANCE
const instance = new CalculateurDeCrepe('nombreOeuf');

// APPEL DE LA METHODE INCREMENTALE
const incremente = document.getElementById('boutonPlus');
incremente.addEventListener('click', () => {
    instance.boutonIncrementation();
});

// APPEL DE LA METHODE DECREMENTALE
const decremente = document.getElementById('boutonMoins');
decremente.addEventListener('click', () => {
    instance.boutonDecrementation();
});

// APPEL DE LA METHODE PRINCIPALE PAR LE BOUTON INGREDIENT
const ingredients = document.getElementById('boutonIngredients');
ingredients.addEventListener('click', () => {
    instance.nombreOeuf();
});

// APPEL DE LA METHODE PRINCIPALE PAR LE BOUTON 'ENTER'
addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        instance.nombreOeuf();
    };
});