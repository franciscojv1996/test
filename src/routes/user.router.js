const router = require("express").Router();
const UserController = require('../controllers/user.controller');
const userController = new UserController();

router
    .route("/")
    .post(userController.create())
    .get(userController.getAll());

router
    .route("/:id")
    .get(userController.getById())
    .put(userController.update())
    .delete(userController.delete());

module.exports = router;