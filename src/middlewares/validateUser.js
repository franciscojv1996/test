const User = require("./../models/user.model");

async function validateUser(req, res, next){
    try {
        if (!req.logged || !req.logged.id) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = await User.findByPk(req.logged.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.isActive === false) {
            return res.status(403).json({ message: "User is inactive" });
        }
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
 }

module.exports = validateUser;