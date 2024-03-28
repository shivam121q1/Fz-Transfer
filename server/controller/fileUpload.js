const path = require('path')

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
    
        
        let path = __dirname + "/files/" + Date.now() + `.${uploadedFile.name.split('.')[1]}`;

        console.log(path)
        uploadedFile.mv(path,(err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:"File Upload sucessfully"
        });

    }
    catch{
        res.json({
            success: false,
            msg: "unable to post the file"
        })
    }

}