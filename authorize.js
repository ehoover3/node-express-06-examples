const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    console.log("User is authorized!");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;

// localhost:5001/?user=john
