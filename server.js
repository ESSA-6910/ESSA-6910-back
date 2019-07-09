const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mongoDB = "mongodb://127.0.0.1/students";

mongoose
    .connect(mongoDB, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const student = require("./routes/student");

app.use(student);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));