const mongoose = require('mongoose')

const user = mongoose.Schema({
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
});

const userModel =  mongoose.model('Register-data',user);

module.exports = userModel;