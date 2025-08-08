import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

console.log(process.env);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `mongodb connected! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("error connecting to db", error);
  }
};

export default connectDB;
