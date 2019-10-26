const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    githubId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: String
  },
  {
    // Adds createdAt and updatedAt fields
    timestamps: true
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
