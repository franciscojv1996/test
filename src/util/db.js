const Sequelize = require("sequelize")
const createDatabase = require("./../config/initDB")
const { db } = require("../config");


const sequelize = new Sequelize(
    db.baseName,
    db.user,
    db.password,
    {
        host: db.host,
        dialect: "mysql",
        port: db.port,
        logging: false
    }
)

sequelize.sync({ alter: true })
    .then(() => console.log("tabla sincronizadas"))
    .catch(err => {
        if (err.original.sqlMessage) {
            createDatabase() // en caso de no existir la base de datos,
        }

        console.error("Error al sincronizar", err);
    })

module.exports = sequelize  