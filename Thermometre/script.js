// BOUTON MENU
const back = document.getElementById('btnRetour');
back.addEventListener('click', () => {
    location.replace('http://localhost/testfolio/Index/index.html')
});

// API
const apiKey = '628c02c4a8605707c0065a6615d27e84';
async function getData(city, callback) {
    try {
        const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
        const data = await reponse.json();
        callback(data);
    }
    catch {
        alert('Indiquez une ville ou une région.');
        ;
    };
};

// FONCTION PRINCIPALE
function indication() {
    const city = document.getElementById('localisation').value;
    getData(city, affTemperature);
    getData(city, affZone)
};

// FONCTION CALLBACK
function affTemperature(dt) {
    const temperature = dt.main.temp;
    document.getElementById('affichage').innerText = temperature + '°C';
};

// APPEL DE LA FONCTION PRINCIPALE
const btnIndique = document.getElementById('btnRecherche');
btnIndique.addEventListener('click', () => {
    indication();
});

addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        indication();
    };
});

// FONCTION INDICATION DE ZONE DANS LA VALEUR INPUT
function affZone(dt) {
    const name = dt.name;
    const country = dt.sys.country;
    const zone = `${country} ${name}`;
    document.getElementById('localisation').value = zone
};

// FONCTION CSS
// FONCTION MODE DE COULEUR
// FONCTION DARK
const elMain = document.querySelector('main');
const elInput = document.querySelector('input');
const elAffichage = document.getElementById('id_affichage');
const elBody = document.querySelector('body');
const elBackGround = document.querySelector('video');

const choix1 = document.getElementById('darkMode');
choix1.addEventListener('change', () => {
    dark();
});

function changeBody() {
    elBackGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_fumee.mp4");
}

function dark() {
    elMain.classList.add('darkMain');
    elInput.classList.add('darkInput');
    elAffichage.classList.add('darkInput');
    elBody.classList.add('darkBody');
    changeBody();
}

// FONCTION COULEURS
const choix2 = document.getElementById('colorMode');
choix2.addEventListener('change', () => {
    couleurs();
});

function removeBody() {
    elBackGround.setAttribute('src', "/testfolio/img/IA.appThermometre_videobg_ciel.mp4");
}

function couleurs() {
    elMain.classList.remove('darkMain');
    elInput.classList.remove('darkInput');
    elAffichage.classList.remove('darkInput');
    elBody.classList.remove('darkBody');
    removeBody();
};


// FONCTION COULEUR DE FOND
const input = document.getElementById('choixCouleurs');
const affichageBordure = document.getElementById('id_affichage');
const inputText = document.getElementById('localisation')

function contreBlanc() {
    const cible = document.querySelector('main');
    const couleur = input.value;
    if (couleur == '#ffffff') {
        cible.style.backgroundColor = couleur;
        cible.style.color = '#000000'
        affichageBordure.style.borderColor = '#000000';
        affichageBordure.style.color = '#000000';
        inputText.style.borderBlockColor = '#000000';
        inputText.style.color = '#000000';
    } else if (couleur == '#000000') {
        cible.style.backgroundColor = couleur;
        cible.style.color = '#ffffff'
        affichageBordure.style.borderColor = '#ffffff';
        affichageBordure.style.color = '#ffffff';
        inputText.style.borderBlockColor = '#ffffff';
        inputText.style.color = '#ffffff';
    } else {
        cible.style.backgroundColor = couleur;
    };
};

input.addEventListener('input', () => {
    contreBlanc();
});