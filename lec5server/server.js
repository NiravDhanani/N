
const fs = require('fs');
const handle = (req,res) => {
    // console.log(req.url)
    let page = ''
    switch (req.url){
        case '/':
            page = './index.html';
            break;
        case '/home':
            page = './home.html';
            break;
    }
    fs.readFile(page,(err,record)=>{
        if(err){
          console.log("page not found");
            return false;
        }
       res.end(record);
    })
}

module.exports = handle;

