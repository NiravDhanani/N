const User = require('../modules/register');

const index = (req, res) => {
  
    return res.render('index')
}

const login = (req, res) => {
    if(res.locals.users){
        return res.redirect('/index');
    }
    return res.render('login');
}

const register = (req, res) => {
    return res.render('register');
}

const registerUser = async (req, res) => {
    const { name, email, password, cpassword } = req.body;
    if (cpassword === password) {
        let data = await User.create({
            name, email, password
        });
        console.log(`User registered successfully`);
        return res.redirect('/');
    }
    return res.redirect('back');
}

const loginUser = async (req, res) => {
    try {
        // You may want to perform some actions upon successful login
        return res.redirect('/index');
    } catch (error) {
        console.error(`Error logging in: ${error.message}`);
        return res.render('/', { error: 'Login failed. Please try again.' });
    }
}

const logout = (req,res)=>{
    try{
        return res.redirect('/')
    } catch(err){
        console.log(`log out success`);
        return false
    }
}
module.exports = {
    index,
    login,
    register,
    registerUser,
    loginUser
    ,logout
}
