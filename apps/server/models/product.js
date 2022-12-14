import mongoose from 'mongoose';
const { Schema } = mongoose;
const productSchema =new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    price:String,
    image:String,
})
const Product=mongoose.model('Product',productSchema)
export default Product;