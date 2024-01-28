const mongoose = require("mongoose")

const songSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    artist: {
        type: String
    },
    description: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
    },
    language: {
        type: String
    },
    songPic: {
        type: String
    }
})

//create song schema
const Song = mongoose.modal("Song",songSchema);

//export Song modal
module.exports = Song;