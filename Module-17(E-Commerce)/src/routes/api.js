const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");
const OrderController = require("../controllers/OrderController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");

//Creating Demo Post Request to Check the DB!
router.post("/cart/post", CartController.createCart);
router.post("/order/post", OrderController.createOrder);
router.post("/product/post", ProductController.createProduct);
router.post("/user/post", UserController.createUser);

module.exports = router;
