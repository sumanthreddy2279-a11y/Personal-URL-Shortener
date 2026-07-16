const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Access Denied. No token provided."
        });
    }

    try {

        const token = authHeader.split(" ")[1];

        const verified = jwt.verify(token, "mysecretkey");

        req.user = verified;

        next();

    } catch (err) {

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });
    }

};

module.exports = verifyToken;