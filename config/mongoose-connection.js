const mongoose=require('mongoose')
const dbg = require('debug')("development:mongoose");
const config=require('config')
mongoose
.connect(`${config.get("MONGODB_URL")}/ecom`)
.then(()=>{
dbg('connected')
})
.catch((err)=>{
console.log(err)
})

module.exports = mongoose.connection