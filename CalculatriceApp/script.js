const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb',
    socketPath: "/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock"
});

connection.connect((err) => {
    if (err) {
        console.log('Erreur de connexion : ' + err.stack);
        return;
    }
    console.log('Connexion établie à la base de données');
});

// QUERY
connection.query("SELECT id, age FROM utilisateurs",(err, rows, fileds) => {
    if(err) throw err;
    console.log("Les données sont : ", rows);
})

connection.end();







class historique {

    constructor(valeur){
        this.valeur = valeur;
        this.resultat = document.getElementById(id).value;
    };

    sauvegarde_data() {

    };

    recuperation_data() {

    };

};