const express = require("express");
const app = express();
const { products } = require("./data");

// home page
app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">products</a>`);
});

// get all products
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// get a single product dynamically
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params; // productID is a string
  const singleProduct = products.find((product) => product.id === Number(productID));
  return res.json(singleProduct);
});

// listener
app.listen(7701, () => {
  console.log("listening on port 7701");
});
