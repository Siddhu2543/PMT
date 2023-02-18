// import {
//   getUsers,
//   getUserById,
//   registerUser,
//   getUserByUsernameAndPassword,
// } from "../controllers/userController.js";
// import express from "express";

// const router = express.Router();

// router.route("/").get(getUsers);

// router.route("/:id").get(getUserById);

// router.route("/register").post(registerUser);

// router.route("/signin").post(getUserByUsernameAndPassword);

// export default router;

import{registerUser} from "../controllers/userController.js";
import express from "express";
const router=express.Router();
router.route("/register").post(registerUser);
export default router;