const User = require("../model/User")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


exports.Login = async(req,res)=>{
    try{
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                success: false,
                msg: "FIll all inputs",
            })
        }
        const user  = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success:false,
                msg:"User not exist Please register first"
            })
        }
         //token generate,after password match 

         if(await bcrypt.compare(password,user.password)){

            const payload ={
                email: user.email,
                id:user._id,
                
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });

            user.token = token;
            user.password = undefined;

            const options ={
                 expires: new Date(Date.now()+3*24*60*60*1000),
                 httpOnly:true,
            }

            //create cookies and send response

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
            })
        } else{
            return res.status(401).json({
                success:false,
                message:"Password is incorrect"
            })
        }

        
    }catch(e){
        return res.status(500).json({
            success: false,
            msg : "Unable to login user need to Signup first",
            err : e.message
        })
    }
} 

exports.Signup = async(req,res)=>{
    try{
        const {email,password,confirmPassword,name,number} = req.body;
        if(!name ||!email || !password || !confirmPassword || !number){
            return res.status(403).json({
               success:false,
               message:"All fields are required"
            })
       }

        const existingUser = await User.findOne({email});

        if(password!==confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password and confirm password are not matched"
            })
        }


        if(existingUser){
            res.status(400).json({
                success: false,
                msg: "User already exist"
            })
            process.exit(1);
        }

        //hashed the password
        const hashedPassword =  await bcrypt.hash(password,10);


        const user = await User.create({
            email,
            password:hashedPassword,
            name,
            number
        })
        return res.status(200).json({
            success: true,
            msg: "User created successfully"
        })
            
    }catch(e){
        return res.status(500).json({
            success: false,
            msg: "Error Occured while Signup",
            error: e.message
        })
    }
}