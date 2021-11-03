const coupon = require("../database/model/coupon");
///////////////////////////////////////
function coupongenerator() {
  var coupon = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (var i = 0; i < 8; i++) {
    coupon += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return coupon;
}
///////////////////////////////////////////

const addCoupon = async (req, res) => {
  if (req.body.Promocodetype == undefined) {
    return res.send({ error: "Promocodetype can't be null" });
  } else if ((req.body.Promocodetype !== "male") & "female") {
    return res.send({ error: "Promocodetype value onle male of female" });
  }
  if (req.body.startdate == undefined) {
    return res.send({ error: "startdate  can't be null" });
  }
  if (req.body.enddate == undefined) {
    return res.send({ error: "enddate can't be null " });
  }
  if (req.body.maxdiscount == undefined) {
    return res.send({ error: "maxdiscount can't be null" });
  }
  const newCoupon = new coupon({
    PromocodeName: coupongenerator(),
    Promocodetype: req.body.Promocodetype,
    startdate: req.body.startdate,
    enddate: req.body.enddate,
    maxdiscount: req.body.maxdiscount,
  });
  try {
    const data = await newCoupon.save();
    res.send("Your data has inserted");
  } catch (err) {
    res.send("Error" + err);
  }
};

module.exports = addCoupon;
