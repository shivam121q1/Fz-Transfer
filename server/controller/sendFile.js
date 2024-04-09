const mailSender = require("../utils/mailSender");

exports.sendFile = async(req,res)=>{
    try {
        const {email,url}= req.body;

        await sendVerificationmail(email,url).then( ()=>{
            return res.status(200).json({
                success: true,
                msg: "Mail Send Successfully",
            })
        })        
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Error in Sending Mail",
            error: error.message
        })
    }
}

async function sendVerificationmail(email,url){
    try {
       const mailResponse = mailSender(email,"The file link is ",url);
       console.log("Email send",mailResponse);
        
       
    } catch (error) {
       console.log("error occured while sending mail",error.message);
       throw error
       
       
    }
 }