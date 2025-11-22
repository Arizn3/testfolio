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
        element.classList.add(id);
    };

    // METHODE REMOVE CSS
    removeCSS(element, id) {
        element.classList.remove(id);
    };

    // METHODE DARK MODE
    darkMode() {
        this.backGround.setAttribute('src', "./img/IA.appThermometre_videobg_fumee.mp4");
        this.addCSS(body, 'darkBody');
        this.addCSS(main, 'darkMain');
        this.addCSS(input, 'darkInput');
        this.addCSS(affichageId, 'darkInput');
    };

    // METHODE COULEUR
    mode_couleur() {
        this.backGround.setAttribute('src', "./img/IA.appThermometre_videobg_ciel.mp4");
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

// EXPORT DE L'INSTANCE DE LA CLASSE DECORATEUR
export const classDecorateur = new decorateur();