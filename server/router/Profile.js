const express = require('express');
const router = express.Router();

// import route
const {Dashboard}  = require('../controller/Dashboard')
const {Login, Signup, sendOtp, verifyOtp} = require('../controller/Auth')
const {auth} = require("../middleware/auth")



// map router
router.get("/Dashboard" ,auth, Dashboard);
// router.
router.post("/Login",Login)
router.post("/Signup",Signup)
router.post("/sendOTP",sendOtp);
router.post("/verifyOtp",verifyOtp);



// export router
module.exports = router;