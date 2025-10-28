//FONCTION BACK
const back = document.getElementById('back');
back.addEventListener('click', () => {
    window.location.replace('http://localhost/testfolio/Menu/index.html');
});

//DATA FONCTIONS
class Data {
    constructor(id) {
        this.id = id;
        this.formulaire = document.getElementById(id);
        this.objData = new FormData(this.formulaire);
        this.array = new Array();
    };
    
    //ENVOIE DANS LE LOCALSTORAGE POUR LE MOMENT
    sendData() {
        this.objData = new FormData(this.formulaire);
        this.objData.forEach((value, key) => {
            if (value !== '') {
                this.array.push([key, value]);
            };
        });
        let JSONarray = JSON.stringify(this.array);
        localStorage.setItem('test', JSONarray)
        document.getElementById('data').reset();
    };
};

const myData = new Data('data');

const enregistrement = document.getElementById('valider');
enregistrement.addEventListener('click', () => {
    myData.sendData();
});

//FONCTIONS D'ANIMATIONS JS/CSS
function getDiv(id) {
    return document.getElementById(id).parentNode
};

function ModifieStyle(id) {
    getDiv(id).classList.add('aff');
};

function removeStyle(id) {
    getDiv(id).classList.remove('aff');
};

const boutonInscription = document.getElementById('changement');
boutonInscription.addEventListener('click', () => {
    document.getElementById('titre').textContent = "Crée ton compte !";
    getDiv('changement').classList.add('disp');
    getDiv('connexion').classList.add('disp');
    ModifieStyle('paragraphe');
    ModifieStyle('valider');
    ModifieStyle('retour');
    ModifieStyle('nom');
    ModifieStyle('age');
});

const boutonBack = document.getElementById('retour');
boutonBack.addEventListener('click', () => {
    document.getElementById('titre').textContent = "Bienvenue !";
    document.getElementById('data').reset();
    getDiv('changement').classList.remove('disp');
    getDiv('connexion').classList.remove('disp');
    removeStyle('paragraphe');
    removeStyle('valider');
    removeStyle('retour');
    removeStyle('nom');
    removeStyle('age');
});