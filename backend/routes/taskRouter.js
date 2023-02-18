
import express from "express";
import { addtask } from "../controllers/taskController";

const router = express.Router();
router.post('/addtask',addtask)
export  default router
