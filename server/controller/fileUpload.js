const path = require('path')
const Files = require('../model/Files')
require("dotenv").config();
const jwt = require('jsonwebtoken');
const User = require('../model/User');


exports.FileUpload = async (req,res)=>{
    try {
        const uploadedFile = req.files.file;
        const {token} = req.body;
        const Fid = Date.now();
        console.log(token);
        
        
        const path = __dirname + "/files/" + `${Fid}` + `.${uploadedFile.name.split('.')[1]}`;
       
        uploadedFile.mv(path,(err)=>{
            console.log(err);
        });


        const file = await Files.create({
            fileid: Fid,
            filename: uploadedFile.name,
            filetype: uploadedFile.mimetype,
            filesize: uploadedFile.size/(8*1024),
            filepath: path,
        })
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode);
        const user =  await User.findByIdAndUpdate(decode.id,{Files:file._id});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Not able to update the file"
            })

        }

        res.json({
            success:true,
            message:"File Upload sucessfully",
            data: file,
        });

    }
    catch(error){
        
            res.status(500).json({
                success: false,
                msg: "unable to post the file",
                error: error.message
            })
        
    }

}