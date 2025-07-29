const mysql = require("mysql");
const { db } = require("./");

const { credentials, baseName } = db;

const connectionCredentials = mysql.createConnection(credentials);

connectionCredentials.connect((err) => {
    if (err) {
        console.error("Error al conectarse a MySQL:", err.message);
        return;
    }
    console.log("Connected to the database");
    connectionCredentials.query(`CREATE DATABASE IF NOT EXISTS ${baseName}`, (err) => {
        if (err) {
            console.error("Error creando la base de datos:", err.message);
            return;
        }
        console.log(`Base de datos ${baseName} creada o ya existe.`);

        const connection = mysql.createConnection({
            ...credentials,
            database: baseName,
        });
        connection.connect((err) => {
            if (err) {
                console.error("Error al conectarse a la base de datos:", err.message);
                return;
            }
            console.log(`Conectado a la base de datos ${baseName}`);
        });

        module.exports = connection;
    });
});

