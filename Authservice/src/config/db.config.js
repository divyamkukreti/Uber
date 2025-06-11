
require("dotenv").config()
const mongoose = require("mongoose")
const db_uri = process.env.MONGO_URI
const connect = async()=>{
    try {
            await  mongoose.connect(db_uri)             
           console.log("successfully connected to mongodb")

    } catch (error) {
        console.error("error in connecting mongodb",error)
    }
}



module.exports={connect}