// Enable reading from the ".env" files
require("dotenv").config();

const express = require("express");
const expressSession = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Create new Express application
const app = express();
app.set("views", "./layouts");
app.set("view engine", "ejs");

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling. The order of middleware is
// pretty important as they are run one after another.
app.use(express.json());
// Morgan logger, check out different pre-build display formats!
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false
  })
);
// Load static assets - client code, styles, images
app.use("/public", express.static(path.join(__dirname, "..", "public")));

// Define routes
app.get("/", (req, res) => {
  res.render("index");
});

// Shit happens! If encounter unknown url, force redirect to main page
app.use(function(req, res, next) {
  res.redirect("/");
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Good Habits app listening on port ${port}!`));
