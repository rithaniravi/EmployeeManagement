const express=require("express")
const dotenv= require('dotenv').config()
const cors=require("cors")
const colors=require('colors')
const { errorHandler } = require("./middleware/errorhandler")
const port=process.env.PORT || 5000
const connectDB= require('./config/db')
const app=express()

connectDB();
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/data',require('./routes/dataroutes'))
app.use('/user',require('./routes/userroutes'))
app.use(errorHandler)
app.listen(port,()=>{

    console.log(`server is running in port ${port}`)
})