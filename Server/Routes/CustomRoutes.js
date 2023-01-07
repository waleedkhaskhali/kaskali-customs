import express from "express";
import asyncHandler from "express-async-handler";
import Custom from "../Models/CustomModel.js";

const customRoute = express.Router();

customRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const customItems = await Custom.find({});
    res.json(customItems);
  })
);

customRoute.delete(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    const customItem = await Custom.findById(req.params.id);
    await Custom.deleteOne(customItem);
    res.json(customItem);
  })
);

export default customRoute;
