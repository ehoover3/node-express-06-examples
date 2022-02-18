const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
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

module.exports = rOUTER;
