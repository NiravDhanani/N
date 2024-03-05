const mongoose = require('mongoose')
const UserModel = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    city : {
        type : String,
        require : true,
    },
    avtar : {
        type : [String],
        require : true,
    }
})

const user = mongoose.model('USER-multer',UserModel);

module.exports = user;