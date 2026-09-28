const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let user = null;


// REGISTER
const register = async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = {
        username,
        password: hashedPassword
    };

    res.json({
        message: "Registration successful"
    });
};


// LOGIN
const login = async (req, res) => {

    const { username, password } = req.body;

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    if (user.username !== username) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
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
        token: token
    });
};


module.exports = {
    register,
    login
};