const express = require("express");
const router = express.Router();
const Habit = require("./models/Habit");

router.get("/list", async (req, res) => {
  if (req.user) {
    try {
      habits = await Habit.find(
        // A filter query to the database
        { user: req.user._id },
        // Selecting the fields that we want,
        // and removing the `_id` field, that
        // adds by MongoDB by default
        { name: 1, slug: 1, _id: 0 }
      );
    } catch (e) {
      console.error(e);
      return res.json({});
    }
    return res.json(habits);
  }
  res.json({});
});

module.exports = router;
