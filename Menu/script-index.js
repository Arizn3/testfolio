const replace = () => {
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
        case "Memory Game":
            location.replace("http://localhost/testfolio/MemoryGameApp/")
            break;
        case "DST (ça arrive !)":
            location.replace("http://localhost/testfolio/DST/")
            break;
        default:
            alert("Veuillez choisir une application")
            break;
    };
};

const bouton = document.getElementById('bouton');

bouton.addEventListener('click', () => {
    replace();
});

addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        replace();
    };
});