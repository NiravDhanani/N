const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TWITTER')

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log(`db notr connected`);
    }
    console.log(`DB connected`);
});