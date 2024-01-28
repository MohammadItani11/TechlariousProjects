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
    }
})

//create playlist modal
const Playlist = mongoose.modal("Playlist",playlistSchema);

//export playlist modal
module.exports = Playlist