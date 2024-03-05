const Category = require('../model/category')


const addcategory = (req,res) =>{
    return res.render('category/addcategory');
};



module.exports = {
    addcategory
}