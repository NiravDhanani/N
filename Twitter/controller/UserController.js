const Loginmodel = require('../models/LoginModels')
const UserModels= require('../models/UserModels')

const homePage = async(req,res)=>{
    try{
        let single = await Loginmodel.findOne({});

        return res.render('home',{single});
    } catch(err){
        console.log(err);
    }
}

const userProfile = async(req,res)=>{
   
}


module.exports = {
    homePage,
}