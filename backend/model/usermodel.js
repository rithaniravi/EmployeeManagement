const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter name']
    },
    email:{
        type:String,
        required:[true,'please enter email']
    },
    password:{
        type:String,
        required:[true,'please enter password']
    }
},
{
    timestamps:true,
})

const UserModel=mongoose.model('user',UserSchema)
module.exports=UserModel;
