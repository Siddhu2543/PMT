import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set('strictQuery', true)
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log(`Database Connected successfully Host: ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
