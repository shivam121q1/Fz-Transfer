const mongoose = require('mongoose')

const Files = new mongoose.Schema({
    fileid: {
        type: Number,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    filesize:{
        type: Number,
        required: true
    },
    filetype:{
        type: String,
        required: true
    },
    filepath:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('File',Files)