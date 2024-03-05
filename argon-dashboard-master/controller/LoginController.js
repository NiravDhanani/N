const SignupData = require('../model/SingupModel');
const bcrypt = require('bcrypt')

const SigninPage = (req,res) =>{
    return res.render('sign-in')
}

const SingUpPage = (req,res) =>{
    return res.render("sign-up");
}

const registerUser = async(req,res)=>{
    try{
        const { name,email,password,cpassword} = req.body;

        let hasspassword =  await bcrypt.hash(password, 10);
        if(password == cpassword){
            let data = await SignupData.create({
                name,
                email,
                password : hasspassword,
                username : `@${name.slice(0,5)}`
            })
            return res.redirect('/')
        }
    } catch(err){
        console.log(`${err}`);
    }
}


const LoginUser = (req,res)=>{
    try{
        return res.redirect('/dashboard')
    } catch(err){
        console.log(err);
    }
}

const dashboard = (req,res)=>{
    try{
        return res.render('dashboard')
    } catch(err){
        console.log(err);
    }
}


module.exports = {
    SigninPage,
    SingUpPage,
    registerUser,
    LoginUser,
    dashboard
}