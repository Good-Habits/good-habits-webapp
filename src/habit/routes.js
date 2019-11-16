const router = require("express").Router();
const Habit = require("./models/Habit");

router.get("/list", async (req, res) => {
  if (req.user) {
    let habits = [];
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
    }
    return res.json(habits);
  }
  res.json({});
});
router.get("/:slug", async (req, res) => {
  if (req.user) {
    let habit = {};
    try {
      habit = await Habit.findOne(
        { slug: req.params.slug },
        { name: 1, slug: 1, _id: 0 }
      );
    } catch (e) {
      console.error(e);
    }
    return res.json(habit);
  }
  res.json();
});

module.exports = router;
