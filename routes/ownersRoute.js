const express = require('express')
const ownerModule = require('../models/owner-module')
const router = express.Router()

// console.log(process.env.NODE_ENV)

router.get("/", (req, res) => {
    res.render("admin")
})

if (process.env.NODE_ENV === 'development') {
    router.post("/create", async (req, res) => {
        const owner = await ownerModule.find()
        if (owner.length > 0) {
            return res.status(500).send("Cannot make owner")
        }
        let {fullname,email,password,gstin}=req.body
        let createdOwner =await ownerModule.create({
            fullname,
            email,
            password,
            gstin
        })
        res.status(201).send("owner created")
    })
}

router.get("/admin", (req, res) => { 
    const created=req.flash("created")
    res.render("createproduct",{created})
})

router.post("/login",async(req,res)=>{
    try {
        const {  email, password } = req.body
        if ( !email || !password) {
            return res.status(400).send("All field's are require")
        }
        const owneremail = await ownerModule.findOne({ email: email })

        if (owneremail) {
            res.redirect("/owners/admin")

        }
        else {
            return res.send("connot login")
        }
    }
    catch (err) {
        res.send(err.message);
    }
})


module.exports = router

