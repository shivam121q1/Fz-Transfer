const Files = require('../model/Files');
const File = require('../model/Files');
const fs = require('fs')
const path = require('path')


exports.filepreview = async(req,res) =>{
    try{
        const {fileid} = req.params;
        console.log(fileid)
        const isFileExist = await File.findOne({fileid});
        if(isFileExist){
            return res.status(200).json({
                success: true,
                msg: "File Fetched Successfully",
                file: isFileExist
            });
        }else{
            return res.status(500).json({
                success: false,
                msg: "File Not found in db",
            });
        }
    }
    catch{
        (e)=>{
            console.log("Error occured",e)
        }
    }
}

exports.DownlaodFile = async(req,res) => {
    try{
        const {fileid} = req.params;
        const isFileExist = await File.findOne({fileid});
        if(isFileExist){
            fs.access(isFileExist.filepath, fs.constants.F_OK, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(404).send('File not found');
                }
                
                // Set headers to trigger a download
                res.setHeader('Content-Disposition', `attachment; filename="${isFileExist.fileName}"`);
                res.setHeader('Content-Type', 'application/octet-stream');
        
                // Stream the file to the response
                const fileStream = fs.createReadStream(isFileExist.filepath);
                fileStream.pipe(res);
            });
        }
        

    }
    catch{
        return res.status(404).json({
            success: false,
            msg: "File Not Found",
        })
    }
}