const express=require('express')
const router=express.Router()

const {tasks}=require('../controller/taskControllers')
router.post('/task',tasks)
module.exports=router