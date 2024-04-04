exports.sendFile = async(req,res)=>{
    try {
        const {email,url}= req.body;

        await sendVerificationmail(email,url);


        
    } catch (error) {
        
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