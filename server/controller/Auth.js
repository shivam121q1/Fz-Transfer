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
        const user  = await User.findOne({ email });
        if(user){
            return res.status(200).json({
                success: true,
                msg: "User Logged in Successfully",
            })
        }else{
            return res.status(400).json({
                success: false,
                msg : "Unable to login user need to Signup first",
                err : e.message
            })
        }
    }catch(e){
        return res.status(400).json({
            success: false,
            msg : "Unable to login user need to Signup first",
            err : e.message
        })
    }
} 

exports.Signup = async(req,res)=>{
    try{
        const {email,password,name,number} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            res.status(400).json({
                success: false,
                msg: "User already exist"
            })
            process.exit(1);
        }
        const user = await User.create({
            email,password,name,number
        })
        return res.status(200).json({
            success: true,
            msg: "User created successfully"
        })
            
    }catch(e){
        return res.status(400).json({
            success: false,
            msg: "Error Occured while Signup",
            error: e.message
        })
    }
}