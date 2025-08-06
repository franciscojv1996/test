const { verifyToken } = require("./../util/jwt");

const verifyTokenMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = verifyToken(token);
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = verifyTokenMiddleware;