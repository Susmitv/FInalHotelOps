const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    enum: ["housekeeping", "maintenance", "frontdesk"],
    required: true,
  },

  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },

  status: {
    type: String,
    enum: [
      "pending",
      "accepted",
      "in-progress",
      "completed",
    ],
    default: "pending",
  },

  roomNumber: {
    type: String,
  },

  estimatedTime: {
    type: Number,
  },

  actualTime: {
    type: Number,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("Task", taskSchema);
