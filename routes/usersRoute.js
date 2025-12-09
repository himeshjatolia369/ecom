const express = require('express')
const router = express.Router()
const {registeruser}=require('../controllers/authController')
router.get("/", (req, res) => {
    res.send("user page")
})

router.post("/register", registeruser)


module.exports = router