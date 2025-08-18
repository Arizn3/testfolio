// Cette partie du code plus théorique peut se retrouver sur une feuille pour elle seule (ex: script.js).
// Ce code pourrai se retrouver sous forme de classe avec les mots-clés export default.
// Exemple cette variable ci-dessous aurai put se retrouver dans le constructor.
const bouton = document.getElementById('bouton');

function replace() {
    let choix = document.getElementById('listeFonctions').value;
    switch (choix) {
        case "Calculatrice":
            location.replace("http://localhost/testfolio/CalculatriceApp/")
            break;
        case "Connexion":
            location.replace("http://localhost/testfolio/ConnexionApp/")
            break;
        case "Crêperie":
            location.replace("http://localhost/testfolio/CreperieApp/")
            break;
        case "Thermomètre":
            location.replace("http://localhost/testfolio/ThermometreApp/")
            break;
        case "DST (ça arrive !)":
            location.replace("http://localhost/testfolio/DST/")
            break;
        default:
            alert("Veuillez choisir une application")
            break;
    };
};

// Cette partie du code lié aux événements peut dans certains projets se retrouver sur une autre feuille (ex: event.js).
// En appelant la classe sur l'autre feuille JS avec les mots-clés import from. 

bouton.addEventListener('click', () => {
    replace();
});

addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        replace();
    };
});