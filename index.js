var fs = require("fs");
var favicon = require("serve-favicon");

function log(input) {
  var date = new Date(Date.now());
  var time = "[" + date.toLocaleTimeString() + "] ";
  console.log(time + input);
}

const express = require("express");
const app = express();
const port = 8091;

app.use(favicon("www/favicon.ico"));

app.get("*", function(req, res) {
  var urlArgs = req.url.toLowerCase().split("/");

  if (urlArgs[1] !== "-")  {
    if (req.url.indexOf(".") > -1) {
      log("A new request for a file: " + req.url);
      if (fs.existsSync("www/" + req.url)) {
        res.sendFile(__dirname + "/www/" + req.url);
      }
    } else {
      if (fs.existsSync("www/" + urlArgs[1].toLowerCase() + ".html")) {
        var result = fs.readFileSync("www/" + urlArgs[1].toLowerCase() + ".html", "utf-8");
        res.send(result);
      } else if (req.url === "/") {
        var result = fs.readFileSync("www/index.html", "utf-8");
        res.send(result);
      } else {
        var result = fs.readFileSync("errors/notfound.html", "utf-8");
        res.send(result);
      }
    }
  } else {
    if (urlArgs[2] === "api") {
      /*
        TODO
      */
    }
  }
});

app.listen(port, "127.0.0.1", function() {
  log("Listening on port: " + port);
});
