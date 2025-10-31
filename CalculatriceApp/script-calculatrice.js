const maConnexion = require('./script-conect');

// FONCTION RETOUR
// const retour = document.getElementById('boutonRetour');
// retour.addEventListener('click', () => {
//     location.replace('http://localhost/testfolio/Menu/index.html')
// });

// CLASS CALCULATRICE
class Calculatrice {
    constructor() {
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };
    verifieValeurs(nb) {
        if (this.operateur == '') {
            this.valeurA += nb;
            // document.getElementById('affichage').textContent = `${this.valeurA}`;
        } else {
            this.valeurB += nb;
            // document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur} ${this.valeurB}`;
        };
    };
    verifieOperateur(operateur) {
        this.operateur = operateur;
        // document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur}`;
    };
    envoieExpression() {
        Calcule.calculeExpression(this.valeurA, this.valeurB, this.operateur);
        // RESET
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };
    clear() {
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
        this.resultat = '';
    };
};

// OBJET CALCULE
const Calcule = {
    calculeExpression: (valeurA, valeurB, operateur) => {
        let resultat = '';
        valeurA = parseInt(valeurA);
        valeurB = parseInt(valeurB);
        switch (operateur) {
            case "+":
                resultat = valeurA + valeurB;
                break;
            case "-":
                resultat = valeurA - valeurB;
                break;
            case "*":
                resultat = valeurA * valeurB;
                break;
            case "/":
                resultat = valeurA / valeurB;
                break;
        };
        // HISTORIQUE
        const expression = `${valeurA} ${operateur} ${valeurB} = ${resultat}`;
        envoieHistorique(expression);
        // AFFICHAGE EXPRESSION
        // document.getElementById('affichage').textContent = `${valeurA} ${operateur} ${valeurB} = ${resultat}`;
    },

    envoieHistorique: (expression) => {
        const instanceHistorique = new Historique(expression);
        instanceHistorique.sauvegardeHistorique();
    }
};

// CLASS HISTORIQUE
class Historique {
    constructor(expression) {
        this.expression = expression;
    };
    sauvegardeHistorique() {
        maConnexion.insertionQuery(this.expression);
        recuperationHistorique();
    };

    recuperationHistorique() { };
};

//INSTANCE
const maCalculatrice = new Calculatrice();

// maCalculatrice.verifieValeurs('1');
// maCalculatrice.verifieValeurs('5');
// console.log(maCalculatrice.valeurA);
// maCalculatrice.verifieOperateur('+');
// maCalculatrice.verifieValeurs('2');
// maCalculatrice.verifieValeurs('0');
// console.log(maCalculatrice.operateur);
// console.log(maCalculatrice.valeurB);