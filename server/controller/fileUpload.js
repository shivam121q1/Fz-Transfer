const path = require('path')
const Files = require('../model/Files')

exports.FileUpload = async (req,res)=>{
    try {
        //file fetch
        
        // const file = req.files.file;
        // console.log(file);

        // let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;    //jis bhi current directoy meh khade usko yeh dikhata haib


        // file.mv(path,(err)=>{
        //     console.log(err);
        // });

        // res.json({
        //     success:true,
        //     message:"File Upload sucessfully"
        // });

     
        const uploadedFile = req.files.file;
        const Fid = Date.now();
        
        const path = __dirname + "/files/" + `${Fid}` + `.${uploadedFile.name.split('.')[1]}`;
        // console.log(uploadedFile)
        // console.log(uploadedFile.name ,uploadedFile.mimetype, uploadedFile.size/(8*1024) , path);

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