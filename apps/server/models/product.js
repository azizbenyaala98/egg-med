import mongoose, { Schema } from "mongoose";
const Schema= mongoose.Schema
const productSchema =new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    price:String,
    image:String
})
const product=mongoose.model('product',productSchema)
export default product;