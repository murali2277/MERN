const Task = require("../models/Task");
const User = require("../models/User");

exports.tasks = async (req,res) => {
    try{
  const {title,description,status}=req.body;
  const task = await Task.create({
    title,
    description,
    status,
  });
    res.status(200).json({message:"Task Created Successfully"});
    } catch (err){
        res.status(500).json(err);
    }
};
