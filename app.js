const express = require("express");
const app = express();
const axios = require("axios");
const request = require("request");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.static("public"));

// Updated version
app.get("/", async (req, res, next) => {
  try {
    const response = await axios.get("https://api.covid19api.com/summary");
    res.render("index", {
      data: {
        global: response.data.Global,
        Countries: response.data.Countries,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on ${PORT}`));
