const express = require("express");
const app = express();
let { people } = require("./data");

// 1. MIDDLEWARE
// static assets
app.use(express.static("./methods-public"));

// parse form data  // https://expressjs.com/en/api.html#express.urlencoded
app.use(express.urlencoded({ extended: false })); // this middleware applies to incoming requests

// 2. HTTP METHODS
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  // ^^^ notice the above middleware
  // this allows us to access the things below vvv
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("please provide credentials");
});

app.listen(6002, () => {
  console.log("listening on port 6002");
});

// npm pgpromise to connect to a database for SQL
// http methods

// SQL postgress
// relational databases

// build a local postgress database & connect to that
