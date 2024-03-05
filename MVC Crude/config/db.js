const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/MVC_CRUD_REV');
const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`DB connected`);
})

