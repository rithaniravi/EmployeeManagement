const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const User=require('../model/usermodel')
const asyncHandler=require('express-async-handler')




const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    console.log(name,email,password)
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please enter all fields')
    }
    const userExists=await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('user already exists')
    }

    const salt=await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(password,salt)
    
    const user=await User.create({
        name,
        email,
        password:hashpassword,
    });
    if(user){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateJWT(user.id)
        })}
        else{
            res.status(400)
            throw new Error("invalid data")
        }
    
})

const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateJWT(user.id)

        })
    }else{
        res.status(400)
        throw new Error("Invali email and password")
    }
})
const getUser=asyncHandler(async(req,res)=>{
    // const {_id,email,name}=await User.findById(req.user.id)
    res.status(200).json(req.user)
})

const generateJWT=(id)=>{
    return jwt.sign({id},process.env.JWT_KEY,{expiresIn:'20d',})
}

module.exports={registerUser,loginUser,getUser}