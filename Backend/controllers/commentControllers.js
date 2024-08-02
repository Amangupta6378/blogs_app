//import model
const Comment = require("../Models/commentModel")
const  Post= require("../Models/postModel")

exports.commentController=async ( req,res)=>{
    try{
        //fetch data from req.body
    const {post, user, like} = req.body;
    // create a new comment
    const  commentData =new Comment(
        {post, user, like}
    );

    // save the new comment into the database
    const savedComment = await  commentData.save();

    //find the post by ID, add the new comment to its comment array.
     let updatePost=await Post.findByIdAndUpdate(post,{$push:{comment:savedComment._id}},{new:true})
     .populate("comment")
     .exec();

     res.json({
        post:updatePost
     })
    }
    catch(error){
        console.log("Error  in saving the comment", error);
         res.status(500).json({
             success: false,
             message:"Error in adding the comment"
         });
    }
}