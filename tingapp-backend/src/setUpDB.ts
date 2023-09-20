import mongoose from "mongoose";
import { config } from "./config";
export default () => {
  const connectDB = () => {
    mongoose
      .connect(`${config.DB_URL}`)
      .then(() => {
        console.log("DB connected successfully...");
      })
      .catch((err) => {
        console.log("Error connecting to database", err);
        return process.exit(1);
      });
  };
  connectDB();

  mongoose.connection.on("disconnected", connectDB);
};
