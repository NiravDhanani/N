const express = require('express')
const port = 8000
const app = express();
const db = require('./config/db')
const UserModel = require('./models/userModule');
const path = require('path');


app.use(express.urlencoded({extended:true}))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.set('view engine','ejs')
app.use('/',require('./routes/indexroutes'))


app.listen(port,(err)=>{
    if(err){
        console.log('server not found');
        return false;
    }
    console.log(`server start on port ${port}`);
})