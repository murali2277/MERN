const express = require("express");
const router = express.Router();

const {
  tasks,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/taskControllers");
const { protect } = require("../middleware/authmiddleware");
router.post("/task", protect, tasks);
router.get("/tasks", protect, getTasks);
router.get("/:id", protect, getTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);
module.exports = router;
