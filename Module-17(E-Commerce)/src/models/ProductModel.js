const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true, min: 0 }, // Use min for positive values
    stock: { type: Number, required: true, min: 0 }, // Use min for non-negative integers
    category: { type: String, required: true },
    imageURL: { type: String, default: null }, // Use 'default' for optional fields
  },
  { timestamps: true, versionKey: false }
);

const ProductModel = mongoose.model("Product", ProductSchema); 

module.exports = ProductModel;
