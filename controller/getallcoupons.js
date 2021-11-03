const coupon = require("../database/model/coupon");

const allcouponget = async (req, res) => {
  try {
    const data = await coupon.find();
    res.send(data);
  } catch (err) {
    res.send("No data exits..");
  }
};

module.exports = allcouponget;
