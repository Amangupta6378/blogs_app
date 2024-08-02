const mongoose = require('mongoose');


// Schema

const postSchema = mongoose.Schema({
    tile:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required : true
    },
    like:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like"
    },
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    }],
})

//export
module.exports = ("Post", postSchema);