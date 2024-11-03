const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        max:50000,
        min:0,
    },
    quantity:{
        type: Number,
        required: true,
    },
    category:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('Products' , ProductSchema);