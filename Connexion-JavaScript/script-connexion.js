//RETOUR AU MENU
const retour = document.getElementById('retourMenu');
retour.addEventListener('click', () => {
    window.location.replace('http://localhost/testfolio/Menu-JavaScript/index.html');
});

//FORMULAIRE FONCTIONS
class Formulaire {
    constructor(id) {
        this.id = id;
        this.formulaire = document.getElementById(id);
        this.objetFormulaire = new FormData(this.formulaire);
        this.liste = new Array();
    };

    //ENVOIE DANS LE LOCALSTORAGE POUR LE MOMENT
    envoieFormulaire() {
        this.objetFormulaire = new FormData(this.formulaire);
        this.objetFormulaire.forEach((value, key) => {
            if (value !== '') {
                this.liste.push([key, value]);
            };
        });
        let JSONListe = JSON.stringify(this.liste);
        localStorage.setItem('test', JSONListe)
        document.getElementById('formulaire').reset();
    };
};

const monFormulaire = new Formulaire('formulaire');

const enregistrement = document.getElementById('valider');
enregistrement.addEventListener('click', () => {
    monFormulaire.envoieFormulaire();
});

//FONCTIONS D'ANIMATIONS JS/CSS
function recupereDiv(id) {
    return document.getElementById(id).parentNode
};

function modifieStyle(id) {
    recupereDiv(id).classList.add('aff');
};

function removeStyle(id) {
    recupereDiv(id).classList.remove('aff');
};

const boutonInscription = document.getElementById('changement');
boutonInscription.addEventListener('click', () => {
    document.getElementById('titre').textContent = "Crée ton compte !";
    recupereDiv('changement').classList.add('disp');
    recupereDiv('connexion').classList.add('disp');
    modifieStyle('paragraphe');
    modifieStyle('valider');
    modifieStyle('retour');
    modifieStyle('nom');
    modifieStyle('age');
});

const boutonBack = document.getElementById('retour');
boutonBack.addEventListener('click', () => {
    document.getElementById('titre').textContent = "Bienvenue !";
    document.getElementById('formulaire').reset();
    recupereDiv('changement').classList.remove('disp');
    recupereDiv('connexion').classList.remove('disp');
    removeStyle('paragraphe');
    removeStyle('valider');
    removeStyle('retour');
    removeStyle('nom');
    removeStyle('age');
});