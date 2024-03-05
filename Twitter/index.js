const express = require('express');
const port = 8000;
const app = express();
const db = require('./confing/db');
const path = require('path');
const passport = require('passport');
const passportLocal = require('./confing/PassportStrategy');
const session = require('express-session');
const cookie = require('cookie-parser');
const multer = require('multer')

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use(session({
    name: 'abc',
    secret: '12',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.checkUser)

app.use('/Assets', express.static(path.join(__dirname, 'Assets')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', require('./routes/routes'));

app.listen(port, (err) => {
    if (err) {
        console.log(`server not found`);
    }
    console.log(`server start on port ${port}`);
});
