const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true }
  },
  {
    // Adds createdAt and updatedAt fields
    timestamps: true
  }
);

const Habit = mongoose.model("Habit", HabitSchema);

module.exports = Habit;
