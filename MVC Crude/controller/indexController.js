const UserModel = require('../models/userModule');
const fs = require('fs')
const viewPage = async (req,res)=>{
   try{
    let record = await UserModel.find({})
    return res.render('index',{ record })
   } catch(err){
        console.log(err)
        return false;
    }
}
const formPage = async (req,res)=> {
     return res.render('form');
}

const addData = async (req,res) =>{
    try{
        const {name,geneder,city} = req.body;
        let user = await UserModel.create({
            name,geneder,city, image : req.file.path
        })
        if(user){
            console.log(`Use add`);
            return res.redirect('/');
        }

    } catch(err){
        console.log(err)
        return false;
    }
}

const deletedata = async (req,res)=>{
    try{
        const id = req.query.id;
        let del = await UserModel.findById(id);
        fs.unlinkSync(del.image)
        let user = await UserModel.findByIdAndDelete(id);
        if(user){
            console.log(`delete data`);
            return res.redirect('back');
        }
    }  catch(err){
        console.log(err)
        return false;
    }
}
const editdata = async (req,res) =>{
    try{
       const id=req.query.id;
       const single = await UserModel.findById(id);
   
        return res.render('edit',{ single })
   
    }  catch(err){
        console.log(err)
        return false;
    }
}
const update = async (req,res)=>{
    try {
        if(req.file){
            const id= req.body.editid;
            let old = await UserModel.findById(id)
            fs.unlinkSync(old.image)
            let update = await UserModel.findByIdAndUpdate(id,{
                name:req.body.name,
                geneder:req.body.geneder,
                city:req.body.city,
                image:req.file.path
            })
            return res.redirect('/')
        } else{
            const id= req.body.editid;
            let old = await UserModel.findById(id)
            let update = await UserModel.findByIdAndUpdate(id,{
                name:req.body.name,
                geneder:req.body.geneder,
                city:req.body.city,
                image:old.image,
            })
            return res.redirect('/')
        }
    }catch(err){
        console.log(err)
        return false;
    }
}
module.exports = {
    viewPage,
    formPage,
    addData,
    deletedata,
    editdata,
    update
}