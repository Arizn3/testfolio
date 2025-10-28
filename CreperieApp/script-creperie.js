// BOUTON MENU
const retour = document.getElementById('bouton_menu');
retour.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Menu/index.html');
});

// CLASSE CALCULATEUR DE CREPE
class calculateur_de_crepe {
    constructor(id) {
        this.id = id;
        this.valeur = document.getElementById(id).value;
    };

    farine = 63;
    lait = 0.1;
    sucre = 0.5;
    beurre = 13;

    // FONCTION PRINCIPALE Résultat en fonction du nombre d'œuf
    nombre_oeuf() {
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
            this.affichage_resultat();
        } else {
            document.getElementById('farine').innerText = 'Il te faut au moins un œuf !';
            document.getElementById('lait').innerText = '';
            document.getElementById('sucre').innerText = '';
            document.getElementById('beurre').innerText = '';
            this.affichage_resultat();
        };
    };

    // BOUTONS ET FONCTIONS bouton_incrementation/bouton_decrementation
    bouton_incrementation() {
        let plus = document.getElementById(this.id).value;
        plus++;
        document.getElementById(this.id).value = plus;
        this.nombre_oeuf();
    };

    bouton_decrementation() {
        if (this.valeur == 0) {
            return;
        } else {
            let moins = document.getElementById(this.id).value;
            moins--;
            document.getElementById(this.id).value = moins;
            this.nombre_oeuf();
        };
    };

    // ANIMATION CSS
    affichage_resultat() {
        const id = document.getElementById('div_resultat');
        id.classList.remove('affichage_resultat');
        id.classList.add('affichage_resultat');
    };
};

// INSTANCE
const instance = new calculateur_de_crepe('nombre_oeuf');

// APPEL DE LA METHODE INCREMENTALE
const incremente = document.getElementById('bouton_plus');
incremente.addEventListener('click', () => {
    instance.bouton_incrementation();
});

// APPEL DE LA METHODE DECREMENTALE
const decremente = document.getElementById('bouton_moins');
decremente.addEventListener('click', () => {
    instance.bouton_decrementation();
});

// APPEL DE LA METHODE PRINCIPALE PAR LE BOUTON INGREDIENT
const ingredients = document.getElementById('bouton_ingredients');
ingredients.addEventListener('click', () => {
    instance.nombre_oeuf();
});

// APPEL DE LA METHODE PRINCIPALE PAR LE BOUTON 'ENTER'
addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        instance.nombre_oeuf();
    };
});