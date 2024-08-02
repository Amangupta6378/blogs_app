const mongoose = require('mongoose');


// Explain Schema

const likeSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //refrence to the post model
    },
    user:{
        type:String,
        required: true
    },
   
})

// Export 
module.exports = ("like", likeSchema)