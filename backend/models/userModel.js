// userModel.js
import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: "user" },
});

// Change this line:
export default mongoose.model("User", UserSchema);
