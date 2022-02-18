// SOURCE:  https://www.youtube.com/watch?v=Oe421EPjeBE
const express = require("express");
const app = express();

// helper functions
let authorize = require("./authorize");
let logger = require("./logger");

// middleware
app.use([authorize, logger]);

// route methods
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(7702, () => {
  console.log("listening on port 7702");
});
