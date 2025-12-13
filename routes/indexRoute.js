const express=require('express');
const router=express.Router()
const isloggedin=require('../middlewares/isLoggedin')
const productModel=require('../models/product-module')
const userModel=require('../models/user-module')

router.get('/',(req,res)=>{
    let error=req.flash("error")
    res.render('index',{error:error})
})

router.get('/register',(req,res)=>{
    let error=req.flash("error")
    res.render("index",{error:error})
})
router.get('/login',(req,res)=>{
    res.render("login")
})

router.get('/shop',isloggedin,async(req,res)=>{
    const products=await productModel.find();
    res.render("shop",{products})
})


module.exports=router