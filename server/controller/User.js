const User = require("../model/User")
const OTP = require("../model/OTP");
const Profile = require("../model/Profile");
const otpGenerator = require("otp-generator");
require("dotenv").config();
const bcrypt =require("bcrypt")
const jwt= require("jsonwebtoken")


exports.signUp = async (req,res)=>{
    try {
        const {firstName,lastName,userName,email,password,confirmPassword,otp} = req.body;

    if(!firstName || !lastName || !userName || !email || ! password || !confirmPassword || !otp){
        return res.status(401).json({
            success :true,
            message:"Fill all input fields"
        })
    }

     //match the two password
     if(password!==confirmPassword){
        return res.status(400).json({
            success:false,
            message:"Password and confirm password are not matched"
        })
    }

    const checkExisitingUser = await User.findOne({email});
        if(checkExisitingUser){
            return res.status(400).json({
                success:false,
                message:"User already exist"
            })
        }
        const recentOTP =await OTP.find({email}).sort({ createdAt: -1 }).limit(1);

        console.log(recentOTP)
        console.log(otp)
        console.log(recentOTP[0].otp)
        //validate the OTP
        if(recentOTP.length == 0){
            //OTP not found
            return res.status(400).json({
                success:false,
                message:"OTP not found"
            })
        } else if(otp!= recentOTP[0].otp){
            //Invalid OTP
            return res.status(400).json({
                success:false,
                message:"OTP not matching"
            })

        }

        const hashedPassword =  await bcrypt.hash(password,10);



        //create a entry in Db
        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNo:null,
        })




          console.log(contactNo)
        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNo,
            password:hashedPassword,
            accountType,
            additionalDetails:profileDetails._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`
        })



        //return res

        return res.status(200).json({
            success:true,
            message:"User create Sucessfully",
            user,
        })


    
        
    } catch (error) {
        
    }

}

exports.sendOtp = async (req,res)=>{
    try {
        //fetch email from req body
        console.log(req.body)
     const { email } = req.body;
     console.log(email,"this is the email")
 
     //check if user already exist or not
 
     const existingUser = await User.findOne({email});
 
     //ifuser already exist then return  a response
     if(existingUser){
         return res.status(401).json({
             success:false,
             message:"user Already exist"
         })
     }
 
     var otp = otpGenerator.generate(6,
         {
             upperCaseAlphabets:false,
             lowerCaseAlphabets:false,
             specialChars:false
         })
     console.log("OTP Generator",otp);
     //check unique otp or not
     let result = await OTP.findOne({otp:otp});
     console.log("REsult",result);
     while(result){
  
         otp = otpGenerator.generate(6,{
             upperCaseAlphabets:false,
             lowerCaseAlphabets:false,
             specialChars:false,
         });
 
         result = await OTP.findOne({otp:otp});
 
     }    
     const otpPayload = {email,otp};
     //create an entry in db
     const otpBody = await OTP.create(otpPayload);
 
     console.log(otpBody);
 
     return res.status(200).json({
         success:true,
         message:"OTP send Succesfully",
         otp,
     })
 
     
    } catch (error) {
     console.log(error)
 
      return res.status(500).json({
         success:false,
         message:"Error occur at sending OTP",
         
     });
     
    }
}