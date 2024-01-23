const mongoose = require("../config/config.js")

const db = process.env.dbLink

mongoose.connect(db).then(()=>{
    console.log(`Database Successful`)
}).catch((err)=> {
    console.log(err.message);
})