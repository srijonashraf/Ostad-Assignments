const CartItemModel = require("../models/CartItemModel");

//Creating Demo Controller to Check the DB!
exports.createCart = async (req, res) => {
  try {
    const reqBody = req.body;
    // Check if all required fields are present in the request body
    const requiredFields = ["user", "product", "quantity"];
    for (const field of requiredFields) {
      if (!reqBody[field]) {
        return res
          .status(400)
          .json({ status: "fail", data: `Missing required field: ${field}` });
      }
    }

    let result = await CartItemModel.create(reqBody);
    res.status(201).json({ status: "success", data: result });
  } catch (e) {
    res.status(500).json({ status: "fail", data: e.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    let result = await CartItemModel.find();

    if (result) {
      res.status(200).json({ status: "success", data: result });
    } else {
      res.status(200).json({ status: "success", message: "No result found" });
    }
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};
