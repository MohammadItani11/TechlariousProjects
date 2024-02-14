const mongoose = require("mongoose")

const playlistSchema = mongoose.Schema({
    songs: [
        {
            songId: {
                type: mongoose.types.ObjectId,
                ref: "Song"
            }
        }
    ],
    userId: {
        type: mongoose.types.ObjectId,
        ref: "User",
        required: true
    },
    coverPic: {
        type: String
    },
    collaborators: [
        {
            userId: {
                type: mongoose.types.ObjectId,
                ref: 'User'
            }
        }
    ],
    reviews: [
        {
            userId: {
                type:mongoose.types.ObjectId,
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

//create playlist modal
const Playlist = mongoose.model("Playlist",playlistSchema);

//export playlist modal
module.exports = Playlist