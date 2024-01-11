import mongoose from "mongoose";

const addschema = new mongoose.Schema({
    artist: {
        type:String,
        unique:true,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    bigtitle: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    },
    Link1: {
        type:String,
        required:true
    }
    ,Link2: {
        type:String,
        required:true
    }
})

const addItem = mongoose.model('art',addschema);

export default addItem;