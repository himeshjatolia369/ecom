const userModule = require('../models/user-module')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {generateToken}=require('../utils/generateToken') 
 
module.exports.registeruser=async (req, res) => {

    try {
        const { fullname, email, password } = req.body
        if (!fullname || !email || !password) {
            return res.status(400).send("All field's are require")
        }
        const useremail = await userModule.findOne({ email: email })

        if (useremail) {
            return res.send("user already exists")
        }
        else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, async(err, hash) => {
                    const newUser =await userModule.create({
                        fullname,
                        email,
                        password:hash
                    })
                    const token = generateToken(newUser)
                    res.cookie("token", token,{ httpOnly: true })
                    return res.send("user created succesfully")
                })
            })
        }
    }
    catch (err) {
        res.send(err.message);
    }
}
