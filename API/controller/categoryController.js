const categoryModel = require('../model/categoryModel');

const index = (req,res)=>{
   try{
    return res.render('index')
   } catch(err){
    console.log(err);
    return false;
   }
}

const categoryaddPage = (req,res)=>{
    try{
        return res.render('form')

    } catch(err){
        console.log(err);
        return false
    }
}

const addcategory = async (req,res)=>{
    try{
        const add = await categoryModel.create({
            category : req.body.category,
        })
        return res.status(200).send({
            success : true,
            message : "Category is Created"
        })
    } catch(err){
       return res.status(503).send({
        success : false,
        message : err
       })
    }
}

const categoryView = async (req,res)=>{
    try{
        let category = await categoryModel.find({});
        return res.status(200).send({
            success :true,
            message : "category created",
            category
        })
    } catch(err){
        return res.status(503).send({
            success : false,
            message : err,
        })
    }
}

const categoryDelete = async(req,res)=>{
    try{
        let id = req.query.id;
        let data = await categoryModel.findById(id);
        if(data){
            await categoryModel.findByIdAndDelete(id);
            return res.status(200).send({
                success : true,
                message : "Category Delete"
            })
        }
    } catch(err){
        return res.status(503).send({
            success : false,
            message : "ID not found",
        })
    }
}
 
const categoryShow = async (req,res)=>{
    try{
        let id = req.query.id;
        let data = await categoryModel.findById(id);
         return res.status(200).send({
            success : true,
            message : "category is fetch",
            data,
         })
    } catch (err){
        return res.status(503).send({
            success : false,
            message : "ID not found",
        })
    }
}

const categoryUpdate = async(req,res)=>{
    try{
        let id = req.query.id;
        let data = await categoryModel.findById(id);
        if(data){
            await categoryModel.findByIdAndUpdate(id,{
                category : req.body.category,
            })
            return res.status(200).send({
                success : true,
                message : " category Update Succefully"
            })
        }
    } catch(err){
        return res.status(503).send({
            success : false,
            message : "ID not found",
        })
    }
}
module.exports = {
    index,
    categoryaddPage,
    addcategory,
    categoryView,
    categoryDelete,
    categoryUpdate,
    categoryShow
}