const express=require('express')
const router=express.Router();
const {getData,setData,putData,deleteData}=require('../controllers/datacontrollers')
const {protect}=require('../middleware/authmiddleware')

router.route('/').get(protect,getData).post(protect,setData)
router.route('/:id').put(protect,putData).delete(protect,deleteData)
module.exports=router; 
