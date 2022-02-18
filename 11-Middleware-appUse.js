const express = require("express");
const app = express();

// helper functions
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};
// NOTE: if logger was in a different file, then use...
// const logger = require("./logger");

app.use(logger); // <-- middleware

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
