const bcrypt = require("bcrypt");

const hashPassword = async (user) => {
    const saltRounds = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, saltRounds);
}

const UserHooks = {
    beforeCreate: async (user) => {
        await hashPassword(user);
    },
    beforeUpdate: async (user) => {
        if (user.changed('password')) {
            await hashPassword(user);
        }
    }
};
module.exports = UserHooks; 