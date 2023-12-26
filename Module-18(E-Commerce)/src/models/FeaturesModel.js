const mongoose = require("mongoose");
const FeaturesSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const FeaturesModel = mongoose.model("features", FeaturesSchema);
module.exports = FeaturesModel;
