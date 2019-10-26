const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) => res.render("login"));
router.get("/github", passport.authenticate("github"));
router.get(
  "/verify",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
