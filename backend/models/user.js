import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: { type: String, required: true, immutable: true },
  userName: { type: String, unique: true, required: true, trim: true },
  password: { type: String, minlength: 6, maxlength: 12, required: true },
  userGender: { type: String, enum: ["male", "female"], required: false },
});

export default mongoose.model("User", userSchema);
