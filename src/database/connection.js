import { mongoose } from 'mongoose';


const db_url = 'mongodb://localhost:27017/products';

const connect = async () => {
    await mongoose.connect(db_url, { useNewUrlParser: true });
}

export { connect };
