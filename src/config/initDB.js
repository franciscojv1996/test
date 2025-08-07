const mysql = require("mysql2/promise")
const { db } = require("./")

async function createDatabase() {
    const connection = await mysql.createConnection({
        host: db.host,
        user: db.user,
        password: db.password
    })

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${db.baseName}\`;`);
    console.log(`✅ Base de datos '${db.baseName}' verificada o creada.`);
    await connection.end();
}

module.exports = createDatabase