const mongoose = require('mongoose')

const SingupUser = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    cpassword : {
        type : String,
        require : true,
    },
    username : {
        type : String,
        require : true,
        unique : true,
    }
})


const user = mongoose.model('Singup-Data',SingupUser);

module.exports = user