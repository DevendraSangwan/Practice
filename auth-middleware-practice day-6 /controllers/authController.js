const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let user = null;

const register = async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    user = {
        username,
        password: hashedPassword
    };

    res.json({
        message: "User registered successfully"
    });
};

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!user || user.username !== username) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const token = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login successful",
        token
    });
};

const profile = (req, res) => {
    res.json({
        message: "Welcome to your profile",
        user: req.user
    });
};

module.exports = {
    register,
    login,
    profile
};