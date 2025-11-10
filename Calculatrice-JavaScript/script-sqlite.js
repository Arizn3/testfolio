const Database = require("better-sqlite3");
const db = new Database("database.db");

// MA TABLE
db.exec(`CREATE TABLE IF NOT EXISTS historique (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expression TEXT
    );`);

// MES METHODES
const getAll = db.prepare("SELECT * FROM historique");
const deleteAll = db.prepare("DELETE FROM historique");
const insert = db.prepare("INSERT INTO historique (expression) VALUES ('3 + 9 = 12');");


// INSERTION DE DONNEES TEST
// const testA = insert.run();


// APPEL DE LA TABLE TEST
const testB = getAll.all();
testB.forEach(occurrence => {
    console.log(`ID: ${occurrence.id}, Resultat: ${occurrence.expression}`);
});

// SUPPRIME TABLE TEST
const effaceTable = deleteAll.run();