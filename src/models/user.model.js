const Model = require('./index');

class User extends Model {
    constructor() {
        super('users');
    }
}

module.exports = User;
