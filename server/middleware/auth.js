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

