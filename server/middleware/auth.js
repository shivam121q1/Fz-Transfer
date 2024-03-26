const jwt = require("jsonwebtoken")
require("dotenv").config();
const User = require("../model/User")

//auth

exports.auth = async (req,res,next)=>{
    try {
        const token =req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer","");

        if(!token){
            return res.status(401).json({
                status:false,
                message:"Token Missing"
            })
        }

        //verify the token 

        try {

            

            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode;

            
        } catch (error) {
            //verification issue 
            
            return res.status(401).json({
                success:false,
                message:"Invalid TOken "
            })
        }

        next();
        
         

        
    } catch (error) {

        return res.status(401).json({
            success:false,
            message:"Something Went Wrong while verfying the token"
        })
        
    }

}
//is Student or not 
exports.isStudent = async(req,res,next)=>{
    try {
        
        if( req.user.accountType !=="Student"){
            return res.status(401).json({
                success:false,
                message:"THis is a protected route for Students only"
            })
        }
        next();

    

        
    } catch (error) {

        return res.status(500).json({
            success:false,
            message:"User Role is not verfied"
        })
        
    }

}

//is Instructor

exports.isInstructor =(req,res,next)=>{
    try {

        if(req.user.accountType !=="Instructor"){
            return res.status(401).json({
                success:false,
                message:"THis is a protected route for instructor"
            })
        }
        next();
        
    } catch (error) {

        return res.status(500).json({
            success:false,
            message:"User Role is not verfied"
        })
        
    }
}
//is Admin

exports.isAdmin =(req,res,next)=>{
    try {
           console.log(req.user.role)
        if(req.user.accountType !=="Admin"){
            return res.status(401).json({
                success:false,
                message:"THis is a protected route for admin"
            })
        }
        next();
        
    } catch (error) {

        return res.status(500).json({
            success:false,
            message:"User Role is not verfied"
        })
        
    }
}









