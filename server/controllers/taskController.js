const Task = require("../models/Task");


// CREATE TASK
const createTask = async (req, res) => {

  try {

    const {
      title,
      description,
      department,
      priority,
      roomNumber,
    } = req.body;

    const task = await Task.create({
      title,
      description,
      department,
      priority,
      roomNumber,
      createdBy: req.user.id,
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET ALL TASKS
const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find()
      .populate("createdBy", "name")
      .populate("assignedTo", "name");

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ACCEPT TASK
const acceptTask = async (req, res) => {

  try {

    const { estimatedTime } = req.body;

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.assignedTo = req.user.id;

    task.status = "accepted";

    task.estimatedTime = estimatedTime;

    await task.save();

    res.status(200).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// COMPLETE TASK
const completeTask = async (req, res) => {

  try {

    const { actualTime } = req.body;

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.status = "completed";

    task.actualTime = actualTime;

    await task.save();

    res.status(200).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  createTask,
  getTasks,
  acceptTask,
  completeTask,
};
