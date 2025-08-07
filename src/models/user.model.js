const { DataTypes } = require("sequelize")
const sequelize = require("./../util/db")
const UserHooks = require("./../hooks/user.hooks")

const User = sequelize.define("User", {
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
    
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'users',
    timestamps: true,
    hooks: UserHooks
})

module.exports = User