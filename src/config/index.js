require("dotenv").config();
const ip = require("ip");


const app = {
    port: process.env.PORT || 3000,
    host: ip.address() || "localhost",
}

const db = {

    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_ADMIN_USER || "root",
    password: process.env.DB_ADMIN_PASSWORD || "admin123",
    baseName: process.env.DB_NAME || "test",
}

jwtConfig = {
    secret: process.env.JWT_SECRET || "default_secret",
    expiration: process.env.JWT_EXPIRATION || "1h", // Default to 1 hour
}

module.exports = { app, db, jwtConfig }