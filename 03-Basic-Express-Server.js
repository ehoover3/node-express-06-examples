// SETUP
// npm i express

const express = require("express");
const app = express();

// Home Page
app.get("/", (req, res) => {
  console.log("User connected to resource");
  res.status(200).send("Home Page");
});

// About Page
app.get("/about", (req, res) => {
  res.status(200).send("about page");
});

// 404 Error
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource Not Found</h1>");
});

// Listener
app.listen(8000, () => {
  console.log("server is listening on port 8000");
});
