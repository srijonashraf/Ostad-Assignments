const express = require("express");
const router = express.Router();
const SalesReportController = require("../controllers/SalesReportController");

router.get("/total-revenue", SalesReportController.getTotalRevenue);
router.get("/quantity-by-product", SalesReportController.getQuantityByProduct);
router.get("/top-products", SalesReportController.getTopProducts);
router.get("/average-price", SalesReportController.getAveragePrice);
router.get("/revenue-by-month", SalesReportController.getRevenueByMonth);
router.get(
  "/highest-quantity-sold",
  SalesReportController.getHighestQuantitySold
);

module.exports = router;
