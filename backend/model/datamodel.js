const mongoose=require('mongoose')
const DataSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        require:true,
    },
    name:{
        type:String,
        required:[true,'please enter name']
    },
    email:{
        type:String,
        required:[true,'please enter email']
    },
    mobileno:{
        type:Number,
        required:[true,'please enter Mobile No']
    },
    designation:{
        type:String,
        required:[true,'please select designation']
    },
    gender:{
        type:String,
        required:[true,'please select gender']
    },
    course:{
        type:String,
        required:[true,'please select course']
    },
    image:{
        type:String,
        required:[true,'please upload image']

    },

},
{
    timestamps:true,
}
);

const DataModel=mongoose.model('data',DataSchema);
module.exports=DataModel;