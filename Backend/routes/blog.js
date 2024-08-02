const  express = require('express');
const router = express.Router();


//Import Controller 
const {commentController} = require(  '../controllers/commentControllers')

//Mapping Create

router.post('/comments/create', commentController)

//Export
module.exports = router;