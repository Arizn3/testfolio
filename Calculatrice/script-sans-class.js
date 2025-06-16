//VARIABLES
valeur_A = '';
valeur_B = '';
operateur = '';

//FONCTION POUR CHIFFRES
function verifierValeurs(valeur) {
    if (operateur == '') {
        this.valeur_A += valeur;
        document.getElementById('affichage').textContent = valeur_A;
    } else {
        this.valeur_B += valeur;
        document.getElementById('affichage').textContent = valeur_A + ' ' + operateur + ' ' + valeur_B;
    };
};

//FONCTION POUR OPERATEURS
function verifierOperateur(o) {
    operateur = o;
    document.getElementById('affichage').textContent = valeur_A + ' ' + operateur;
};

//FONCTION POUR RESULTAT
function operation() {
    let resultat = '';
    valeur_A = parseInt(valeur_A);
    valeur_B = parseInt(valeur_B);
    switch (operateur) {
        case "+":
            resultat = valeur_A + valeur_B;
            break;
        case "-":
            resultat = valeur_A - valeur_B;
            break;
        case "*":
            resultat = valeur_A * valeur_B;
            break;
        case "/":
            resultat = valeur_A / valeur_B;
            break;
    };
    //AFFICHAGE DE LA REPONSE
    document.getElementById('affichage').textContent = valeur_A + ' ' + operateur + ' ' + valeur_B + ' = ' + resultat;
    //RESET
    valeur_A = '';
    valeur_B = '';
    operateur = '';
};