const mongoose = require("mongoose");
const Habit = require("../../habit/models/Habit");

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

// This code will run when the user is created for
// the very first time. We don't want him to feel
// lonely and want to create placeholder habits
// for him to get started.
UserSchema.post("findOneAndUpdate", async user => {
  hasHabits = await Habit.exists({ user: user._id });
  if (hasHabits) {
    return;
  }
  Habit.create(
    { user: user._id, name: "Save the world" },
    { user: user._id, name: "Work hard, party hard" },
    { user: user._id, name: "Walk in the park" },
    (error, habitWorld, habitParty, habitPark) => {
      if (error) {
        console.error("Failed to create habits on user save!", error);
      }
    }
  );
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
