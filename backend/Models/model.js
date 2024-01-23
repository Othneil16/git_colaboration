const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    fullName:{

    },
    email:{

    },
    password:{

    },
}{timestamps:true})

const classwork = mongoose.schema('class', classModel)