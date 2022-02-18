const express = require("express");
const app = express();
let { people } = require("./data");
let authorize = require("./authorize");
let logger = require("./logger");

app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5001, () => {
  console.log("listening on port 5001");
});

// localhost:5001/?user=john
// check console log for result
