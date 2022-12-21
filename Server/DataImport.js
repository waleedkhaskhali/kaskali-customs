import express from "express";
import { Products } from "./data/Products.js";
import { users } from "./data/users.js";
import Product from "./Models/ProductModel.js";
import User from "./Models/UserModel.js";
import asyncHandler from "express-async-handler";
import Cart from "./Models/CartModel.js";
import Custom from "./Models/CustomModel.js";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importProducts = await Product.insertMany(Products);
    res.send({ importProducts });
  })
);

ImportData.post(
  "/custom",
  asyncHandler(async (req, res) => {
    console.log(req.body.data);
    const custom = await new Custom(req.body.data).save();
    res.send({ custom });
  })
);

ImportData.post(
  "/cart",
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const importCustom = await Custom.insertMany(custom);
    res.send({ importCustom });
  })
);

ImportData.post(
  "/cart/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    await Cart.updateOne({ qty: product.qty }, { $set: { qty: 1 } });
    const cart = await Cart.insertMany(product, Custom);
    res.send({ cart });
  })
);

ImportData.put(
  "/addqty/:id",
  asyncHandler(async (req, res) => {
    const product = await Cart.findById(req.params.id);
    if (product) {
      await Cart.updateOne({ qty: product.qty }, { $inc: { qty: 1 } });
      res.json(product);
    }
  })
);

ImportData.put(
  "/removeqty/:id",
  asyncHandler(async (req, res) => {
    const product = await Cart.findById(req.params.id);
    if (product) {
      await Cart.updateOne({ qty: product.qty }, { $inc: { qty: -1 } });
      res.json(product);
    }
  })
);

ImportData.delete(
  "/cart/:id",
  asyncHandler(async (req, res) => {
    const product = await Cart.findById(req.params.id);
    await Cart.deleteOne(product);
    res.json(product);
  })
);

export default ImportData;
