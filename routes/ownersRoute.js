const express = require('express')
const ownerModule = require('../models/owner-module')
const router = express.Router()

// console.log(process.env.NODE_ENV)

router.get("/", (req, res) => {
    res.send("Owner page")
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

module.exports = router

