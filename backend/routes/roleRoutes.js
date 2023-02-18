import { addRole } from "../controllers/RoleController";
import express from "express";

const router = express.Router();
router.post('/addrole',addRole)
export  default router
