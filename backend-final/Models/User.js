const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        required: true
    }
})

//create user modal
const User = mongoose.model("User",userSchema);

//export user modal
module.exports = User;