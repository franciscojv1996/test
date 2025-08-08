const { permisos } = require("../config")
const { rol, methods } = permisos

function authorize(req, res, next) {

    console.log("User Role:", req.user ? req.user.role : 'No user');
    console.log("Request Method:", req.method);
    console.log("Allowed Roles:", rol);
    console.log("Allowed Methods:", methods);


    if (req.user && req.user.role === 'Administrator') {
        next();
    }

/**
    if (!req.user || !rol.includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden: Invalid role" });
    }

    if (!methods.includes(req.method)) {
        return res.status(403).json({ message: "Forbidden: Invalid method" });
    } */

}

module.exports = authorize;
