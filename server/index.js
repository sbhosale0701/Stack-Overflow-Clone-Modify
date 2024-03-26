import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import Other File
import connectDB from "./dataConnect.js";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Question.js";
import answerRoutes from "./routes/Answers.js";
import chatbotRoutes from "./routes/chatbot.js";
import paymentRoutes from "./routes/payment.js";
import subscribeRoutes from "./routes/subscribe.js";

dotenv.config();
// MongoDb Atlas connection
connectDB();

// Start The Express
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use("/", (req, res) => {
//   res.send("Backend Server Running !!");
// });

// All Express Routes
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
app.use("/chatbot", chatbotRoutes);
app.use("/payment", paymentRoutes);
app.use("/subscription", subscribeRoutes);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("I am Running");
  console.log(`server running on port ${PORT}`);
});
