const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
    songId: {
        type: mongoose.types.ObjectId,
        ref: "Song",
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.types.ObjectId,
        ref: "User",
        required: true
    }
})

//create Reviews Modal
const Reviews = mongoose.model("Reviews",reviewsSchema);

//export Reviews Modal
module.exports = Reviews;