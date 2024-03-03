const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "please provide email"]
    },
    password: {
        type: String,
        required: true,
        select: false
    },

}, {
    timestamps: true
})

module.exports = mongoose.model("user",userSchema);