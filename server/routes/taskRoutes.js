const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  acceptTask,
  completeTask,
} = require("../controllers/taskController");


// CREATE TASK
router.post("/", protect, createTask);


// GET TASKS
router.get("/", protect, getTasks);


// ACCEPT TASK
router.put("/accept/:id", protect, acceptTask);


// COMPLETE TASK
router.put("/complete/:id", protect, completeTask);


module.exports = router;
