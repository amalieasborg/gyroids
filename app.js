require("dotenv").config();  // Indlæs .env-filen

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const gyroidRoutes = require("./routes/gyroidRoutes");
const Gyroid=require("./models/gyroidModel");

const port = process.env.PORT || 3000;
const dbConnectionString = process.env.DB_CONNECTION_STRING;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(dbConnectionString, { connectTimeoutMS: 10000 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(gyroidRoutes);

app.get("/", (req, res) => {
    res.render("index");
});


app.listen(port, () => {
    console.log("Serveren kører på http://localhost:3000");
});







