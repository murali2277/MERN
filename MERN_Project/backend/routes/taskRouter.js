const express=require('express')
const router=express.Router()

const {tasks,getTasks,getTask, updateTask}=require('../controller/taskControllers')
const {protect}=require('../middleware/authmiddleware')
router.post('/task',protect,tasks)
router.get('/gettask',protect,getTasks)
router.get('/:id',protect,getTask)
router.put('/:id',protect,updateTask)
module.exports=router