import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        _id: {
            type: String,
        },
        name: {
            type: String,
            require: true,
        },
        img: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
            default: 0,
        },
        qty: {
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true,
    }
    )

    const Product = mongoose.model("Product", productSchema)

    export default Product;