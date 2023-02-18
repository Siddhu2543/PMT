import Team from '../models/Team.js';
import asyncHandler from "express-async-handler";

export const registerteam = asyncHandler(async (req, res) => {
    const team = new team({
        teamname: req.body.teamname,  
        Description: req.body.Description,
        project: req.body.package,
        
    });
    await team.collection.insertOne(Team).then(
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