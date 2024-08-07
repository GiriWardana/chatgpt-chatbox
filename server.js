const express = require("express");
const path = require("path");
const axios = require("axios");
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// const FormData = require('form-data');

// require('dotenv').config();

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "src", "static")));
// app.use("/src/img", express.static(path.resolve(__dirname, "src", "img")));
// app.use("/src/pdf", express.static(path.resolve(__dirname, "src", "pdf")));
app.use(express.static('src'));

app.use(express.json());

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
