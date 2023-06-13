const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId },
    email: {
        type: String,
        unique: true,        //Duy nhất
        trim: true,          //Bỏ trắng 2 đầu
        required: true,      //Bắt buộc
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        trim: true,
        required: true,//Bắt buộc
    }
});

// const schema = new Schema({
//     id: { type: ObjectId },
//     email: {
//         type: String,
//         unique: true,        //Duy nhất
//         trim: true,          //Bỏ trắng 2 đầu
//         required: true,      //Bắt buộc
//     },
//     username: {
//         type: String,
//     },
//     password: {
//         type: String,
//         trim: true,
//         required: true,//Bắt buộc
//     },
//     age: {
//         type: Number,
//     },
//     avatar: {
//         type: String,
//     },
//     country: {
//         type: String,
//     },
//     subscriptionStatus: {
//         type: Date
//     },
//     subscriptionEndDate: {
//         type: Date
//     },
//     favoriteBooks: {
//         type: [mongoose.Schema.Types.ObjectId],
//         ref: 'Product'
//       },
//       readingHistory: {
//         type: [mongoose.Schema.Types.ObjectId],
//         ref: 'Product'
//       }
// });
module.exports = mongoose.models.user || mongoose.model('user', schema);