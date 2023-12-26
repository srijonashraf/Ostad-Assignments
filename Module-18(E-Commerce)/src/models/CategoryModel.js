const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema(
  {
    categoryName: { type: String, unique: true, required: true },
    categoryImg: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const CategoryModel = mongoose.model("categories", CategorySchema);
module.exports = CategoryModel;
