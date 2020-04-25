const path = require("path");
const express = require("express");
const app = express();
const axios = require("axios");
const request = require("request");
// const covid19 = require("./public/JS/covid19");

app.set("view engine", "ejs");
const publicdirectorypath = path.join(__dirname, "/public");
app.use(express.static(publicdirectorypath));

// Updated version
app.get("/", async (req, res, next) => {
  try {
    const response = await axios.get("https://api.covid19api.com/summary");
    res.render("index", {
      data: {
        global: response.data.Global,
        Countries: response.data.Countries,
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// News Route
app.get("/global-news", async (req, res, next) => {
  try {
    const response = await axios.get("http://newsapi.org/v2/everything?q=covid&sortBy=publishedAt&language=en&apiKey=2ce620556cce40d6923ca8ee1d3374fe");
    res.render("news", {news: response.data});
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on ${PORT}`));
