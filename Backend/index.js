const express= require('express');
const  app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dataEntry')
  .then(() => {
    console.log("MongoDB Connected Successfully.");
  })
  .catch((error) => {
    console.log("Problem in MongoDB connection:", error);
    alert("Problem in MongoDB Connection");
    process.exit(1);
  });

require('dotenv').config();
const PORT = process.env.PORT || 7008

//middleware
app.use(express.json());

const blog = require("./routes/blog");

//mount
app.use("/app/v1", blog) ;

// const connectWithDb = require("./config/database");
// connectWithDb();

app.listen(PORT, (req,res)=>{
    console.log(`Server is running on ${PORT} port`)
})

app.get('/export', (req, res) => {
    res.send('Data is successfully exported.')
})