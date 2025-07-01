// FONCTION RETOUR
const back = document.getElementById('back');
back.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Index/index.html')
});

// CLASSE CALCULATRICE
class calculatrice {
    // CONSTRUCTEUR
    constructor() {
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };

    // FONCTION POUR CHIFFRES
    verifierValeurs(nb) {
        if (this.operateur == '') {
            this.valeurA += nb;
            console.log(this.valeurA);
            document.getElementById('affichage').textContent = this.valeurA
        } else {
            this.valeurB += nb;
            console.log(this.valeurB);
            document.getElementById('affichage').textContent = this.valeurA + ' ' + this.operateur + ' ' + this.valeurB;
        };
    };

    // FONCTION POUR OPERATEURS
    verifierOperateur(operateur) {
        this.operateur = operateur;
        console.log(this.operateur);
        document.getElementById('affichage').textContent = this.valeurA + ' ' + this.operateur;
    };

    // FONCTION POUR RESULTAT
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
        document.getElementById('affichage').textContent = this.valeurA + ' ' + this.operateur + ' ' + this.valeurB + ' = ' + resultat;
        const gg = document.getElementsByName('nombre');
        gg.forEach(element => {
            element.innerHTML = "°_°";
        });
        // RESET
        console.log(resultat);
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };
};
const maCalculatrice = new calculatrice();