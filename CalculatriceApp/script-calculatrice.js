// FONCTION RETOUR
const retour = document.getElementById('bouton_retour');
retour.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Menu/index.html')
});

// CLASSE CALCULATRICE
class calculatrice {
    constructor() {
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
        this.resultat = '';
    };

    // METHODE POUR LES NOMBRES
    verifie_valeurs(nb) {
        if (this.operateur == '') {
            this.valeurA += nb;
            document.getElementById('affichage').textContent = `${this.valeurA}`;
        } else {
            this.valeurB += nb;
            document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur} ${this.valeurB}`;
        };
    };

    // METHODE POUR OPERATEURS
    verifie_operateur(operateur) {
        this.operateur = operateur;
        document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur}`;
    };

    // METHODE POUR RESULTAT
    operation() {
        this.valeurA = parseInt(this.valeurA);
        this.valeurB = parseInt(this.valeurB);
        switch (this.operateur) {
            case "+":
                this.resultat = this.valeurA + this.valeurB;
                break;
            case "-":
                this.resultat = this.valeurA - this.valeurB;
                break;
            case "*":
                this.resultat = this.valeurA * this.valeurB;
                break;
            case "/":
                this.resultat = this.valeurA / this.valeurB;
                break;
        };

        // AFFICHAGE DE LA REPONSE
        document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur} ${this.valeurB} = ${this.resultat}`;

        // RESET
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
        this.resultat = '';
    };
};

const ma_malculatrice = new calculatrice();