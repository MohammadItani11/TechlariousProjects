const mongoose = require("mongoose")

const userSchema = mongooseSchema({
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
    }
})

//create user modal
const User = mongoose.modal("User",userSchema);

//export user modal
module.exports = User;