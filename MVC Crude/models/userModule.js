const mongoose = require("mongoose");
const UserModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  geneder: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  image :{
    type:String,
    require:true,
  }
});

const user = mongoose.model('MVC-CRUDE-REVISION',UserModel)

module.exports = user;
