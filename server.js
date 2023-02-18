import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./backend/config/db.js";
import userRoutes from "./backend/routes/userRoutes.js";

// connect db
connectDB();

// dotenv config
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// creating API for user
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

// Express js listen method to run project on http://localhost:5000
app.listen(
  PORT,
  console.log(
    `App is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
