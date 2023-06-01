const mongoose = require('mongoose');
require('../components/products/ProductModel');
require('../components/users/UserModel');
const MONGODB = require('../config');



const uri = MONGODB.MONGODB_URI;
const mysqlConfig = {
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_mysql_database',
  };

const connect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas!");


        // await mongoose.disconnect();
        // console.log("Disconnected from MongoDB Atlas!");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
}


module.exports = {
    connect
}
