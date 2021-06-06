import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        shopName: {
             type: String
        },
        categoryName: {
             type: String
        },
        address: {
            type: String
        },
        product: {
            type: String
        },
        offer : {
            type: Number
        },
        expire: {
             type: Number
        },
        time : { type : Date, default: Date.now }
    }	
);

const productModel = mongoose.model("product", productSchema);

export default productModel;
