const mongoose = require("mongoose");

const cartproductSchema = new mongoose.Schema({
  prodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "electronic",
  },
  qty: {
    type: Number,
    require: true,
    default:1
  },
});

const cartProduct = new mongoose.model("cart", cartproductSchema);

module.exports = cartProduct;
