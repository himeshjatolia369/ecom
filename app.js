const express=require('express');
const app=express();
const userModule=require("./models/user-module")
const productModule=require("./models/product-module")
const ownerModule=require("./models/owner-module")
const path=require('path');
const cookieParser = require('cookie-parser');


const db=require("./config/mongoose-connection");
const userRoute = require('./routes/usersRouter');
const productRoute=require('./routes/productsRouter');
const ownerRoute=require('./routes/ownersRouter');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));


app.set("view engine","ejs")

app.use("/users",userRoute)
app.use("/products",productRoute)
app.use("/owner",ownerRoute)

app.listen(3000);