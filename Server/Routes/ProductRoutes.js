import express from "express";
import asyncHandler from "express-async-handler";
import Cart from "../Models/CartModel.js";
import Product from "../Models/ProductModel.js";

const productRoute = express.Router();

// Get All Product
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//Get Single Product
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const cartItems = await Cart.find({});
    res.json(cartItems);
  })
);

export default productRoute;
