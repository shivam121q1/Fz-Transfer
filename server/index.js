const express = require("express");
const app = express();
// load evv file
require('dotenv').config();


const Profile = require('./router/Profile')


const PORT = process.env.PORT || 3000;
app.use('/api' , Profile);

app.get('/' ,(req,res)=>{
    res.send("This is home page");
})

app.listen(PORT,()=>{
    console.log(`Server Started at port no ${PORT}`);
})