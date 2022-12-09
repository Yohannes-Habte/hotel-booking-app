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
mongoose.connect(process.env.MONGO);
mongoose.connection.on("open", () => console.log("Database connection established"));
mongoose.connection.on("error", () => console.error); 
// Every changes will be informed 
app.use(morgan("tiny"));

// Express middleware - End Points
app.use("/users", userRoute);
app.use("/hotels", hotelRoute);
app.use("/rooms", roomRoute);
app.use("/admin", adminRoute);

// Express middleware - Error handler
app.use(globalErrorHandler);

app.listen(PORT, () => { 
  console.log(`The server has started on port ${PORT}`);
});