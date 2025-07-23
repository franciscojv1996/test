const Controller = require('./index');
const User = require('../models/user.model');

class UserController extends Controller {
    constructor() {
        super(User);
    }
}

module.exports = UserController;
