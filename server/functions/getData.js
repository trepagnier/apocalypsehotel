const fs = require("fs");
const path = require("path");

// () => ({})
module.exports = query => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db.json")));
  return data;
};
