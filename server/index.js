const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const login = require("./login");
const save = require("./save");
const getData = require("./functions/getData");
const session = require("./session");
const scratch = require("./scratch");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;
app.listen(port, function(err, res) {
  if (err) {
    console.log(err);
  }
  console.log("server listening on port " + port);
});

app.get("/data", (req, res) => {
  res.send(getData(req.query));
});

app.get("/session", (req, res) => {
  res.send(session.get());
});

app.get("/scratch", scratch);
app.post("/save", save);
app.post("/login", login);
