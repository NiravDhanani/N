const passport = require('passport')
const passportLocal = require('passport-local').Strategy;
const SingupUser = require('../model/SingupModel')
const bcrypt = require('bcrypt')

passport.use(new passportLocal({
    usernameField : "email"
}, async (email,password,done)=>{
    try{
        const user = await SingupUser.findOne({ email : email })
        if(!user){
            console.log('userid incorrect');
            return done(null,false)
        }

        const PasswordMatch = await bcrypt.compare(password, user.password)
        if (!PasswordMatch){
            console.log(`password incorrect`);
            return done(null,false)
        }
        return done(null,user)

    } catch (err){
        console.log(err);
    }
}))

passport.serializeUser((user,done)=>{
    return done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    let data = await SingupUser.findById(id);
    return done(null,data)
})

passport.checkUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/')
}

passport.setUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.users = req.body
    }
}