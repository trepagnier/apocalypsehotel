module.exports = function(req, res) {
  const transaction = req.body.values;
  console.log(req.body);
  if (transaction.first) {
    res.send({ status: 200 });
  }

  fetch("https://cccompany.com/api", {
    data: {
      ...transaction
    }
  }).then(res => {
    if (res === 200) {
      res.send({ body: "YOU DID IT!!!!!" });
    }
  });

  res.send({ status: "fail" });
};
