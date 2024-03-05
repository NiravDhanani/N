const mongoose = require('mongoose')

const UserModule = mongoose.Schema({
    name :  {
        type : String,
        require : true
    },
    email :  {
        type : String,
        require : true
    },
    phone : {
        type :String,
        require :true
    },
    password :  {
        type : String,
        require : true
    },
    cpassword :  {
        type : String,
        require : true
    },
    username:{
        type : String,
        require : true,
        unique : true,
    },
    image : {
        type : String,
        require : true,
    }
})

const user = mongoose.model('Twiter_login',UserModule);

module.exports = user;