const express = require('express');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
const db = require('./config/db');



const passport = require('passport');
const passportLocal = require('./config/passportStrategy');
const session = require('express-session');

app.use(session({
    name: 'abc',
    secret: '123',
    saveUninitialized: true,
    resave: true,
    cookie : {
        maxAge : 1000 * 60 *60 * 24
    }
}));
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);


app.use('/', require('./routes/routes'));

app.listen(port, (err) => {
    if (err) {
        console.log('Server not started');
        return false;
    }
    console.log(`Server started on port ${port}`);
});
