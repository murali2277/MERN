const express=require('express')
const router=express.Router()

const {register,login}=require('../controller/authControllers')

router.post('/create',register);

router.post("/api",(req,res) => {
    const temp=req.body;
    res.json({message:{temp}});
})

router.get("/api",(req,res) => {
    res.send("hi from express");
})

router.post('/login',login);    

module.exports=router;