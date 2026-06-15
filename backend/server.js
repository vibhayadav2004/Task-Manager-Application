import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // 1. Added CORS import
import userRouter from "./routes/userRoute.js"; 
import connectDB from "./config/db.js"; 
import taskRouter from "./routes/taskRoute.js";

dotenv.config();

const app = express();

// Change the fallback from 5000 to 4000 to match your .env file
const PORT = process.env.PORT || 4000; 

// Middleware
app.use(cors()); // 2. Added CORS middleware here so frontend can connect
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRouter); 
app.use("/api/tasks", taskRouter);

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const startServer = async () => {
  try {
    await connectDB(); // connect to MongoDB
    app.listen(PORT, () =>
      console.log(`✅ Server started on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();