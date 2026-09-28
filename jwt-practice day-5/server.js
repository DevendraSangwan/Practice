const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = 5000;

const user = {
    id: 101,
    username: "devendra",
    email: "devendra@gmail.com"
};

//Login -create token 
app.post("/login", (req, res) => {
    const { email,username } = req.body;
    if (email !== user.email) {
        return res.status(401).json({
            message: "Invalid email"
        });
    }

    // JWT create
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.json({
        message: "Login successful",
        token: token
    });
});

//protected route
app.get("/profile", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "Token required"
        });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        res.json({
            message: "Access granted",
            user: decoded
        });

    } catch (error) {
        res.status(401).json({
            message: "Invalid or expired token"
        });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});