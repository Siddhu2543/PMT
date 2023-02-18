
import express from "express";
import { addproject } from "../controllers/projectController";

const router = express.Router();
router.post('/addproject',addproject);
export  default router
