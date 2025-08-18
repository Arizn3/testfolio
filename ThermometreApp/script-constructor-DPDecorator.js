// BOUTON RETOUR AU MENU
const back = document.getElementById('btnRetour');
back.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Menu/index.html')
});

// CLASS OPEN WEATHER
class OpenWeather {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.city = document.getElementById('localisation').value;
        this.affichage = document.getElementById('affichage');
        // FONCTION PRINCIPALE
        this.afficheData = async function () {
            try {
                const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric&lang=fr`);
                const data = await reponse.json();
                const temperature = data.main.temp;
                this.affichage.innerText = temperature + '°C';
                this.afficheName(data)
            }
            catch {
                alert('Indiquez une ville ou une région éxistante.');
            };
        };
        // FONCTION INDICATION DE ZONE DANS LA VALEUR INPUT
        this.afficheName = function (dt) {
            const country = dt.sys.country;
            const name = dt.name;
            const zone = `${country} ${name}`;
            document.getElementById('localisation').value = zone;
        };
    };
};

// CLÉ API 
const key = '';
// APPEL DE LA FONCTION PRINCIPALE EN CRÉANT UNE INSTANCE
const btnIndique = document.getElementById('btnRecherche');
btnIndique.addEventListener('click', () => {
    const monApi = new OpenWeather(key);
    monApi.afficheData()
});
addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        const monApi = new OpenWeather(key);
        monApi.afficheData()
    }
});

// CLASS DECORATEUR
class decorateur {
    constructor() {
        this.body = document.querySelector('body');
        this.backGround = document.querySelector('video');
        this.main = document.querySelector('main');
        this.input = document.querySelector('input');
        this.affichage_id = document.getElementById('id_affichage');
        this.input_text = document.getElementById('localisation');
    };

    // FONCTION ADD CSS 
    addCSS(element, id) {
        element.classList.add(id)
    };

    // FONCTION REMOVE CSS
    removeCSS(element, id) {
        element.classList.remove(id)
    };

    // FONCTION DARK MODE
    darkmode() {
        this.backGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_fumee.mp4");
        this.addCSS(this.body, 'darkBody');
        this.addCSS(this.main, 'darkMain');
        this.addCSS(this.input, 'darkInput');
        this.addCSS(this.affichage_id, 'darkInput');
    };
    // FONCTION COULEUR
    couleurMode() {
        this.backGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_ciel.mp4");
        this.removeCSS(this.body, 'darkBody');
        this.removeCSS(this.main, 'darkMain');
        this.removeCSS(this.input, 'darkInput');
        this.removeCSS(this.affichage_id, 'darkInput');
    };
    // FONCTION CHOIX DE COULEURS AVEC CONDITION
    choixDeCouleur() {
        let couleur = document.getElementById('choixCouleurs').value;
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
const choix_A = document.getElementById('darkMode');
choix_A.addEventListener('change', () => {
    test_A.darkmode();
});

// APPEL DU MODE COULEUR
const choix_B = document.getElementById('colorMode');
choix_B.addEventListener('change', () => {
    test_A.couleurMode();
});

// APPEL DE LA FONCTION CHOIX DE COULEURS AVEC CONDITIONS
const couleurBtn = document.getElementById('choixCouleurs')
couleurBtn.addEventListener('input', () => {
    test_A.choixDeCouleur();
});