import mysql from "mysql2";
// const mysql = require("mysql");


class ConnexionHistorique {

    constructor(idConnexion) {
        this.idConnexion = idConnexion;
    };

    insertionQuery(expression) {

        // CONNEXION
        this.idConnexion.connect((err) => {
            if (err) throw err;
            console.log('Connexion établie');
        });

        // USE TABLE
        this.idConnexion.query(
            "USE testfolio", (err, rows, fields) => {
                if (err) throw err;
            });

        //SQL INSERT
        this.idConnexion.query("INSERT INTO calculatrice_historique (id,expression) VALUES(id,?)", [expression], (err)=>{
            if(err) throw err;
        });

        // DECONNEXION
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


// TESTE
// module.exports = {instanceConnexion};
export const maConnexion = {instanceConnexion};