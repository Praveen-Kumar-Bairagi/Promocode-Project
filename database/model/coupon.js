const mongoose = require("mongoose");

const blog = new mongoose.Schema({
  PromocodeName: {
    type: String,
    required: true,
  },
  Promocodetype: {
    type: String,
    required: true,
  },
  startdate: {
    type: Number,
    required: true,
  },
  enddate: {
    type: Number,
    required: true,
  },
  maxdiscount: {
    type: Number,
    required: true,
    maxdiscount: 100,
  },
});

module.exports = mongoose.model("blog_data", blog);
