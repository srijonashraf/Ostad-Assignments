const mongoose = require("mongoose");

const CartItemSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 }, // Ensure quantity is a positive integer
  },
  { timestamps: true, versionKey: false }
);

const CartItemModel = mongoose.model("CartItem", CartItemSchema);

module.exports = CartItemModel;
