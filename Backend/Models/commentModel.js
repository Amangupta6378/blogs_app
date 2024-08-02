const mongoose = require('mongoose');


// Explain Schema

const commentSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //reference to the post model
    },
    user:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required: true
    }
})



// Export 
module.exports = mongoose.model("comment",commentSchema)