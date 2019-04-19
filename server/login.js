const session = require("./session");

const user = "darin";
const password = "123";

module.exports = function(req, res) {
  const u = req.body.username;
  const pw = req.body.password;

  if (u === user && pw === password) {
    session.setUser(user);
    res.send({ status: "pass", user: u });
  } else {
    res.send({ status: "fail" });
  }
};
