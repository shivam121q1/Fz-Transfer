const express = require("express");
const db = require("./config/database")
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express();
// load evv file
require('dotenv').config();



const Profile = require('./router/Profile')
const PORT = process.env.PORT || 3000;
db.connect();

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use('/api/v1' , Profile);
app.use(express.static(path.join(__dirname, '\controller\files')));


app.get('/' ,(req,res)=>{
    res.send("This is home page");
})

app.listen(PORT,()=>{
    console.log(`Server Started at port no ${PORT}`);
    console.log(__dirname)
})