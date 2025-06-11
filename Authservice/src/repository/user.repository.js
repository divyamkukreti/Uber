const User = require("../models/user.model")




const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const createUser= async(userdata)=>{
    return await User.create(userdata)
}


module.exports={findUserByEmail,createUser}