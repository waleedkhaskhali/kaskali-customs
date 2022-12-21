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

export default customRoute;
