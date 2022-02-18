const express = require("express");
const app = express();

// Setup Static and Middleware
// (static -> server doesn't change files, i.e. img, html, css)
app.use(express.static("./public"));

// 404
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

// listener
app.listen(8000, () => {
  console.log("listening at port 8000");
});
