const express = require("express");
const app = express();
const axios = require("axios");
const request = require("request");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  request("https://api.covid19api.com/summary", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("index", {data: data});
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running on ${PORT}`));
