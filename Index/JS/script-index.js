
const bouton = document.getElementById('bouton');

bouton.addEventListener('click', () => {
    let choix = document.getElementById('listeFonctions').value;

    switch (choix) {
        case "Calculatrice":
            location.replace("http://localhost/testfolio/Calculatrice/")
            break;
        case "Formulaire":
            location.replace("http://localhost/testfolio/Formulaire/")
            break;
        case "Crêperie":
            location.replace("http://localhost/testfolio/Crêperie/")
            break;
        case "DST":
            location.replace("http://localhost/testfolio/DST/")
            break;
        default:
            break;
    };
});