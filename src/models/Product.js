const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productCode: {
    type: Number,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
  },
  userName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", Schema);
