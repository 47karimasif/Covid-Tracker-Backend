const path = require("path");
const express = require("express");
const app = express();
const axios = require("axios");
const request = require("request");
// const covid19 = require("./public/JS/covid19");

app.set("view engine", "ejs");
const publicdirectorypath = path.join(__dirname, "/Public");
app.use(express.static(publicdirectorypath));

// Updated version
app.get("/", async (req, res, next) => {
  try {
    const one =await axios.get("https://api.covid19api.com/summary");
    const two =await axios.get("http://newsapi.org/v2/everything?q=covid&sortBy=publishedAt&language=en&apiKey=2ce620556cce40d6923ca8ee1d3374fe");
    axios.all([one, two]).then(axios.spread((...responses) => {
      const response1 = responses[0];
      const response2 = responses[1];
      res.render("index", {
        data: {
          global: response1.data.Global,
          Countries: response1.data.Countries,
        },
        news: response2.data
      });
    }));    
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on ${PORT}`));
