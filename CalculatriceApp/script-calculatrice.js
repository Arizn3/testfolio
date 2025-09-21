// FONCTION RETOUR
const back = document.getElementById('back');
back.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Menu/index.html')
});

// CLASSE CALCULATRICE
class calculatrice {
    constructor() {
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };

    // METHODE POUR LES NOMBRES
    verifierValeurs(nb) {
        if (this.operateur == '') {
            this.valeurA += nb;
            document.getElementById('affichage').textContent = `${this.valeurA}`;
        } else {
            this.valeurB += nb;
            document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur} ${this.valeurB}`;
        };
    };

    // METHODE POUR OPERATEURS
    verifierOperateur(operateur) {
        this.operateur = operateur;
        document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur}`;
    };

    // METHODE POUR RESULTAT
    operation() {
        let resultat = '';
        this.valeurA = parseInt(this.valeurA);
        this.valeurB = parseInt(this.valeurB);
        switch (this.operateur) {
            case "+":
                resultat = this.valeurA + this.valeurB;
                break;
            case "-":
                resultat = this.valeurA - this.valeurB;
                break;
            case "*":
                resultat = this.valeurA * this.valeurB;
                break;
            case "/":
                resultat = this.valeurA / this.valeurB;
                break;
        };

        // AFFICHAGE DE LA REPONSE
        document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur} ${this.valeurB} = ${resultat}`;

        // RESET
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };
};

const maCalculatrice = new calculatrice();