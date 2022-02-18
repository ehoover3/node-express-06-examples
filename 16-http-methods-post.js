const express = require("express");
const app = express();
let { people } = require("./data");

// STATIC ASSETS
app.use(express.static("./methods-public"));

// GET ALL PEOPLE
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  res.send("POST");
});

app.listen(6002, () => {
  console.log("listening on port 6002");
});

// npm pgpromise to connect to a database for SQL
// http methods

// SQL postgress
// relational databases

// build a local postgress database & connect to that
