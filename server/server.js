const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const { messageRouter } = require("./routes/message.route");
const { connectDB } = require("./config/db");

dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(helmet());

// Test Check Route
app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "Server Connected" });
});

// API Routes
app.use("/api/message", messageRouter)

// Handle Unknown Routes
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server running on port ${PORT}`);
});
