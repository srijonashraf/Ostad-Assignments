const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");
const OrderController = require("../controllers/OrderController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");

//Creating Demo Post Request to Check the DB!
router.post("/cart/post", CartController.createCart);
router.get("/cart/get", CartController.findAll);
router.post("/order/post", OrderController.createOrder);
router.get("/order/get", OrderController.findAll);
router.post("/product/post", ProductController.createProduct);
router.get("/product/get", ProductController.findAll);
router.post("/user/post", UserController.createUser);
router.get("/user/get", UserController.findAll);

module.exports = router;
