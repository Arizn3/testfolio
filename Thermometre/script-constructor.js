// BOUTON RETOUR AU MENU
const back = document.getElementById('btnRetour');
back.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Index/index.html')
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
const key = '628c02c4a8605707c0065a6615d27e84';
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
        this.affichage = document.getElementById('affichage');
        this.input_text = document.getElementById('localisation');
    };
    // FONCTION DARK MODE
    darkmode() {
        this.backGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_fumee.mp4");
        this.main.classList.add('darkMain');
        this.input.classList.add('darkInput');
        this.affichage_id.classList.add('darkInput');
        this.body.classList.add('darkBody');
    };
    // FONCTION COULEUR
    couleurMode() {
        this.backGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_ciel.mp4");
        this.main.classList.remove('darkMain');
        this.input.classList.remove('darkInput');
        this.affichage_id.classList.remove('darkInput');
        this.body.classList.remove('darkBody');
    };
    // FONCTION CHOIX DE COULEURS AVEC CONDITION
    choixDeCouleur() {
        let couleur = document.getElementById('choixCouleurs').value;
        if (couleur == '#ffffff') {
            this.main.style.backgroundColor = couleur;
            this.main.style.color = '#000000';
            this.affichage.style.borderColor = '#000000';
            this.affichage.style.color = '#000000';
            this.input_text.style.borderBlockColor = '#000000';
            this.input_text.style.color = '#000000';
        } else if (couleur == '#000000') {
            this.main.style.backgroundColor = couleur;
            this.main.style.color = '#ffffff';
            this.affichage.style.borderColor = '#ffffff';
            this.affichage.style.color = '#ffffff';
            this.input_text.style.borderBlockColor = '#ffffff';
            this.input_text.style.color = '#ffffff';
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