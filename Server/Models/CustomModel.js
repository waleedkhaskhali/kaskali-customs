import mongoose from "mongoose";

const customSchema = mongoose.Schema(
  {
    backRim: {
      type: String,
    },
    chain: {
      type: String,
    },
    frame: {
      type: String,
    },
    frontRim: {
      type: String,
    },
    grip: {
      type: String,
    },
    tire: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Custom = mongoose.model("Custom", customSchema);

export default Custom;
