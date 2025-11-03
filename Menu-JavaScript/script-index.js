const replace = () => {
    let choix = document.getElementById('listeFonctions').value;
    switch (choix) {
        case "Calculatrice JS":
            location.replace("http://localhost/testfolio/Calculatrice-JavaScript/")
            break;
        case "Connexion JS":
            location.replace("http://localhost/testfolio/Connexion-JavaScript/")
            break;
        case "Crêperie JS":
            location.replace("http://localhost/testfolio/Creperie-JavaScript/")
            break;
        case "Thermomètre JS":
            location.replace("http://localhost/testfolio/Thermometre-JavaScript/")
            break;
        case "Memory Game JS":
            location.replace("http://localhost/testfolio/MemoryGame-JavaScript/")
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