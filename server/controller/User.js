const User = require("../model/User")



exports.Login = async(req,res)=>{
    try{
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                success: false,
                msg: "FIll all inputs",
            })
        }
        const user  = await User.findOne({ email }).populate('additionaldetails')
    }catch(e){
        return res.status(500).json({
            success: true,
            msg : "Unable to login",
            err : e.message
        })
    }
} 