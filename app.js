const express = require("express");
const app = express();
const axios = require("axios");
const request = require("request");
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running on ${PORT}`));
