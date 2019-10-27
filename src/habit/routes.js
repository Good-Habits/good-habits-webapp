const express = require("express");
const router = express.Router();
const Habit = require("./models/Habit");

router.get("/list", async (req, res) => {
  if (req.user) {
    try {
      habits = await Habit.find(
        { user: req.user._id },
        { name: 1, slug: 1, _id: 0 }
      );
    } catch (e) {
      console.error(e);
      return res.json({});
    }
    return res.json(habits);
  }
  return res.json({});
});

module.exports = router;
