const mongoose = require('mongoose');
const mysql = require('mysql2');
const MONGODB = require('../config');

const mongoUri = MONGODB.MONGODB_URI;
const mysqlConfig = {
    host: '192.168.0.129',
    port: 3306,
    user: 'root',
    password: "01285740786Tin'",
    database: 'test_db',
  };
  
const connectMongo = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const connectMySQL = () => {
  const connection = mysql.createConnection(mysqlConfig);
  connection.connect((error) => {
    if (error) {
      console.error("Error connecting to MySQL:", error);
    } else {
      console.log("Connected to MySQL!");
    }
  });
};

module.exports = {
  connectMongo,
  connectMySQL,
};
