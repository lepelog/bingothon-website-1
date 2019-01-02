var fs = require("fs");

const express = require("express");
const app = express();
const port = 8091;

app.get("/", function(req, res) {
  var index = fs.readFileSync("www/index.html", "utf-8");
  res.send(index);
});

app.listen(port, "127.0.0.1", function() {
  console.log("Listening on port: " + port);
});
