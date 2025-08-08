const router = require("express").Router();
const UserController = require('../controllers/user.controller');
const userController = new UserController();
const verifyToken = require("../middlewares/verifyToken");
const validateUser = require("../middlewares/validateUser");
const authorize = require("../middlewares/authorize");

router
    .route("/login")
    .post(userController.login());

router.use(verifyToken);
router.use(validateUser);
router.use(authorize);

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