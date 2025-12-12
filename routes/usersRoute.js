const express = require('express')
const router = express.Router()
const {registeruser}=require('../controllers/authController')
const {loginuser}=require('../controllers/authController')
const {logoutuser}=require('../controllers/authController')
router.get("/", (req, res) => {
    res.send("user page")
})

router.post("/register", registeruser)

router.post('/login',loginuser)

router.get('/logout',logoutuser)

module.exports = router