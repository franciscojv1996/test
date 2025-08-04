const { DataTypes } = require("sequelize")
const db = require("./../util/db")

const User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    //Comprador = "Buyer"
    //Almacenista = "Storekeeper"
    //Solicitante = "Requester"
    //Administrador = "Administrator"
    role: {
        type: DataTypes.ENUM("Administrator", "Requester", "Storekeeper", "Buyer")
    },
}, {
    tableName: 'users',
    timestamps: true
})

module.exports = User