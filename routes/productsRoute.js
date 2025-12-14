const express = require('express')
const router = express.Router()
const upload = require('../config/multerConfig')
const productModel = require('../models/product-module')

router.get("/", (req, res) => {
    res.send("Product page")
})
router.post("/create", upload.single('image'), async(req, res) => {
    const {name,description,price,discount,bgcolor,panelcolor,textcolor}=req.body
    const product =await productModel.create({
        name,
        description,
        image:{
            data:req.file.buffer,
            contentType:req.file.mimetype
        },
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor
    })
    req.flash("created","Product created")
    res.redirect('/owners/admin')
})

router.get('/images/:id',async(req,res)=>{
    const product=await productModel.findById(req.params.id)
    res.set('Content-Type',product.image.contentType)
    res.send(product.image.data)
})

module.exports = router