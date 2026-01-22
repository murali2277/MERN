const Task = require("../models/Task");
const User = require("../models/User");

exports.tasks = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const userId = req.user?.id || req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const task = await Task.create({
      title,
      description,
      status,
      user: userId,
    });
    res.status(200).json({ message: "Task Created Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    if (!tasks || tasks.length==0){
      return res.status(404).json({message:"No Task"});
    }  
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.getTask=async (req,res) => {
  try{
    const {id}= req.params;
    const task=await Task.findOne({_id:id,user:req.user.id});
    if (!task || task.length==0){
      return res.status(404).json({message:"No Task"});
    }  
    res.status(200).json({task})
  } catch (err){
    res.status(500).json(err);
  }
};
exports.updateTask=async (req,res) => {
  try{
    const {id}=req.params;
    const user=req.user.id;
    const {title,description,status}=req.body;
    if (!user){
      return res.status(401).json({message:"Unauthorized"});
    }
    const task=await Task.findOneAndUpdate(
      {_id:id,user},
      {title,description,status},
      {new:true}
    )
    if(!task){
      return res.status(404).json({message:"No Task"});
    }
    res.status(200).json({task,message:"Update Successfully"});
  } catch (err){
    res.status(500).json({err});
  }
}