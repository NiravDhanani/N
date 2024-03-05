const LoginData = require("../models/LoginModels");

const loginPage = (req, res) => {
  try {
    if(res.locals.users){
      return res.redirect('/home');
    }
    return res.render("pages/login");
  } catch (err) {
    console.log(`${err}`);
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, phone, password, cpassword } = req.body;
    let usercode = Math.floor(Math.random()*100)
    let data = await LoginData.create({
      name,
      email,
      phone,
      password,
      username : `@${name.slice(0,3)}${name.slice(3,5)}.${usercode}`,
      image : req.file.path,
    });
    console.log(`user create`);
    return res.redirect('/')
  } catch (err) {
    console.log(err);
  }
};

const loginUser = (req,res)=>{
    return res.redirect('/home')
}

const logout = (req,res)=>{
  try{
    req.logout((err)=>{
      if(err){
        console.log(`not log out ${err}`);
        return false
      }
      console.log('user logOut');
      return res.redirect('/')
    })
  } catch(err){
    console.log(`not log out ${err}`);
    console.log(err);
  }
}


module.exports = {
  loginPage,
  addUser,
  loginUser,
  logout,
};
