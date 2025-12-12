const jwt = require("jsonwebtoken")
const userModule=require('../models/user-module')

module.exports=async(req,res,next)=>{
    if(!req.cookies.token){
            req.flash("error","User must be login")
            res.redirect('/')
    }

    try{
        let decode=jwt.verify(req.cookies.token,process.env.JWT_SECRET)
        let user= await userModule.findOne({email:decode.email}).select("-password")
        req.user=user
        next()
    }
    catch{
        req.flash("error","Somthing went wrong")
        res.redirect('/')
    }

}