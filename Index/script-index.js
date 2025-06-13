
const bouton = document.getElementById('bouton');

bouton.addEventListener('click', () => {
    let choix = document.getElementById('listeFonctions').value;

    switch (choix) {
        case "Calculatrice":
            location.replace("http://localhost/testfolio/Calculatrice/")
            break;
        case "Login":
            location.replace("http://localhost/testfolio/Login/")
            break;
        case "Crêperie":
            location.replace("http://localhost/testfolio/Creperie/")
            break;
        case "DST":
            location.replace("http://localhost/testfolio/DST/")
            break;
        default:
            break;
    };
});