const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// sends a webpage via middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(6002, () => {
  console.log("listening on port 6002");
});
