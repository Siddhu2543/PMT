import Task from '../models/Task.js';
import asyncHandler from "express-async-handler";

export const addtask = asyncHandler(async (req, res) => {
    const task = new Task({
        taskTitle: req.body.taskTitle,  
        Description: req.body.Description,
        project: req.body.package,
        type:req.body.type,
        task: req.body.task,
        Deadline:req.body.deadline
    });
    await task.collection.insertOne(Task).then(
      (result) => {
        res.json({ insertedId: result.insertedId });
      },
      (err) => {
        if (err.code === 11000)
          res.json({ message: "Entered credentials are already in use!" });
        else res.json({ message: "Something went wrong! Try again!" });
      }
    );
  });