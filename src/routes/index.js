const express = require("express");
const router = express.Router();

const { endpoints } = require('../config/endpoints.json');

function configureRoutes(app) {
    console.log('Initializing API routes');
    const base = "/api";

    app.use(base, router);

    router.get("/", (req, res) => res.send('Welcome to the API'));

}

module.exports = configureRoutes