class calculatrice {
    //PROPRIETES STATIQUES
    static valeur_A = '';
    static valeur_B = '';
    static operateur = '';
    static resultat = '';
    //FONCTION STATIQUE POUR CHIFFRES
    static verifierValeurs(valeur) {
        if (this.operateur == '') {
            this.valeur_A += valeur;
            document.getElementById('affichage').textContent = this.valeur_A;
        }
        else if (this.operateur == '+' || '-' || '*' || '/') {
            this.valeur_B += valeur;
            document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur + ' ' + this.valeur_B;
        }
    }
    //FONCTION STATQUE POUR OPERATEURS
    static verifierOperateur(operateur) {
        this.operateur = operateur;
        document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur;
    }
    //FONCTION STATIQUE POUR RESULTAT
    static operation() {
        this.valeur_A = parseInt(this.valeur_A);
        this.valeur_B = parseInt(this.valeur_B);
        switch (this.operateur) {
            case "+":
                this.resultat = this.valeur_A + this.valeur_B;
                break;
            case "-":
                this.resultat = this.valeur_A - this.valeur_B;
                break;
            case "*":
                this.resultat = this.valeur_A * this.valeur_B;
                break;
            case "/":
                this.resultat = this.valeur_A / this.valeur_B;
                break;
            default:
                break;
        }
        //AFFICHAGE DE LA REPONSE
        document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur + ' ' + this.valeur_B + ' = ' + this.resultat;
        //RÉINITIALISATION
        this.valeur_A = '';
        this.valeur_B = '';
        this.operateur = '';
    }
}