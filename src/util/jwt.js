const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config");
const { secret, expiration } = jwtConfig;

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role // Asumiendo que el modelo de usuario tiene un campo 'role'
    };

    return jwt.sign(payload, secret, { expiresIn: expiration });
}

module.exports = generateToken