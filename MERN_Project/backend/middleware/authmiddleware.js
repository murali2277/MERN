const jwt = require("jsonwebtoken");

// JWT guard for protected routes
exports.protect = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Token invalid" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded; // attach decoded payload (should contain user id)
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
