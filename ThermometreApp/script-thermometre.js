// BOUTON RETOUR AU MENU
const retour_menu = document.getElementById('bouton_menu');
retour_menu.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Menu/index.html')
});

// CLASS OPEN WEATHER
class OpenWeather {

    constructor(cle_api) {
        this.cle_api = cle_api;
    };

    // METHODES D'INSTANCE PRINCIPALE
    affiche_temperature() {
        const zone = document.getElementById('localisation').value;
        const affichage = document.getElementById('affichage');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${zone}&appid=${this.cle_api}&units=metric&lang=fr`;
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
                this.affichage_zone(data);
            })
            .catch(error => {
                alert('Indiquez une ville ou une région éxistante.');
            });
    };

    affichage_zone(dt) {
        const region = dt.sys.country;
        const nom = dt.name;
        const zone = `${region} ${nom}`;
        document.getElementById('localisation').value = zone;
    };
};

// CLÉ API 
const cle_api = '';

// APPEL DE LA METHODE PRINCIPALE EN CRÉANT UNE INSTANCE
const bouton_recherche = document.getElementById('bouton_recherche');
bouton_recherche.addEventListener('click', () => {
    const mon_api = new OpenWeather(cle_api);
    mon_api.affiche_temperature()
});
addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        const mon_api = new OpenWeather(cle_api);
        mon_api.affiche_temperature()
    }
});

// CLASS DECORATEUR
class decorateur {

    body = document.querySelector('body');
    backGround = document.querySelector('video');
    main = document.querySelector('main');
    input = document.querySelector('input');
    affichage_id = document.getElementById('id_affichage');
    affichage = document.getElementById('affichage');
    input_text = document.getElementById('localisation');

    // METHODE ADD CSS 
    addCSS(element, id) {
        element.classList.add(id)
    };

    // METHODE REMOVE CSS
    removeCSS(element, id) {
        element.classList.remove(id)
    };

    // METHODE DARK MODE
    dark_mode() {
        this.backGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_fumee.mp4");
        this.addCSS(body, 'darkBody');
        this.addCSS(main, 'darkMain');
        this.addCSS(input, 'darkInput');
        this.addCSS(affichage_id, 'darkInput');
    };
    // METHODE COULEUR
    mode_couleur() {
        this.backGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_ciel.mp4");
        this.removeCSS(body, 'darkBody');
        this.removeCSS(main, 'darkMain');
        this.removeCSS(input, 'darkInput');
        this.removeCSS(affichage_id, 'darkInput');
    };
    // METHODE CHOIX DE COULEURS AVEC CONDITION
    choix_couleurs() {
        let couleur = document.getElementById('choix_couleurs').value;
        if (couleur == '#ffffff') {
            this.main.style.backgroundColor = couleur;
            this.main.style.color = '#000000';
            this.affichage_id.style.borderColor = '#000000';
            this.input_text.style.borderBlockColor = '#000000';
        } else if (couleur == '#000000') {
            this.main.style.backgroundColor = couleur;
            this.main.style.color = '#ffffff';
            this.affichage_id.style.borderColor = '#ffffff';
            this.input_text.style.borderBlockColor = '#ffffff';
        } else {
            this.main.style.backgroundColor = couleur;
        };
    };
};

// INSTANCE DE LA CLASSE DECORATEUR
const test_A = new decorateur();

// APPEL DU DARKMODE
const choix_A = document.getElementById('dark_mode');
choix_A.addEventListener('change', () => {
    test_A.dark_mode();
});

// APPEL DU MODE COULEUR
const choix_B = document.getElementById('colorMode');
choix_B.addEventListener('change', () => {
    test_A.mode_couleur();
});

// APPEL DE LA FONCTION CHOIX DE COULEURS AVEC CONDITIONS
const bouton_couleur = document.getElementById('choix_couleurs')
bouton_couleur.addEventListener('input', () => {
    test_A.choix_couleurs();
});