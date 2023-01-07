import mongoose from "mongoose";

const customSchema = mongoose.Schema(
  {
    backRimColor: {
      type: String,
    },
    chainColor: {
      type: String,
    },
    frameColor: {
      type: String,
    },
    frontRimColor: {
      type: String,
    },
    gripColor: {
      type: String,
    },
    tireColor: {
      type: String,
    },
    price: {
      type: String,
    },
    qty: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Custom = mongoose.model("Custom", customSchema);

export default Custom;
