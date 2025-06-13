const mongoose =  require("mongoose")
require("dotenv").config()
const db_uri = process.env.DB_URI





const connect = async()=>{
    try {
          mongoose.connect(db_uri)
          console.log("mongodb connected successfully")
    } catch (error) {
        console.error("error in connecting mongodb",error)
    }

}




module.exports=connect