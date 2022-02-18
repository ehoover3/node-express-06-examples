const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([{ name: "john", name: "susan" }]);
});

app.listen(7010, () => {
  console.log("listening on port 7010");
});
