const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1 }, // Ensure quantity is a positive integer
      },
    ],
    totalAmount: { type: Number, required: true, min: 0 }, // Ensure totalAmount is a positive value
    shippingAddress: { type: String, required: true },
    status: { type: String, required: true, default: "Pending" },
  },
  { timestamps: true, versionKey: false }
);

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
