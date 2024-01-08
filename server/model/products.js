import mongoose from "mongoose";

const valid= new mongoose.Schema({
    id:{
        type:Number,
        unique:true
    },
    url: String,
    bigUrl:String,
    Artist:String,
    shortTitle:String,
    longTitle:String,
    price: String
});

const Product = mongoose.model('product', valid)

export default Product;