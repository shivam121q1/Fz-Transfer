const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim:true
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true,
    },
    Files:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
    }]

})

module.exports = mongoose.model("User",UserModel);