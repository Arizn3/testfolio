// CLASS OPEN WEATHER QUI RÉCUPÈRENT LES DONNÉES NÉCESSAIRES VIA UNE CLÉ API
class OpenWeather {

    constructor(cleApi) {
        this.cleApi = cleApi;
    };

    // METHODE PRINCIPALE
    afficheTemperature() {
        const zone = document.getElementById('localisation').value;
        const affichage = document.getElementById('affichage');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${zone}&appid=${this.cleApi}&units=metric&lang=fr`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Echec de la requête');
                };
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

    // FONCTION SUPPLÉMENTAIRE QUI AFFICHE LA ZONE
    // SÉLECTIONNER PAR L'UTILISATEUR DANS L'INTERFACE 
    affichageZone(dt) {
        const region = dt.sys.country;
        const nom = dt.name;
        const zone = `${region} ${nom}`;
        document.getElementById('localisation').value = zone;
    };
};

// CLÉ API
const cleApi = '';
export const API = new OpenWeather(cleApi);