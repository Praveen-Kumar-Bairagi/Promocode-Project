const users = async (req, res) => {
  if (req.body.id == undefined) {
    return res.send({ error: "id can't be null" });
  }
  if (req.body.Birthdate == undefined) {
    return res.send({ error: "Birthdate  can't be null" });
  }
  if (req.body.Gender == undefined) {
    return res.send({ error: "Gender can't be null " });
  }
  if (req.body.Orderamount == undefined) {
    return res.send({ error: "Orderamount: can't be null" });
  }

  res.send(req.body);
};
module.exports = users;
