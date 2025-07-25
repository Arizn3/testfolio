// DIV RETOUR
// const back = document.getElementById('back');
// back.addEventListener('click', () => {
//     location.replace('http://localhost/testfolio/Index/index.html')
// });

// VARIABLES
let valeur_A:string = '';
let valeur_B:string = '';
let operateur:string = '';

// FONCTION POUR LES NOMBRES
function btnNombres(valeur) {
    if (operateur === '') {
        valeur_A += valeur;
        // document.getElementById('affichage').textContent = valeur_A;
    } else {
        valeur_B += valeur;
        // document.getElementById('affichage').textContent = valeur_A + ' ' + operateur + ' ' + valeur_B;
    };
};

// FONCTION POUR OPERATEUR
function btnOperateur(o) {
    operateur = o;
    // document.getElementById('affichage').textContent = valeur_A + ' ' + operateur;
};

// FONCTION POUR RESULTAT
function resultat() {
    let a:number = parseInt(valeur_A);
    let b:number = parseInt(valeur_B);
    let somme:number
    switch (operateur) {
        case "+":
            somme = a + b;
            break;
        case "-":
            somme = a - b;
            break;
        case "*":
            somme = a * b;
            break;
        case "/":
            somme = a / b;
            break;
    };
    // AFFICHAGE DU RESULTAT
    // document.getElementById('affichage').textContent = valeur_A + ' ' + operateur + ' ' + valeur_B + ' = ' + resultat;
    // RESET
    valeur_A = '';
    valeur_B = '';
    operateur = '';
};