const express = require("express");

const port = 8000;

const app = express();

const path = require('path')

const db = require('./config/db')
const bcrypt = require('bcrypt');
const passport = require("passport");
const passportLocal = require('./config/passportStrategy');
const session = require('express-session')
const cookie = require('cookie-parser')

app.set("view engine", "ejs");
app.use('/assets',express.static(path.join(__dirname,"assets")));

app.use(express.urlencoded());

app.use(session({
  name : 'abc',
  secret : "@abc123",
  resave : true,
  saveUninitialized : true,
  cookie : {
    maxAge : 1000 * 60 * 60 * 24,
  }
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/',require('./routes/dashboardRout'))



app.listen(port, (err) => {
  if (err) {
    console.log("Page not found");
    return false;
  }
  console.log(`port start on ${port}`);
});
