require("dotenv").config();
const ip = require("ip");


const app = {
    port: process.env.PORT || 3000,
    host: ip.address() || "localhost",
}

const db = {
    credentials: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_ADMIN_USER || "root",
        password: process.env.DB_ADMIN_PASSWORD || "admin123",
    },

    baseName: process.env.DB_NAME || "test",
}

module.exports = { app, db }