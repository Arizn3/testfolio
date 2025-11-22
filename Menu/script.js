// FONCTION JS ANONYME POUR LA SELECTION D'UNE APPLICATION 
const replace = () => {
    let choix = document.getElementById('listeFonctions').value;
    switch (choix) {
        case "Calculatrice JS":
            location.replace("/Users/lucas/Documents/Projets/App-Front/Calculatrice/index.html")
            break;
        case "Connexion JS":
            location.replace("/Users/lucas/Documents/Projets/App-Front/Connexion/index.html")
            break;
        case "Crêperie JS":
            location.replace("/Users/lucas/Documents/Projets/App-Front/Creperie/index.html")
            break;
        case "Thermomètre JS":
            location.replace("/Users/lucas/Documents/Projets/App-Front/Thermometre/index.html")
            break;
        case "Memory Game JS":
            location.replace("/Users/lucas/Documents/Projets/App-Front/MemoryGame/index.html")
            break;
        default:
            alert("Veuillez choisir une application")
            break;
    };
};

// BOUTON ET EVENEMENT
const bouton = document.getElementById('bouton');
bouton.addEventListener('click', () => {
    replace();
});
addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        replace();
    };
});