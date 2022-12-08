import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
//! Step 1 for "cookie-aarser"
import cookieParser  from "cookie-parser"

// Routes
import userRoute from "./routes/userRoute.js";
import hotelRoute from "./routes/hotelRoute.js";
import roomRoute from "./routes/roomRoute.js";
import adminRoute from "./routes/adminroute.js"
import globalErrorHandler from "./middleware/globalErrorHandler.js";

const app = express();
app.use(cors());
//! Step 2 for "cookie-aarser"
app.use(cookieParser());

app.use(express.json());
const PORT = process.env.PORT || 5000;

dotenv.config();
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected")
});

// End points
app.use("/users", userRoute);
app.use("/hotels", hotelRoute);
app.use("/rooms", roomRoute);
app.use("/admin", adminRoute);

// Every changes will be informed 
app.use(morgan("tiny"));

// Error handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
    connect()
  console.log(`The server has started on port ${PORT}`);
});
