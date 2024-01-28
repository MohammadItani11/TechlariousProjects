const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
    songId: {
        type: mongoose.types.ObjectId,
        ref: "Song"
    }
})