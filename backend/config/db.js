import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    await console.log(`DB connected successfully : ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
