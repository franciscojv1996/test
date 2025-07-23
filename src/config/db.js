require('dotenv').config();
const mysql = require('mysql');

const databaseCredentials = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_ADMIN_USER,
    password: process.env.DB_ADMIN_PASSWORD
}

const tempConnection = mysql.createConnection(databaseCredentials);

tempConnection.connect((err) => {
    if (err) {
        console.error("❌ Error al conectarse a MySQL:", err.message);
        return;
    }
    console.log("✅ Conectado a MySQL");

    tempConnection.query(
        `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``,
        (err) => {
            if (err) {
                console.error("❌ Error creando la base de datos:", err.message);
                return;
            }
            console.log(`✅ Base de datos ${process.env.DB_NAME} creada o ya existe`);

            const connection = mysql.createConnection({ ...databaseCredentials, database: process.env.DB_NAME });

            connection.connect((err) => {
                if (err) {
                    console.error("❌ Error conectándose a la base de datos:", err.message);
                    return;
                }
                console.log(`✅ Conectado a la base de datos ${process.env.DB_NAME}`);
            });

            module.exports = connection;
        }
    );
});
