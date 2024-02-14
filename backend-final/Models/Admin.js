const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
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
const Admin = mongoose.model("Admin",adminSchema);

//export user modal
module.exports = Admin;