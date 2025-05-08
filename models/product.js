import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    altNames : {
        type : [String],
        default : []
    },
    price : {
        type : Number,
        required : true
    },
    labeledPrice : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    images : {
        type : [String],
        required : true,
        default : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKsVMqxDO9OH7T5EHtnQv3bb-44MGus3ing&s"]
    },
    stock : {
        type : Number,
        required : true
    },
})

const Product = mongoose.model('Products', productSchema)
export default Product;