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
    }
)


sequelize.sync({ ferce: false })
    .then(() => console.log("tabla sincronizadsas"))
    .catch(err => {
        //console.log("error al sincronizar", err)
        if (err.original.sqlMessage) {
            createDatabase()
        }
    })

module.exports = sequelize