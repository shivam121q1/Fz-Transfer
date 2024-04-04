const express = require('express');
const router = express.Router();

// import route
const {Dashboard}  = require('../controller/Dashboard')
const {Login, Signup, sendOtp, verifyOtp} = require('../controller/Auth')
const {auth} = require("../middleware/auth");
const { FileUpload } = require('../controller/fileUpload');
const {filepreview , DownlaodFile} = require('../controller/filepreview');
const { searchUser } = require('../controller/SearchUser');



// router.
router.post("/Login",Login)
router.post("/Signup",Signup)
router.post("/sendOTP",sendOtp);
router.post("/verifyOtp",verifyOtp);
router.post('/FileUplaod',FileUpload);
router.post('/filepreview/:fileid',filepreview);
router.get('/filepreview/:fileid',DownlaodFile);
router.get('/searchUser',searchUser)



// export router
module.exports = router;