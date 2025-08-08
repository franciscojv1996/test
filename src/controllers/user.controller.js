const Contorller = require("./")
const errorHandler = require("./../middlewares/errorHandler")
const User = require("./../models/user.model")

const bcrypt = require("bcrypt")
const generateToken = require("./../util/jwt")
class UserController extends Contorller {
    constructor() {
        super(User)
    }

    login() {
        return errorHandler(async (req, res) => {
            const { email, password } = req.body;


            const user = await this.model.findOne({ where: { email } });

            if (user.isActive === false) {
                return res.status(403).json({ message: "User is inactive" });
            }

            if (!user) {
                return res.status(404).json({ message: "User no encontrado" });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ message: "Invalid password" });
            }

            console.log("User logged in:", user);

            const token = generateToken(user);

            res.status(200).json({
                message: "Login successful",
                token: token,
                data: user,

            });

        })
    }
}

module.exports = UserController;
