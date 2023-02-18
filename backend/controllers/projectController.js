import Project from '../models/Project.js';
import asyncHandler from "express-async-handler";

export const addproject = asyncHandler(async (req, res) => {
    const project = new project({
        Projectname: req.body.Projectname,  
        Description: req.body.Description,
        Details: req.body.details,
        Status: req.body.Status,
        Deadline:req.body.deadline
    });
    await project.collection.insertOne(Project).then(
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