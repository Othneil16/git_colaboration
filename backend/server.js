const express = require('express')
require('dotenv')
const port = process.env.port

const app = express()
app.use(express.json())

app.listen(port,()=>{
    console.log(`server is listening on port:${port}`)
})
