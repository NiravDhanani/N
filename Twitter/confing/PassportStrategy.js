const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const LoginData = require("../models/LoginModels");

passport.use(
  new passportLocal(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await LoginData.findOne({ email: email });
        if (!user) {
          console.log(`incorrect user email`);
          return done(null, false);
        }
        if (user.password != password) {
          console.log(`incorrect user password`);
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        console.log(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = await LoginData.findById(id);
  return done(null, user);
});

passport.setUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/");
};

passport.checkUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.users = req.body;
  }
  return next();
};


module.exports = passport