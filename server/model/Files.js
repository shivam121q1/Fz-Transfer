const mongoose = require('mongoose')

const Files = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    fileSize:{
        type: Number,
        required: true
    },
    fileType:{
        type: String,
        required: true
    },
    sendername:{
        type: String,
        required: true
    },
    encryptPassword:{
        type:String,
        required: false
    },
    fileUrl:{
        type: String,
        required: true
    }
})

model.exports = mongoose.model('File',Files)