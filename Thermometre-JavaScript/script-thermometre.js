// BOUTON RETOUR AU MENU
const retour_menu = document.getElementById('boutonMenu');
retour_menu.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Menu-JavaScript/index.html')
});

// CLASS OPEN WEATHER
class OpenWeather {

    constructor(cleApi) {
        this.cleApi = cleApi;
    };

    // METHODES D'INSTANCE PRINCIPALE
    afficheTemperature() {
        const zone = document.getElementById('localisation').value;
        const affichage = document.getElementById('affichage');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${zone}&appid=${this.cleApi}&units=metric&lang=fr`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Echec de la requête');
                }
                return response.json();
            })
            .then(data => {
                const temperature = data.main.temp;
                affichage.innerText = temperature + '°C';
                this.affichageZone(data);
            })
            .catch(error => {
                alert('Indiquez une ville ou une région éxistante.');
            });
    };

    affichageZone(dt) {
        const region = dt.sys.country;
        const nom = dt.name;
        const zone = `${region} ${nom}`;
        document.getElementById('localisation').value = zone;
    };
};

// CLÉ API 
const cleApi = '';

// APPEL DE LA METHODE PRINCIPALE EN CRÉANT UNE INSTANCE
const boutonRecherche = document.getElementById('boutonRecherche');
boutonRecherche.addEventListener('click', () => {
    const monApi = new OpenWeather(cleApi);
    monApi.afficheTemperature()
});
addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        const monApi = new OpenWeather(cleApi);
        monApi.afficheTemperature()
    }
});

// CLASS DECORATEUR
class decorateur {

    body = document.querySelector('body');
    backGround = document.querySelector('video');
    main = document.querySelector('main');
    input = document.querySelector('input');
    affichageId = document.getElementById('idAffichage');
    affichage = document.getElementById('affichage');
    inputText = document.getElementById('localisation');

    // METHODE ADD CSS 
    addCSS(element, id) {
        element.classList.add(id)
    };

    // METHODE REMOVE CSS
    removeCSS(element, id) {
        element.classList.remove(id)
    };

    // METHODE DARK MODE
    darkMode() {
        this.backGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_fumee.mp4");
        this.addCSS(body, 'darkBody');
        this.addCSS(main, 'darkMain');
        this.addCSS(input, 'darkInput');
        this.addCSS(affichageId, 'darkInput');
    };
    // METHODE COULEUR
    mode_couleur() {
        this.backGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_ciel.mp4");
        this.removeCSS(body, 'darkBody');
        this.removeCSS(main, 'darkMain');
        this.removeCSS(input, 'darkInput');
        this.removeCSS(affichageId, 'darkInput');
    };
    // METHODE CHOIX DE COULEURS AVEC CONDITION
    choixCouleurs() {
        let couleur = document.getElementById('choixCouleurs').value;
        if (couleur == '#ffffff') {
            this.main.style.backgroundColor = couleur;
            this.main.style.color = '#000000';
            this.affichageId.style.borderColor = '#000000';
            this.inputText.style.borderBlockColor = '#000000';
        } else if (couleur == '#000000') {
            this.main.style.backgroundColor = couleur;
            this.main.style.color = '#ffffff';
            this.affichageId.style.borderColor = '#ffffff';
            this.inputText.style.borderBlockColor = '#ffffff';
        } else {
            this.main.style.backgroundColor = couleur;
        };
    };
};

// INSTANCE DE LA CLASSE DECORATEUR
const testA = new decorateur();

// APPEL DU DARKMODE
const choixA = document.getElementById('darkMode');
choixA.addEventListener('change', () => {
    testA.darkMode();
});

// APPEL DU MODE COULEUR
const choixB = document.getElementById('colorMode');
choixB.addEventListener('change', () => {
    testA.mode_couleur();
});

// APPEL DE LA FONCTION CHOIX DE COULEURS AVEC CONDITIONS
const boutonCouleur = document.getElementById('choixCouleurs')
boutonCouleur.addEventListener('input', () => {
    testA.choixCouleurs();
});