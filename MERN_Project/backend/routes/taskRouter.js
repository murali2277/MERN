const express=require('express')
const router=express.Router()

const {task}=require('../controller/taskControllers')
router.post('/task',task)
module.exports=router