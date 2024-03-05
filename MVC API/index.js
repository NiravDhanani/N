const express = require('express')
const port = 8000
const app = express();

app.set('view engine','ejs')
app.use(express.urlencoded())
app.use('/',require('./routes/apiroutes'))

app.listen(port,(err)=>{
 if(err){
    console.log(err);
    return false
 }
 console.log(`port start ${port}`);
})

