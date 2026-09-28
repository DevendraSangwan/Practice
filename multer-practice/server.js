const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
    dest: "uploads/"
});

app.post("/upload", upload.single("file"), (req, res) => {

    console.log(req.file);

    res.json({
        message: "File uploaded successfully",
        file: req.file
    });
});

const PORT =5005;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});