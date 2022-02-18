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
app.get("/api/products:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    product.id === Number(productID);
  });

  if (!singleProduct) {
    return res.status(404).send();
  }

  return res.json(singleProduct);
});

app.listen(7700, () => {
  console.log("listening on port 7700");
});
