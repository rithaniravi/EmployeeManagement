const express=require('express')
const router=express.Router();
const{registerUser,loginUser,getUser}=require("../controllers/usercontrollers");
const {protect}=require('../middleware/authmiddleware')


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/getuser', protect,getUser);


module.exports=router;