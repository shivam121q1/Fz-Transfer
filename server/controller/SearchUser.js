const User = require("../model/User")

exports.searchUser = async (req,res)=>{
    try {
        const {email}= req.body;
        if(!email){
            return res.status(400).json({
                success:false,
                message:"Enter a email first"
            })

        } 

        const user =  await User.findOne({email})

        if(!user){
            return res.status(401).json({
                success:false,
                message:"User Not exist"
            })

        }
        return res.status(200).json({
            success:true,
            message:"Successfully Searched",
            user
        }
        )
            
    } catch (error) {
        console.log('Error in searchUser');
        return res.status(500).json({
            success:false,
            message:"Error in seraching user"
        })

        
    }
}