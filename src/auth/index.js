const passport = require("passport");
const githubStrategy = require("passport-github").Strategy;

const User = require("../user/models/User");

// Configure the GitHub strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the GitHub API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
const authParams = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callback: process.env.GITHUB_CALLBACK
};
passport.use(
  new githubStrategy(
    authParams,
    (accessToken, refreshToken, profile, callback) => {
      User.findOneAndUpdate(
        // A filter to find a record
        { githubId: profile.id },
        // This is a new object that will be created if user with exact `githubId` is not found
        {
          githubId: profile.id,
          name: profile.displayName,
          email: profile.emails.map(o => o.value)[0]
        },
        // Options:
        // new - return updated object instead of old one
        // upsert - if user is not found create new one
        { new: true, upsert: true },
        function(err, user) {
          return callback(err, user);
        }
      );
    }
  )
);

// A bit ugly that this topic is hidden in the documentation
// and you get a vague error that your user is not serializable
// spent half an hour trying to figure out what's going on here.
// http://www.passportjs.org/docs/configure/
// The idea is that in order to keep the user logged-in you store in
// the session in a hash some kind of user identifier. And you need to
// explicitly say what you want to hash.
passport.serializeUser(function(user, done) {
  done(null, user.githubId);
});
passport.deserializeUser(function(id, done) {
  User.findOne({ githubId: id }, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
