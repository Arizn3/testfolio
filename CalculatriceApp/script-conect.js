const mysql = require("mysql");

class ConnexionHistorique {

    constructor(idConnexion) {
        this.idConnexion = idConnexion;
    };

    insertionQuery() {
        this.idConnexion.connect((err) => {
            if (err) throw err;
            console.log('Connexion établie');
        });
        this.idConnexion.query(
            "USE testfolio", (err, rows, fields) => {
                if (err) throw err;
            });
            this.idConnexion.query(
            "SELECT * FROM calculatrice_historique", (err, rows, fields) => {
                if (err) throw err;
                for (const row of rows) {
                console.log(row.expression);
                };
            });
        this.idConnexion.end();
    };
};

// CONFIGURATION DE LA CONNEXION
const connexionParametre = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb',
    socketPath: "/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock"
});

// INSTANCE 
const instanceConnexion = new ConnexionHistorique(connexionParametre);

// EXPORTS
module.exports = instanceConnexion;
