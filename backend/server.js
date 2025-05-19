//  to run its terminal of backend type "npm run start" 
// to run frontend terminal type " npm run dev"

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({
  origin: ['https://visual-identity-xi.vercel.app' , 'http://localhost:4000/'],
  credentials: true, // Only if you're using cookies or authorization headers
}));


// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define Schema
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Route to store contact details
app.post("/Contact", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;
  const contact = new Contact({ firstName, lastName, email, phoneNumber, message });
  await contact.save();
  res.json({ success: true, message: "Contact details saved!" });
});

// Start Server
const PORT = process.env.PORT || 5000; // Change to 5001 or another port

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

 