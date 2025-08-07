const express = require("express");
const router = express.Router();
const user = require('./user.router');

const UserController = require('../controllers/user.controller');
const userController = new UserController();


const { url } = require('../config/endpoints.json');

function configureRoutes(app) {
    const base = "/api";

    app.use(base, router);

    router.get("/", (req, res) => res.send('Welcome to the API'));

    router.use(url.users, user);

}

module.exports = configureRoutes