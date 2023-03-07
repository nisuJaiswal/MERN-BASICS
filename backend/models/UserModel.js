const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide Name"],
    },
    email: {
        type: String,
        required: [true, "Please Provide Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please Provide Password"]
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("User", userModel)