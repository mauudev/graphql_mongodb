import mongoose from 'mongoose';


const productsListSchema = new mongoose.Schema({
    category: String,
    productName: String,
    price: Number,
    colors: Object,
    imgPath: String,
})


export default mongoose.model('productlists', productsListSchema);
