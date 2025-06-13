const express = require("express")
const app= express()
require("dotenv").config()
const PORT = process.env.PORT || 5001
const connection = require("../src/config/db.config")
connection()













app.listen(PORT,()=>{
    console.log("userservice is running on port",PORT)
})







