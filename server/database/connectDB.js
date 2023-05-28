const mongoose = require('mongoose');
require('../components/products/ProductModel');
require('../components/users/UserModel');
const MONGODB = require('../config');
const uri = MONGODB.MONGODB_URI;


const connect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas!");


        // Sau khi hoàn thành, đóng kết nối
        // await mongoose.disconnect();
        // console.log("Disconnected from MongoDB Atlas!");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
}


module.exports = {
    connect
}
