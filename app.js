const express=require('express');
const app=express();
const multer=require('multer')
const userModule=require("./models/user-module")
const productModule=require("./models/product-module")
const ownerModule=require("./models/owner-module")
const path=require('path');
const cookieParser = require('cookie-parser');
const flash=require('connect-flash')
const expressSession=require('express-session')
require('dotenv').config()

const db=require("./config/mongoose-connection");
const userRoute = require('./routes/usersRoute');
const productRoute=require('./routes/productsRoute');
const ownersRoute=require('./routes/ownersRoute');
const indexRoute=require('./routes/indexRoute')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET
    }
    )
)
app.use(flash())

app.use(express.static(path.join(__dirname,"public")));
app.set("views", path.join(__dirname, "views"));



app.set("view engine","ejs")
app.use("/users",userRoute)
app.use("/owners",ownersRoute)
app.use("/products",productRoute)
app.use("/",indexRoute)

app.listen(3000);