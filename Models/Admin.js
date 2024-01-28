const mongoose = require("mongoose")

const adminSchema = mongooseSchema({
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
const Admin = mongoose.modal("Admin",adminSchema);

//export user modal
module.exports = Admin;