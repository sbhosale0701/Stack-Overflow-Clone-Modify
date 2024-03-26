import mongoose from "mongoose";

// Schema for Logged in User's details

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String },
  tags: { type: [String] },
  subscription: {
    pack_type: { type: String, default: "free" },
    pack_start_date: { type: Date, default: Date.now },
    attempts: { type: Number, default: 1 },
  },
  joinedOn: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
