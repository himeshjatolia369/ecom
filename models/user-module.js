const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    required: true // snapshot price
  }
});

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,

  cart: {
    type: [cartItemSchema],
    default: []
  },

  order: {
    type: Array,
    default: []
  },

  contact: Number,
  picture: String
});

module.exports = mongoose.model("user", userSchema);
