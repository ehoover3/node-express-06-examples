// THE PROBLEM OF NOT HAVING EXPRESS
// you have to import every file, image, stylesheet, etc.

// note: errors exist on running this file - debug later

const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");
const homeStyles = readFileSync("./style.css");
const homeImage = readFileSync("./logo.svg");
const homeLogic = readFileSync("./code.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }

  // About Page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About Page</h1>`);
    res.end();
  }

  // Stylesheet
  else if ((url = "/styles.css")) {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }

  // Image
  else if (url === "/logo.svg+xml") {
    res.writeHead(200, { "content-type": "image/png+xml" });
    res.write(homeImage);
    res.end();
  }

  /// Logic
  else if (url === "/code.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }

  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Page Not Found</h1>`);
    res.end();
  }
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
