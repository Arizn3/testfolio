// DIV RETOUR
const back = document.getElementById('back');
back.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Index/index.html')
});

// CLASSE CALCULATRICE
class calculatrice {
    // PROPRIETES STATIQUES
    static valeur_A = '';
    static valeur_B = '';
    static operateur = '';

    // FONCTION POUR CHIFFRES
    static verifierValeurs(valeur) {
        if (this.operateur == '') {
            this.valeur_A += valeur;
            console.log(this.valeur_A);
            this.valeur_A = parseInt(this.valeur_A)
            console.log(this.valeur_A);
            document.getElementById('affichage').textContent = this.valeur_A;
        } else {
            this.valeur_B += valeur;
            this.valeur_B = parseInt(this.valeur_B)
            document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur + ' ' + this.valeur_B;
        };
    };

    // FONCTION POUR OPERATEURS
    static verifierOperateur(operateur) {
        this.operateur = operateur;
        document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur;
    };

    // FONCTION POUR RESULTAT
    static operation() {
        let resultat = '';
        switch (this.operateur) {
            case "+":
                resultat = this.valeur_A + this.valeur_B;
                break;
            case "-":
                resultat = this.valeur_A - this.valeur_B;
                break;
            case "*":
                resultat = this.valeur_A * this.valeur_B;
                break;
            case "/":
                resultat = this.valeur_A / this.valeur_B;
                break;
        };
        // AFFICHAGE DE LA REPONSE
        document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur + ' ' + this.valeur_B + ' = ' + resultat;
        // RESET
        this.valeur_A = '';
        this.valeur_B = '';
        this.operateur = '';
    };
};