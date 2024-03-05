const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/db')

app.set('view engine','ejs')
app.use(express.urlencoded())

app.use('/',require('./route/route'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Server Start ${port}`);
})

