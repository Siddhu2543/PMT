import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
    res.status(404);
    throw new Error('User not found');
  }
});

export const getUserByUsernameAndPassword = asyncHandler(async (req, res) => {
  await User.findOne({
    userName: req.body.userName,
    password: req.body.password,
  }).then(
    (user) => {
      res.json(user);
    },
    (err) => {
      res.json({ message: err.message });
    }
  );
});

export const registerUser = asyncHandler(async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    profilePhoto: req.body.profilePhoto,
    email: req.body.email,
    address: req.body.address,
    onLeave: req.body.onLeave,
    password: req.body.password,
    
  });
  await User.collection.insertOne(user).then(
    (result) => {
      res.json({ insertedId: result.insertedId });
    },
    (err) => {
      if (err.code === 11000)
        res.json({ message: 'Entered credentials are already in use!' });
      else res.json({ message: 'Something went wrong! Try again!' });
    }
  );
});
