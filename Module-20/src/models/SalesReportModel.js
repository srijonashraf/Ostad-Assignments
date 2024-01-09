const mongoose = require("mongoose");

const salesReportSchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const SalesReport = mongoose.model("sales", salesReportSchema);

module.exports = SalesReport;
