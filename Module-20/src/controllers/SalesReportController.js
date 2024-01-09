const SalesReportModel = require("../models/SalesReportModel");

exports.getTotalRevenue = async (req, res) => {
  try {
    const totalRevenue = await SalesReportModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
    ]);
    res
      .status(200)
      .json({ status: "success", totalRevenue: totalRevenue[0].totalRevenue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", error: "Internal Server Error" });
  }
};

exports.getQuantityByProduct = async (req, res) => {
  try {
    const quantityByProduct = await SalesReportModel.aggregate([
      {
        $group: {
          _id: "$product",
          totalQuantity: { $sum: "$quantity" },
        },
      },
    ]);
    res.json(quantityByProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getTopProducts = async (req, res) => {
  try {
    const topProducts = await SalesReportModel.aggregate([
      {
        $group: {
          _id: "$product",
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
      { $sort: { totalRevenue: -1 } },
      { $limit: 5 },
    ]);
    res.json(topProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAveragePrice = async (req, res) => {
  try {
    const averagePrice = await SalesReportModel.aggregate([
      {
        $group: {
          _id: null,
          averagePrice: { $avg: "$price" },
        },
      },
    ]);
    res.json({ averagePrice: averagePrice[0].averagePrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getRevenueByMonth = async (req, res) => {
  try {
    const revenueByMonth = await SalesReportModel.aggregate([
      {
        $group: {
          _id: {
            month: { $month: "$date" },
            year: { $year: "$date" },
          },
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
    ]);
    res.json(revenueByMonth);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getHighestQuantitySold = async (req, res) => {
  try {
    const highestQuantitySold = await SalesReportModel.findOne(
      {},
      {},
      { sort: { quantity: -1 } }
    );
    res.json(highestQuantitySold);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
