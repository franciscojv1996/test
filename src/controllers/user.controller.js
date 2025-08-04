const Contorller = require("./")
const errorHandler = require("./../middlewares/errorHandler")

const User = require("./../models/user.model")

class UserController extends Contorller {
    constructor() {
        super(User)
    }

    /*create() {
        return errorHandler(async (req, res) => {
            
        })

    }*/
}

module.exports = UserController;
