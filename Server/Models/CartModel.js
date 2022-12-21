import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
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

    const Cart = mongoose.model("Cart", cartSchema)

    export default Cart;