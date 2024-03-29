const mongoose = require("mongoose")

const songSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
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
    //duration: {
        //type: Number,
    //},
    language: {
        type: String
    },
    songPic: {
        type: String
    },
    songPath: {
        type: String,
        required: true
    },
    reviews: [
        {
            userId: {
                type:mongoose.Types.ObjectId,
                ref: "USer",
            },
            rating:{
                type: Number
            },
            comment: {
                type: String,
            }
        }
    ]
})

//create song schema
const Song = mongoose.model("Song",songSchema);

//export Song modal
module.exports = Song;