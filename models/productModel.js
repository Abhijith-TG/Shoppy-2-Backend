import mongoose from 'mongoose';

//productId,productName,productPrice,productImg,description

const productSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true,
    },
    productName:{
        type:String,
        required:true,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productImg:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        enum: ['Electronics', 'Books', 'Clothing', 'Other'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    
})

const Product = mongoose.model('Product',productSchema);
export default Product;