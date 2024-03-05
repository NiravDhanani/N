const { log } = require('console');
const server = require('express');
const port = 8000;
const app = server();

app.set('view engine','ejs');

let record = [
    {
        id : 1,
        name : "Nirav",
        phone : 23
    },
    {
        id : 2,
        name : "Happy",
        phone : 2323,
    },
];
// middelware 
app.use(server.urlencoded());

app.get('/',(req,res)=>{
    return res.render('index',{
        record
    });
})

app.get('/add',(req,res)=>{
    return res.render('add');
});

app.post('/add',(req,res)=>{
    let name = req.body.name;
    let phone = req.body.phone;
    
    let obj = {
        id : Math.floor(Math.random() * 1000 ),
        name,phone,
    }
    record.push(obj);
    console.log(`Data Add Succesfully`);
    return res.redirect('/');
});

app.get('/deletedata',(req,res)=>{
    let deleteId = req.query.deleteId;

    let newrecord = record.filter((item)=>{
        return item.id != deleteId;
    });
    record = newrecord
    return res.redirect('/');
});

app.get('/editdata',(req,res)=>{
   let editid = req.query.editid;
   let single = record.find(item=> item.id == editid);

   if(!single){
        console.log(`invalid Data`);
        return res.redirect('/');
   }
   return res.render('edit',{single});
  
});

app.post('/updateuser',(req,res)=>{
    let name = req.body.name;
    let phone = req.body.phone;
    if(!name || !phone){
        console.log('name and phone not avialble');
        return res.redirect('/');
    }
    let updaterecord = record.map((item)=>{
        if(item.id == req.body.editid){
            item.name = req.body.name;
            item.phone = req.body.phone;
        }
        return item;
    })
    record = updaterecord;
    return res.redirect('/');
})



app.listen(port,(err)=>{
    if(err){
        console.log('404,error');
        return false;
    }
    console.log(`port running ${port}`);
})