const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    category : {
        type : String,
        require : true,
    }
})

const user = mongoose.model('category',categorySchema)

module.exports = user