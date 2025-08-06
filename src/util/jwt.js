const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config");
const { secret, expiration } = jwtConfig;

const generateToken = (payload, expiresIn = expiration) => {
    return jwt.sign(payload, secret, { expiresIn });
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        throw new Error("Invalid token");
    }
};

module.exports = {
    generateToken,
    verifyToken
};