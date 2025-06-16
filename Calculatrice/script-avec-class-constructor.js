class calculatrice {
    //CONSTRUCTEUR
    constructor() {
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };

    //FONCTION POUR CHIFFRES
    verifierValeurs(nb) {
        if (this.operateur == '') {
            this.valeurA += nb;
            console.log(this.valeurA);
        } else {
            this.valeurB += nb;
            console.log(this.valeurB);
        };
    };

    //FONCTION POUR OPERATEURS
    verifierOperateur(operateur) {
        this.operateur = operateur;
        console.log(this.operateur);
    };

    //FONCTION POUR RESULTAT
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
        //AFFICHAGE DE LA REPONSE
        const gg = document.getElementsByName('nombre');
        gg.forEach(element => {
            element.innerHTML = "°_°";
        });
        //RESET
        console.log(resultat);
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };
};
const maCalculatrice = new calculatrice();