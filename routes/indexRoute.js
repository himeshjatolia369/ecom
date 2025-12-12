const express=require('express');
const router=express.Router()
const isloggedin=require('../middlewares/isLoggedin')

router.get('/',(req,res)=>{
    let error=req.flash("error")
    res.render('index',{error:error})
})

router.get('/register',(req,res)=>{
    res.render("index")
})
router.get('/login',(req,res)=>{
    res.render("login")
})

router.get('/shop',isloggedin,(req,res)=>{
    res.render("shop")
})


module.exports=router