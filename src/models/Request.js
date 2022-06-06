const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  client: {
    type: String,
    ref: "User",
  },
  productList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  Status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Request", Schema);
