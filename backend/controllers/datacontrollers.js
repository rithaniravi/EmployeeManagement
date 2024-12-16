const asyncHandler=require('express-async-handler')
const Data=require('../model/datamodel')
const User = require('../model/usermodel')
// const multer= required('multer')
// const upload=multer({dest:'uploads/'})


const getData=asyncHandler(async (req,res)=>{
    const data=await Data.find({user:req.user.id})
    res.status(200).json(data)
})
const setData=asyncHandler(async(req,res)=>{
    if(!req.body){
        res.status(400); 
        throw new Error('Pls Enter the name')
    }
    const data=await Data.create({
        user:req.user.id,
        name:req.body.name,
        email:req.body.email,
        mobileno:req.body.mobileno,
        designation:req.body.designation,
        gender:req.body.gender,
        course:req.body.course,
       
    })  
    res.status(200).json(data)
})  
    
const putData=asyncHandler(async(req,res)=>{
    const data = await Data.findById(req.params.id)
    if(!data){
        res.status(400)
        throw new Error('Goal not found')
    }
    // const user=await User.findById(req.user.id);
    if(!req.user){
        res.status(400)
        throw new Error('user not found')
    }
   if(data.user.toString() !== req.user.id){
        res.status(400)
        throw new Error('user not authorized')
   }
    const updateddata=await Data.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.status(200).json(updateddata)
})
const deleteData=asyncHandler(async(req,res)=>{
    const data = await Data.findByIdAndDelete(req.params.id)
    if(!data){
        res.status(400)
        throw new Error('Goal not found')
    }
    // const user=await User.findById(req.user.id);
    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }
   if(data.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('user not authorized')
   }
    

    res.status(200).json({id:req.params.id})
})

module.exports={
    getData,setData,putData,deleteData
}