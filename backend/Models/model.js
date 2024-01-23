const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    fullName:{
        type:String

    },
    email:{
        type:String

    },
    password:{
        typeString

    },
},{timestamps:true})

const classwork = mongoose.model('class', classSchema)

module.exports = classwork