require("dotenv").config();

const jwt=require('jsonwebtoken')

const generateToken=(newUser)=>{
    return jwt.sign({ email: newUser.email, id: newUser._id },process.env.JWT_SECRET)
}
module.exports.generateToken=generateToken