import { registerteam } from "../controllers/teamController";
import express from "express";
const router = express.Router();
router.post('/addteam',registerteam);
export  default router

