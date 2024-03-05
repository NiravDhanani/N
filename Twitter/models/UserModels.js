const mongoose = require('mongoose')

const UserData = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Signup',
        require : false,
    },
    post_content : {
        type: String,
        require : true
    },
    post_image : {
        type: String,
        require : true
    },
    post_date : {
        type: Date,
        default : Date.now
    },
});

const Post_data = mongoose.model('tweeter-data',UserData)

module.exports = Post_data;
