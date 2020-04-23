const express = require("express");
const app = express();
const axios = require("axios");
const request = require("request");
// const covid19 = require("./public/JS/covid19");

app.set("view engine", "ejs");
app.use(express.static("public"));

// app.get("/cases-json", (req, res) => {
//   covid19((error, data) => {
//     if (error) {
//       return res.send(error);
//     } else
//       res.send({
//         totalconfirmed: data.totalConfirmed,
//         newconfirmed: data.newConfirmed,
//         totalrecovered: data.totalRecovered,
//         newrecovered: data.newRecovered,
//         totaldeaths: data.totalDeaths,
//         newdeaths: data.newDeaths,
//       });
//   });
// });

// app.get("/", (req, res, next) => {
//   request("https://api.covid19api.com/summary", function (
//     error,
//     response,
//     body
//   ) {
//     if (!error && response.statusCode == 200) {
//       var data = JSON.parse(body);
//       console.log(data);
//       res.render("index", { data: data });
//     }
//   });
// });

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
