const express = require("express");
const app = express();
const { products } = require("./data");

// home page
app.get("/", (req, res) => {
  res.send(`
  <h1>Home Page</h1>
  <a href="/api/products">Products</a>
  <a href="/api/products/1">Product 1</a>
  <a href="/api/products/2">Product 2</a>
  `);
});

// get all products
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// get a single product
app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  return res.json(singleProduct);
});

app.get("/api/products/2", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  return res.json(singleProduct);
});

// listener
app.listen(7701, () => {
  console.log("listening on port 7701");
});
