const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Temporary users array
const users = [];

// Register
const register = async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Username and Password are required"
        });
    }

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username,
        password: hashedPassword
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully"
    });

};

// Login
const login = async (req, res) => {

    const { username, password } = req.body;

    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Invalid Username"
        });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.status(401).json({
            success: false,
            message: "Invalid Password"
        });
    }

    const token = jwt.sign(
        { username },
        "mysecretkey",
        { expiresIn: "1h" }
    );

    res.json({
        success: true,
        token
    });

};

module.exports = {
    register,
    login
};