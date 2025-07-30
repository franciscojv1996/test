const Contorller = require("./")
const errorHandler = require("./../middlewares/errorHandler")

const User = require("./../models/user.model")

class UserController extends Contorller {
    constructor() {
        super(User)
    }

    create() {
        return errorHandler(async (req, res) => {
            User.createUser(req.body, (err, reslt) => {
                if (err) return res.status(500).json({ error: 'Error al crear producto' });
                return res.status(201).json({ mensaje: 'Producto creado', id: result.insertId });
            })
        })
    }
}

module.exports = UserController;
