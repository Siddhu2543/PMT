import Role from '../models/Role.js';
import asyncHandler from "express-async-handler";

export const addRole = asyncHandler(async (req, res) => {
    const role = new Role({
        rolename: req.body.rolename,
        Description: req.body.Description,
        package: req.body.package
    });
    await Role.collection.insertOne(role).then(
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