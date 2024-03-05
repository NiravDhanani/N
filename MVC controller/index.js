const express = require('express')
const port = 8000;
const app = express()

app.set('view engine','ejs')

app.use('/',require('./routes/indexRoutes'))

app.listen(port,(err)=>{
    if(err){
        console.log(`not found`)

    }
    console.log(`server start on port ${port}`);
})