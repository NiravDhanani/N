const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Argone-Dashboard');

const db =  mongoose.connection;
db.on('connected',(err)=>{
    if(err){
        console.log(`not connected`);
    }
    console.log(`DB connected`);
})