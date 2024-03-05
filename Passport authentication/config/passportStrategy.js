const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const User = require('../modules/register');

passport.use(new passportLocal({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        let user = await User.findOne({ email: email });
        if (!user || user.password !== password) {
            console.log(`Username and password not correct`);
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        return done(null, false);
    }
}));

passport.serializeUser((user,done)=>{
    return done(null,user._id)
})

passport.deserializeUser( async(id,done)=>{
    try{
        const user = await User.findById(id)
        done(null,user)
    } catch (err){ 
        return done(null,false)
    }
})


passport.check = (req,res,next)=>{
    if(req.isAuthenticated()){
        console.log('succsess');
        return next()
    }
    return res.redirect('/')
}

passport.setUser = (req,res,next) => {
    if(req.isAuthenticated()){
        res.locals.users = req.user 
    }
    return next();
}

module.exports = passport;
