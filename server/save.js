const fs = require("fs");
const getData = require("./functions/getData");

module.exports = function(req, res) {
  fs.writeFile("server/db.json", JSON.stringify(req.body), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("File saved.");
  });
  res.send({ status: "pass" });
};
