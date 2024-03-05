const SingupUser = require('../model/SingupModel');

const tablePage = (req,res)=>{
    return res.render('tables')
}

const dashboard = (req,res)=>{
    return res.render('dashboard')
}

const ProductPage = (req,res)=>{
    return res.render('Product')
}

module.exports = {
    tablePage,
    dashboard,
    ProductPage,
}