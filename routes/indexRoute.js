const express=require('express');
const router=express.Router()
const isloggedin=require('../middlewares/isLoggedin')
const productModel=require('../models/product-module')
const userModel=require('../models/user-module')
const {generateBill}=require('../utils/generateBill')

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
    let success=req.flash("success")
    let added=req.flash("added")
    res.render("shop",{products,success,added})
})
router.get('/cart',isloggedin,async(req,res)=>{
    const user=await userModel
    .findById(req.user._id)
    .populate('cart.productId')
    const bill=generateBill(user.cart)
    res.render("cart",{user,bill})
})

router.post('/addtocart/:productid',isloggedin,async(req,res)=>{
    let user=await userModel.findOne({email:req.user.email})
    let product=await productModel.findById(req.params.productid)

    if(!product){
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    const item=user.cart.find(
        i=>i.productId.toString()===product._id.toString()
    )

    if(item){
        req.flash("Added","Prodduct is already added to Cart")
    }
    else{
        user.cart.push({
            productId:product._id,
            price:product.price,
            quantity:1
        })
    }
    await user.save()
    res.redirect('/shop')
})

router.post('/cart/decrease/:productid', isloggedin, async (req, res) => {
    const user = await userModel.findById(req.user._id);

    const item = user.cart.find(
        i => i.productId.toString() === req.params.productid
    );

    if (!item) return res.redirect('back');

    if (item.quantity > 1) {
        item.quantity -= 1;
    }

    await user.save();
    res.redirect('/cart');
});


router.post('/cart/increase/:productid', isloggedin, async (req, res) => {
    const user = await userModel.findById(req.user._id);

    const item = user.cart.find(
        i => i.productId.toString() === req.params.productid
    );

    if (!item) return res.redirect('back');

    if (item.quantity > 0) {
        item.quantity += 1;
    }

    await user.save();
    res.redirect('/cart');
});

router.post('/cart/remove/:productid',isloggedin,async(req,res)=>{
    const user= await userModel.findById(req.user._id)

    user.cart= user.cart.filter(
        i=> i.productId.toString() !== req.params.productid.toString()
    )

    await user.save()
    res.redirect('/cart')
})


module.exports=router