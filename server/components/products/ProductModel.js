const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true,
    },
    title: {
        type: String,
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    coverImage: {
        type: String
    },
    averageRating: {
        type: Number
    },
    reviews: {
        type: String
    },
});
module.exports = mongoose.models.product || mongoose.model('product', schema);



