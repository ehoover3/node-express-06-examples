const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

// 1. MIDDLEWARE
// static assets
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false })); // parse form data // this middleware applies to incoming requests // https://expressjs.com/en/api.html#express.urlencoded
app.use(express.json()); // parse json to handle http requests

// routes
app.use("/api/people", people);
app.use("/login", auth);

// npm pgpromise to connect to a database for SQL
// http methods

// SQL postgress
// relational databases

// build a local postgress database & connect to that
