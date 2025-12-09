const express=require('express');
const router=express.Router()


router.get('/',(req,res)=>{
    res.send("welocme to my  page")
})

router.get('/register',(req,res)=>{
    res.render("index")
})



module.exports=router