// DIV RETOUR
const back = document.getElementById('back');
back.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Menu/index.html')
});

// VARIABLES
valeur_A = '';
valeur_B = '';
operateur = '';

// FONCTION POUR LES NOMBRES
function verifierValeurs(valeur) {
    if (operateur == '') {
        valeur_A += valeur;
        document.getElementById('affichage').textContent = valeur_A;
    } else {
        valeur_B += valeur;
        document.getElementById('affichage').textContent = valeur_A + ' ' + operateur + ' ' + valeur_B;
    };
};

// FONCTION POUR OPERATEUR
function verifierOperateur(o) {
    operateur = o;
    document.getElementById('affichage').textContent = valeur_A + ' ' + operateur;
};

// FONCTION POUR RESULTAT
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
    // AFFICHAGE DU RESULTAT
    document.getElementById('affichage').textContent = valeur_A + ' ' + operateur + ' ' + valeur_B + ' = ' + resultat;
    // RESET
    valeur_A = '';
    valeur_B = '';
    operateur = '';
};