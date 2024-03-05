const mongoose = require('mongoose')
const category = mongoose.Schema({
    category : {
        type : String,
        require : true,
    },
})

const categoryModel = mongoose.model('Category',category);

module.exports = categoryModel;